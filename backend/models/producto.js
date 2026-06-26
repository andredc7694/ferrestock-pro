'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Producto extends Model {
    static associate(models) {
      Producto.belongsTo(models.Categoria, {
        foreignKey: 'categoria_id',
        as: 'categoria'
      });

      Producto.belongsTo(models.UnidadMedida, {
        foreignKey: 'unidad_medida_id',
        as: 'unidad_medida'
      });

      Producto.hasOne(models.Inventario, {
        foreignKey: 'producto_id',
        as: 'inventario'
      });
    }
  }

  Producto.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    precio_compra: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    precio_venta: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock_minimo: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    activo: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    categoria_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    unidad_medida_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Producto',
    tableName: 'productos',
    underscored: true,
    timestamps: true,
    paranoid: true,

    validate: {
      precioValido() {
        if (Number(this.precio_venta) < Number(this.precio_compra)) {
          throw new Error(
            'El precio de venta debe ser mayor o igual al precio de compra'
          );
        }
      },

      stockValido() {
        if (this.stock_minimo < 0) {
          throw new Error(
            'El stock mínimo no puede ser negativo'
          );
        }
      }
    }
  });

  return Producto;
};