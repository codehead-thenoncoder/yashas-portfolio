// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll Reveal Effect
ScrollReveal().reveal('.fade-in', {
  distance: '50px',
  duration: 1000,
  delay: 200,
  origin: 'bottom',
  reset: true
});
