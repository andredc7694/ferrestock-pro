'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      // Un rol puede pertenecer a muchos usuarios
      Rol.hasMany(models.Usuario, { foreignKey: 'rol_id', as: 'usuarios' });
    }
  }

  Rol.init({
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    descripcion: { type: DataTypes.STRING(255), allowNull: true }
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'roles',
    underscored: true,
    timestamps: true,
    paranoid: true // Porque en tu DB tiene deleted_at
  });

  return Rol;
};