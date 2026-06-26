'use strict';

const { Usuario, Rol } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// POST /api/auth/register
exports.register = async (req, res, next) => {
  try {
    const { nombre, apellidos, email, password, rol_id, telefono } = req.body;

    if (!nombre || !email || !password || !rol_id) {
      return res.status(400).json({
        success: false,
        message: 'Los campos nombre, email, password y rol_id son obligatorios'
      });
    }

    const existe = await Usuario.findOne({ where: { email } });
    if (existe) {
      return res.status(400).json({
        success: false,
        message: 'Ya existe un usuario registrado con ese email'
      });
    }

    const nuevoUsuario = await Usuario.create({
      nombre,
      apellidos: apellidos || null,
      email,
      password,
      rol_id,
      telefono: telefono || null
    });

    res.status(201).json({
      success: true,
      message: 'Usuario creado correctamente',
      data: {
        id:    nuevoUsuario.id,
        email: nuevoUsuario.email,
        nombre: nuevoUsuario.nombre
      }
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/auth/login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email y password son obligatorios'
      });
    }

    const usuario = await Usuario.findOne({
      where: { email, activo: 1 },
      include: [{
        model: Rol,
        as: 'rol',
        attributes: ['id', 'nombre']
      }]
    });

    if (!usuario) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      });
    }

    const passwordValido = await bcrypt.compare(password, usuario.password);
    if (!passwordValido) {
      return res.status(401).json({
        success: false,
        message: 'Credenciales inválidas'
      });
    }

    const token = jwt.sign(
      {
        id:     usuario.id,
        rol_id: usuario.rol_id,
        rol:    usuario.rol.nombre
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '8h' }
    );

    res.json({
      success: true,
      message: 'Inicio de sesión exitoso',
      token,
      data: {
        id:       usuario.id,
        nombre:   usuario.nombre,
        apellidos: usuario.apellidos,
        email:    usuario.email,
        rol:      usuario.rol.nombre
      }
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/auth/me
exports.me = async (req, res, next) => {
  try {
    const usuario = await Usuario.findByPk(req.usuario.id, {
      attributes: { exclude: ['password'] },
      include: [{
        model: Rol,
        as: 'rol',
        attributes: ['id', 'nombre']
      }]
    });

    if (!usuario) {
      return res.status(404).json({
        success: false,
        message: 'Usuario no encontrado'
      });
    }

    res.json({
      success: true,
      data: usuario
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/auth/logout
exports.logout = async (req, res) => {
  res.json({
    success: true,
    message: 'Sesión cerrada correctamente'
  });
};