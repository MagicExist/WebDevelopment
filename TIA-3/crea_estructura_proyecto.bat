:: Crear estructura de directorios
mkdir proyectos_pia-api
mkdir proyectos_pia-api\server
mkdir proyectos_pia-api\server\config
mkdir proyectos_pia-api\server\models
mkdir proyectos_pia-api\server\repositories
mkdir proyectos_pia-api\server\routes
mkdir proyectos_pia-api\server\migrations
mkdir proyectos_pia-api\client
mkdir proyectos_pia-api\client\css
mkdir proyectos_pia-api\client\js

:: Crear archivos
type nul > proyectos_pia-api\server\config\database.js
type nul > proyectos_pia-api\server\models\tipo_proyecto.js
type nul > proyectos_pia-api\server\repositories\tipo_proyecto.js
type nul > proyectos_pia-api\server\routes\tipo_proyecto.js
type nul > proyectos_pia-api\server\server.js
type nul > proyectos_pia-api\server\migrations\001-create-tipo-proyectos.sql
type nul > proyectos_pia-api\client\index.html
type nul > proyectos_pia-api\client\css\style.css
type nul > proyectos_pia-api\client\js\app.js
type nul > proyectos_pia-api\package.json