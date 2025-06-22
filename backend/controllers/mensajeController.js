import pool from '../db/conexion.js';
import nodemailer from 'nodemailer';

export const enviarMensaje = async (req, res) => {
  const { nombre_usuario, correo, mensaje } = req.body;

  if (!nombre_usuario || !correo || !mensaje) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  try {
    // Guardar en la BD
    await pool.query(
      'INSERT INTO mensaje (nombre_usuario, correo, mensaje) VALUES ($1, $2, $3)',
      [nombre_usuario, correo, mensaje]
    );

    // Enviar correo
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
 
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: 'Nuevo mensaje desde el portafolio',
      text: `Nombre: ${nombre_usuario}\nCorreo: ${correo}\nMensaje: ${mensaje}`,
    });

    res.status(200).json({ mensaje: 'Mensaje enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al enviar el mensaje' });
  }
};
