const express = require('express');
const router = express.Router();
const healthRoutes = require('./health');
const authRoutes = require('./auth'); // <--- Importa esto

router.use('/api', healthRoutes);
router.use('/api/auth', authRoutes); // <--- Usa esto

module.exports = router;