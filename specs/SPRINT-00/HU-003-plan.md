# Plan: HU-003 — Configuración y Estructura del Servidor

## Enfoque Técnico
1. **Estructura:** Crear directorios base (`controllers`, `middlewares`, `models`, `routes`, `services`, `utils`) para organizar la lógica de negocio.
2. **Middleware:** Crear un archivo de manejo de errores global (`middlewares/errorHandler.js`) que capture fallos y devuelva respuestas limpias (JSON) en lugar de colapsar.
3. **Rutas:** Configurar el enrutador principal en `routes/index.js` y crear una ruta de salud (healthcheck) en `routes/health.js` para verificar que la API está viva.
4. **Integración:** Actualizar `server.js` para usar estas nuevas estructuras, incluyendo el middleware de errores y el manejo de rutas no encontradas (404).