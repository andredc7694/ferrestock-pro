# Spec: HU-005 — Middleware de Verificación JWT (Protección de Rutas)

## 1. Objetivo
Crear un middleware que intercepte las peticiones a rutas protegidas, valide que el usuario envíe un token JWT válido en el encabezado `Authorization`, y asigne los datos del usuario al objeto `req.user` para su uso en los controladores.

## 2. Requerimientos Funcionales y Técnicos
- **Middleware:** Crear `middlewares/authMiddleware.js`.
- **Validación:** El middleware debe extraer el token del encabezado `Authorization: Bearer <token>`.
- **Verificación:** Usar `jwt.verify` junto con el `JWT_SECRET` del archivo `.env` para confirmar que el token es auténtico y no ha expirado.
- **Acceso:** Si el token es válido, debe inyectar el objeto usuario en la petición (`req.user = decoded`) para que los controladores sepan quién hizo la petición.

## 3. Casos Borde y Validaciones
- Si no se envía el encabezado `Authorization`, devolver error 401 (Acceso denegado).
- Si el token es inválido o ha expirado, devolver error 403 (Token inválido o expirado).

## 4. Criterios de Aceptación
- [ ] El middleware `authMiddleware.js` existe y exporta una función.
- [ ] Se puede proteger cualquier ruta usando este middleware.
- [ ] Las rutas protegidas devuelven error si no se envía el token en Postman.
- [ ] Si se envía un token válido, la ruta protegida permite el acceso.