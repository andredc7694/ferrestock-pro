'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Inventario extends Model {
    static associate(models) {
      Inventario.belongsTo(models.Producto, { foreignKey: 'producto_id', as: 'producto' });
    }
  }
  
  Inventario.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    producto_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    stock_actual: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      defaultValue: 0,
      validate: { min: 0 } // Validación extra en el modelo
    }
  }, {
    sequelize,
    modelName: 'Inventario',
    tableName: 'inventario',
    underscored: true,
    timestamps: true
  });
  
  return Inventario;
};