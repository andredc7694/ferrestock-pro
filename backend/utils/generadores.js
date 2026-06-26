const { Producto, Categoria } = require('../models');
const { Op } = require('sequelize');

const generarCodigoProducto = async (categoriaId) => {
  const categoria = await Categoria.findByPk(categoriaId);
  if (!categoria) throw new Error('Categoría no encontrada');

  // Tomar las primeras 4 letras en mayúsculas
  const prefijo = categoria.nombre.substring(0, 4).toUpperCase();
  
  // Buscar el último código que empiece con ese prefijo
  const ultimoProducto = await Producto.findOne({
    where: { codigo: { [Op.like]: `${prefijo}-%` } },
    order: [['codigo', 'DESC']]
  });

  let nuevoNumero = 1;
  if (ultimoProducto) {
    const partes = ultimoProducto.codigo.split('-');
    nuevoNumero = parseInt(partes[1]) + 1;
  }

  // Formatear rellenando con ceros: ej. HERR-0001
  return `${prefijo}-${String(nuevoNumero).padStart(4, '0')}`;
};

module.exports = { generarCodigoProducto };