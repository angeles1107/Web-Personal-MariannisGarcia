import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import proyectoRoutes from './routes/proyectoRoutes.js';
import mensajeRoutes from './routes/mensajeRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/proyectos', proyectoRoutes);
app.use('/api/mensaje', mensajeRoutes);

app.get('/',(req, res) => {
  res.send('Backend corriendo');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
