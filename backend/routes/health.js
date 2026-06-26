const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Servidor activo y funcionando correctamente' });
});

module.exports = router;