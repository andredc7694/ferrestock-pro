# Spec: HU-002 — Diseño y Configuración de la Base de Datos MySQL

## 1. Objetivo
Configurar la conexión a la base de datos MySQL en el backend utilizando Sequelize como ORM (Object-Relational Mapping). Esto permitirá que el sistema interactúe con la base de datos usando código JavaScript en lugar de escribir consultas SQL manuales.

## 2. Requerimientos Funcionales y Técnicos
- **Base de Datos:** Crear una base de datos local en MySQL llamada `ferrestock_pro`.
- **ORM:** Instalar `sequelize` y `mysql2` en el backend.
- **Configuración:** Crear un archivo de configuración de base de datos (`db.js` o `database.js`) que utilice las variables de entorno del archivo `.env`.
- **Variables de Entorno:** El archivo `.env` debe contener las credenciales (DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT).

## 3. Casos Borde y Validaciones
- Si las credenciales del `.env` son incorrectas, el servidor debe mostrar un error claro en la consola, pero no debe crashear la aplicación completa si es posible manejarlo.
- Asegurar que la configuración soporte el "timezone" correcto para Perú (UTC-5) para que las fechas de ventas se guarden bien.

## 4. Criterios de Aceptación
- [ ] La base de datos `ferrestock_pro` existe en el servidor MySQL local.
- [ ] Existe un archivo `.env` en el backend con las credenciales correctas.
- [ ] El servidor Express al arrancar muestra un mensaje en consola confirmando: "Conexión a la base de datos establecida con éxito".