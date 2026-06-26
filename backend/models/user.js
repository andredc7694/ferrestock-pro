'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs'); // <--- 1. Importa bcrypt

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  
  User.init({
    nombre: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol: {
      type: DataTypes.ENUM('Admin', 'Vendedor', 'Bodeguero'),
      defaultValue: 'Vendedor'
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: { // <--- 2. Este es el truco para encriptar
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    }
  });
  return User;
};