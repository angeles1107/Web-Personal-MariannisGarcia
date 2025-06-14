// js/navigation.js
export default function setupNavigation() {
  const toggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  // Mostrar/ocultar menú con el botón
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Ocultar menú al hacer clic en un enlace
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('show');
    });
  });

  // Cambio de fondo al hacer scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}
