# Spec: HU-004 — Modelo de Usuario y Autenticación (Login/Registro)

## 1. Objetivo
Crear el modelo de datos `User` en la base de datos y configurar los endpoints básicos para que un usuario pueda registrarse y loguearse en el sistema, obteniendo un token JWT para sus sesiones.

## 2. Requerimientos Funcionales y Técnicos
- **Modelo de Usuario:** Crear el modelo `User` en Sequelize con los campos: `nombre`, `email` (único), `password` (hasheado) y `rol` (Admin, Vendedor, Bodeguero).
- **Seguridad:** Usar `bcrypt` para encriptar las contraseñas antes de guardarlas en la base de datos.
- **Autenticación:** Crear endpoints `POST /api/auth/register` y `POST /api/auth/login`.
- **JWT:** Al loguearse, el servidor debe devolver un token JWT (JSON Web Token) que identifique al usuario.

## 3. Casos Borde y Validaciones
- El sistema no debe permitir dos usuarios con el mismo email.
- La contraseña no debe guardarse en texto plano (debe ser un hash seguro).
- Si el login falla (email no existe o clave incorrecta), devolver error 401 (No autorizado).

## 4. Criterios de Aceptación
- [ ] El modelo `User` existe en la base de datos (`ferrestock_pro`).
- [ ] El registro de usuario cifra la contraseña con bcrypt.
- [ ] El login devuelve un token JWT válido.
- [ ] Ambos endpoints están correctamente definidos en `routes/auth.js`.