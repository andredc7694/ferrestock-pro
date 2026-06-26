'use strict';

const productoService = require('../services/productoService');

// GET /api/productos
exports.listarProductos = async (req, res, next) => {
  try {
    const { search, categoria_id, estado_stock, page, limit } = req.query;

    const resultado = await productoService.listarProductos({
      search,
      categoria_id,
      estado_stock,
      page:  parseInt(page)  || 1,
      limit: parseInt(limit) || 10
    });

    res.json({
      success: true,
      message: 'Productos obtenidos correctamente',
      data: resultado.productos,
      pagination: {
        total:         resultado.total,
        pagina_actual: resultado.pagina_actual,
        total_paginas: resultado.total_paginas,
        por_pagina:    resultado.por_pagina
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/productos/:id
exports.obtenerProducto = async (req, res, next) => {
  try {
    const producto = await productoService.obtenerProductoPorId(req.params.id);

    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Producto obtenido correctamente',
      data: producto
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/productos
exports.crearProducto = async (req, res, next) => {
  try {
    const producto = await productoService.crearProducto(req.body);

    res.status(201).json({
      success: true,
      message: 'Producto creado correctamente',
      data: producto
    });
  } catch (error) {
    next(error);
  }
};

// PUT /api/productos/:id
exports.actualizarProducto = async (req, res, next) => {
  try {
    const producto = await productoService.actualizarProducto(
      req.params.id,
      req.body
    );

    if (!producto) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Producto actualizado correctamente',
      data: producto
    });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/productos/:id  (soft delete)
exports.desactivarProducto = async (req, res, next) => {
  try {
    const resultado = await productoService.desactivarProducto(req.params.id);

    if (!resultado) {
      return res.status(404).json({
        success: false,
        message: 'Producto no encontrado'
      });
    }

    res.json({
      success: true,
      message: 'Producto desactivado correctamente'
    });
  } catch (error) {
    next(error);
  }
};