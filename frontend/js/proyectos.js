const URL_BACKEND = 'https://web-personal-backend.onrender.com/api/proyectos';

export default function setupProyectos() {
  obtenerProyectos();
}

async function obtenerProyectos() {
  try {
    const respuesta = await fetch(URL_BACKEND);
    const proyectos = await respuesta.json();
    console.log('Proyectos recibidos:', proyectos);
    renderizarProyectos(proyectos);
    console.log('Proyectos recibidos:', proyectos);
  } catch (error) {
    console.error('Error al cargar proyectos:', error);
  }
}

function renderizarProyectos(proyectos) {
  const contenedor = document.getElementById('contenedor-proyectos');
  contenedor.innerHTML = '';

  proyectos.forEach((proyecto, index) => {
    const div = document.createElement('div');
    div.classList.add('proyecto-card');
     const rutaImagen = proyecto.imagen; 

    div.innerHTML = `
      <img src="${rutaImagen}" alt="${proyecto.titulo}" class="imgproyecto">
      <h4>${proyecto.titulo}</h4>
      <p>${proyecto.descripcion}</p>
      <p><strong>Tecnologías:</strong> ${proyecto.tecnologias.join(', ')}</p>
      <a href="${proyecto.enlace_github}" target="_blank" class="btn-detalles">Ver detalles</a> 
    `;

    contenedor.appendChild(div);
    
    setTimeout(() => {
      div.classList.add('visible'); // <-- ¡Añade esta línea clave!
    }, 100 * index);
    
  });
}
