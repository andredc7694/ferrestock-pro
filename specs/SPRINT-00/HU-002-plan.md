# Plan: HU-002 — Configuración de la Base de Datos

## Enfoque Técnico
1. **Base de Datos:** El usuario deberá crear manualmente la base de datos `ferrestock_pro` en su servidor MySQL local (usando XAMPP, MySQL Workbench o la terminal).
2. **Dependencias:** En la carpeta `/backend`, se instalarán `sequelize` (el ORM) y `mysql2` (el driver para conectar Node con MySQL).
3. **Variables de Entorno:** Se creará un archivo `.env` en el backend para almacenar de forma segura las credenciales (usuario, contraseña, nombre de la BD).
4. **Conexión:** Se creará un archivo `config/db.js` que configurará la conexión usando Sequelize.
5. **Inicialización:** Se modificará `server.js` para que al arrancar el servidor, intente autenticarse con la base de datos y muestre un mensaje de éxito o error en la consola.