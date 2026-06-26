# Plan: HU-004 — Modelo de Usuario y Autenticación

## Enfoque Técnico
1. **Dependencias:** Instalar `bcryptjs` (para encriptar contraseñas) y `jsonwebtoken` (para crear tokens).
2. **Modelo y Migración:** Usar Sequelize CLI para generar el modelo `User` con campos: nombre, email, password, rol.
3. **Seguridad:** Implementar un "hook" en el modelo de usuario para hashear la contraseña automáticamente antes de guardarla.
4. **Lógica:** Crear `controllers/authController.js` para manejar el registro y login, y `routes/auth.js` para exponer los endpoints.
5. **Autenticación:** Implementar la generación de tokens JWT.