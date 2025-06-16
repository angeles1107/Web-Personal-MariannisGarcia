export default function setupFormulario() {
  const form = document.querySelector('.formulario');
  const alerta = document.getElementById('alerta-flotante');
  const alertaMensaje = document.getElementById('alerta-mensaje');

  if (!form || !alerta || !alertaMensaje) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombreusuario').value.trim();
    const correo = document.getElementById('correoelectronico').value.trim();
    const texto = document.getElementById('mensaje').value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

    let mensaje = '';
    let tipo = '';

    if (!nombre || !correo || !texto) {
      mensaje = 'Por favor completa todos los campos.';
      tipo = 'error';
    } else if (!emailValido) {
      mensaje = 'Por favor introduce un correo válido.';
      tipo = 'error';
    } else {
      mensaje = 'Mensaje enviado con éxito';
      tipo = 'exito';
      form.reset();
    }

    mostrarAlerta(mensaje, tipo);
  });

  function mostrarAlerta(mensaje, tipo) {
    alerta.className = `alerta ${tipo} visible`; // Quita clases anteriores y aplica nuevas
    alertaMensaje.textContent = mensaje;
    alerta.style.display = 'block';

    setTimeout(() => {
      alerta.classList.remove('visible');
      setTimeout(() => {
        alerta.style.display = 'none';
      }, 300); // Tiempo para la animación de salida
    }, 4000);
  }
}
