const express = require('express');
const router = express.Router();
const prodController = require('../controllers/productoController');
const authMiddleware = require('../middlewares/authMiddleware');

// GET /api/productos
router.get('/', authMiddleware, prodController.listarProductos);

// POST /api/productos
router.post('/', authMiddleware, prodController.crearProducto);

module.exports = router;