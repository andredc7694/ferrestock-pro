const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuramos la conexión a la base de datos
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    timezone: '-05:00', // Zona horaria de Perú
    logging: false, // Oculta los mensajes molestos de SQL en la consola
  }
);

module.exports = sequelize;