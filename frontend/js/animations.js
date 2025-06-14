// js/animations.js
export default function setupAnimations() {
  const elementos = document.querySelectorAll('.proyecto-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  elementos.forEach(el => observer.observe(el));
}
