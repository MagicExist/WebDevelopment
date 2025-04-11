const express = require('express');
const cors = require('cors');
const tipoProyectosRouter = require('./routes/tipo_proyecto');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/proyectos/tipos', tipoProyectosRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API de tipo proyectos' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});