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
type nul > proyectos_pia-api\server\models\Usuario.js
type nul > proyectos_pia-api\server\repositories\usuarios.js
type nul > proyectos_pia-api\server\routes\usuarios.js
type nul > proyectos_pia-api\server\server.js
type nul > proyectos_pia-api\server\migrations\001-create-usuarios.sql
type nul > proyectos_pia-api\client\index.html
type nul > proyectos_pia-api\client\css\style.css
type nul > proyectos_pia-api\client\js\app.js
type nul > proyectos_pia-api\package.json