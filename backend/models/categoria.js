'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categoria extends Model {
    static associate(models) {
      Categoria.hasMany(models.Producto, { foreignKey: 'categoria_id' });
    }
  }
  
  Categoria.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(100), allowNull: false },
    descripcion: { type: DataTypes.STRING(255), allowNull: true }
  }, {
    sequelize,
    modelName: 'Categoria',
    tableName: 'categorias',
    underscored: true,
    timestamps: true,
    paranoid: true // Habilita el soft delete
  });
  
  return Categoria;
};