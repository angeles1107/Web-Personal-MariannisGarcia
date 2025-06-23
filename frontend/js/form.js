export default function setupFormulario() {
  const form = document.querySelector('.formulario');
  const alerta = document.getElementById('alerta-flotante');
  const alertaMensaje = document.getElementById('alerta-mensaje');

  if (!form || !alerta || !alertaMensaje) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombreusuario').value.trim();
    const correo = document.getElementById('correoelectronico').value.trim();
    const texto = document.getElementById('mensaje').value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    if (!nombre || !correo || !texto) {
      mostrarAlerta('Por favor completa todos los campos.', 'error');
      return;
    }

    if (!emailValido) {
      mostrarAlerta('Por favor introduce un correo válido.', 'error');
      return;
    }


    try {
      const respuesta = await fetch('https://web-personal-backend.onrender.com/api/mensaje', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre_usuario: nombre,
          correo: correo,
          mensaje: texto,
        }),
      });

      const data = await respuesta.json();

      if (respuesta.ok) {
        mostrarAlerta('Mensaje enviado con éxito', 'exito');
        form.reset();
      } else {
        mostrarAlerta(` ${data.mensaje || 'Error del servidor'}`, 'error');
      }
    } catch (error) {
      console.error(error);
      mostrarAlerta('No se pudo enviar el mensaje. Intenta más tarde.', 'error');
    }
  });

  function mostrarAlerta(mensaje, tipo) {
    alerta.className = `alerta ${tipo} visible`;
    alertaMensaje.textContent = mensaje;
    alerta.style.display = 'block';

    setTimeout(() => {
      alerta.classList.remove('visible');
      setTimeout(() => {
        alerta.style.display = 'none';
      }, 300);
    }, 4000);
  }
}
