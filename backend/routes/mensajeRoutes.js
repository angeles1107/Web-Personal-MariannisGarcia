import express from 'express';
import { enviarMensaje } from '../controllers/mensajeController.js';

const router = express.Router();

router.post('/', enviarMensaje);

export default router;
