const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./models');
const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor'
  });
});

// Solución definitiva: Llamado a authenticate con logging false
db.sequelize.authenticate({ logging: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log('Conexión a la base de datos establecida.');
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });