'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UnidadMedida extends Model {}
  
  UnidadMedida.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(50), allowNull: false },
    abreviatura: { type: DataTypes.STRING(10), allowNull: false }
  }, {
    sequelize,
    modelName: 'UnidadMedida',
    tableName: 'unidades_medida',
    underscored: true,
    timestamps: true
  });
  
  return UnidadMedida;
};