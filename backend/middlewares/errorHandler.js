const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Registra el error en consola para ti
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  });
};

module.exports = errorHandler;