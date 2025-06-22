import express from 'express';
import { obtenerProyectos } from '../controllers/proyectoController.js';

const router = express.Router();

router.get('/', obtenerProyectos);

export default router;
