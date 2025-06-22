import pool from '../db/conexion.js';

export const obtenerProyectos = async (req, res) => {
  try {
    const resultado = await pool.query(`
      SELECT p.*, 
        ARRAY_AGG(t.nombre) AS tecnologias 
      FROM proyecto p
      LEFT JOIN proyecto_tecnologia pt ON p.id_proyecto = pt.id_proyecto
      LEFT JOIN tecnologia t ON pt.id_tecnologia = t.id_tecnologia
      GROUP BY p.id_proyecto
      ORDER BY p.id_proyecto
    `);

    res.json(resultado.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener proyectos' });
  }
};
