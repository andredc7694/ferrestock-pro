const { Producto, Inventario, sequelize } = require('../models');
const { generarCodigoProducto } = require('../utils/generadores');

exports.obtenerTodos = async () => {
  return await Producto.findAll({
    include: ['categoria', 'unidad_medida', 'inventario']
  });
};

exports.crearProducto = async (data) => {
  // Iniciamos la transacción para garantizar la atomicidad
  const t = await sequelize.transaction();
  
  try {
    // Si no envían código, lo generamos automáticamente
    if (!data.codigo) {
      data.codigo = await generarCodigoProducto(data.categoria_id);
    }

    // 1. Crear el producto
    const nuevoProducto = await Producto.create(data, { transaction: t });

    // 2. Crear su registro de inventario en 0
    await Inventario.create({ 
      producto_id: nuevoProducto.id, 
      stock_actual: 0 
    }, { transaction: t });

    // Confirmamos la transacción
    await t.commit();
    return nuevoProducto;
  } catch (error) {
    // Si algo falla, revertimos todo
    await t.rollback();
    throw error;
  }
};