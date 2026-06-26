const productoService = require('../services/productoService');
const { Producto } = require('../models');

exports.listarProductos = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, search, categoria_id } = req.query;
    const resultado = await productoService.obtenerTodos({ page, limit, search, categoria_id });
    
    res.json({
      success: true,
      data: resultado.rows,
      meta: {
        total: resultado.count,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages: Math.ceil(resultado.count / limit)
      }
    });
  } catch (error) { next(error); }
};

exports.crearProducto = async (req, res, next) => {
  try {
    const producto = await productoService.crearProducto(req.body);
    res.status(201).json({ success: true, message: 'Producto creado exitosamente', data: producto });
  } catch (error) { 
    next(error); 
  }
};

exports.actualizarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    
    await producto.update(req.body);
    res.json({ success: true, message: 'Producto actualizado' });
  } catch (error) { next(error); }
};

exports.eliminarProducto = async (req, res, next) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });
    
    await producto.destroy(); // Gracias a paranoid: true, esto es un soft delete
    res.json({ success: true, message: 'Producto desactivado' });
  } catch (error) { next(error); }
};
