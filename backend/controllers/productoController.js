const productoService = require('../services/productoService');

exports.listarProductos = async (req, res, next) => {
  try {
    const productos = await productoService.obtenerTodos();
    res.json({ success: true, data: productos });
  } catch (error) { 
    next(error); 
  }
};

exports.crearProducto = async (req, res, next) => {
  try {
    const producto = await productoService.crearProducto(req.body);
    res.status(201).json({ success: true, message: 'Producto creado exitosamente', data: producto });
  } catch (error) { 
    next(error); 
  }
};

