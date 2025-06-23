import setupNavigation from './navigation.js';
import setupAnimations from './animations.js';
import setupFormulario from './form.js'
import setupProyectos from './proyectos.js';

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupAnimations();
  setupFormulario();
  setupProyectos();
});
