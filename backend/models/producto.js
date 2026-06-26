'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsTo(models.Categoria, { foreignKey: 'categoria_id', as: 'categoria' });
      Producto.belongsTo(models.UnidadMedida, { foreignKey: 'unidad_medida_id', as: 'unidad_medida' });
      Producto.hasOne(models.Inventario, { foreignKey: 'producto_id', as: 'inventario' });
    }
  }
  
  Producto.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    codigo: { type: DataTypes.STRING(20), allowNull: false, unique: true },
    nombre: { type: DataTypes.STRING(150), allowNull: false },
    precio_compra: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    precio_venta: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    stock_minimo: { type: DataTypes.INTEGER, defaultValue: 0 },
    activo: { type: DataTypes.BOOLEAN, defaultValue: true },
    categoria_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
    unidad_medida_id: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
  }, {
    sequelize,
    modelName: 'Producto',
    tableName: 'productos',
    underscored: true,
    timestamps: true,
    paranoid: true // Activa deleted_at
  });
  
  return Producto;
};