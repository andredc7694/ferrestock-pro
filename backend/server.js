const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db'); // Importamos la conexión

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola FerreStock! El backend está funcionando correctamente.' });
});

// Arrancamos el servidor y probamos la conexión a la Base de Datos
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log(' Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error(' No se pudo conectar a la base de datos:', error.message);
  }
});