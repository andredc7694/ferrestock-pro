const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const productoRoutes = require('./productoRoutes'); // Conexión para el módulo de productos

// Acoplamiento de submódulos de la API
router.use('/auth', authRoutes);
router.use('/productos', productoRoutes);

module.exports = router;