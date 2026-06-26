const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db');
const routes = require('./routes'); // Importamos nuestras rutas
const errorHandler = require('./middlewares/errorHandler'); // Importamos el manejador de errores

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Usamos las rutas
app.use(routes);

// Ruta no encontrada (404)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Ruta no encontrada' });
});

// Middleware de errores (siempre al final)
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a la base de datos establecida.');
  } catch (error) {
    console.error('❌ Error en BD:', error.message);
  }
});