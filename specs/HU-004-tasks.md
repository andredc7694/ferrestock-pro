# Tareas: HU-004

- [ ] 1. Instalar dependencias: `npm install bcryptjs jsonwebtoken`.
- [ ] 2. Generar modelo y migración: `npx sequelize-cli model:generate --name User --attributes nombre:string,email:string,password:string,rol:string`.
- [ ] 3. Ejecutar la migración: `npx sequelize-cli db:migrate`.
- [ ] 4. Modificar el modelo `models/user.js` para añadir el hashing de contraseña (hook `beforeCreate`).
- [ ] 5. Crear `controllers/authController.js` con funciones `register` y `login`.
- [ ] 6. Crear `routes/auth.js` y conectarlo en el enrutador principal (`routes/index.js`).
- [ ] 7. Probar registro y login en Postman.