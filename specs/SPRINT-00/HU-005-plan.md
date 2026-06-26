# Plan: HU-005 — Middleware de Protección

## Enfoque Técnico
1. Crear `backend/middlewares/authMiddleware.js` que verifique la existencia y validez del token JWT.
2. Configurar la función para que, si es exitosa, pase al siguiente paso (`next()`).
3. Probar la protección creando una ruta temporal protegida en `routes/auth.js` que requiera este middleware.