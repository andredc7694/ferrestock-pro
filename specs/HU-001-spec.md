# Spec: HU-001 — Inicialización del proyecto con Spec Kit y Entorno Base

## 1. Objetivo
Establecer la estructura base del proyecto FerreStock Pro (Backend y Frontend), inicializar el control de versiones con Git y configurar las dependencias principales para asegurar que el entorno de desarrollo esté listo para los siguientes módulos.

## 2. Requerimientos Funcionales y Técnicos
- **Estructura de carpetas:** Separación clara entre `/backend` (Node.js/Express) y `/frontend` (React/Vite).
- **Backend:** Inicializar `package.json`, configurar `server.js` básico y dependencias iniciales (express, cors, dotenv).
- **Frontend:** Inicializar el proyecto con Vite (React + JavaScript) e instalar Tailwind CSS para los estilos.
- **Git:** Inicializar el repositorio local y crear el archivo `.gitignore` para evitar subir `node_modules` y archivos `.env`.

## 3. Casos Borde y Validaciones
- Asegurar que los puertos por defecto no choquen (Ej: Backend en puerto 3000, Frontend en puerto 5173).
- Asegurar que el `.gitignore` esté en la raíz del proyecto cubriendo tanto el backend como el frontend.

## 4. Criterios de Aceptación
- [ ] Existe una carpeta `/backend` con su `package.json` y un servidor Express que responde "Hola FerreStock" en el puerto 3000.
- [ ] Existe una carpeta `/frontend` con un proyecto Vite de React funcionando.
- [ ] Tailwind CSS está correctamente configurado en el frontend.
- [ ] El repositorio Git está inicializado y tiene su primer commit.