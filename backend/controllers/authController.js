const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const { nombre, email, password, rol } = req.body;
    const newUser = await User.create({ nombre, email, password, rol });
    res.status(201).json({ success: true, message: 'Usuario creado', user: { id: newUser.id, email: newUser.email } });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ success: true, token, user: { nombre: user.nombre, rol: user.rol } });
  } catch (error) {
    next(error);
  }
};