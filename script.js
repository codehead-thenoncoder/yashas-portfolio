// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome Animation Logic
window.addEventListener('load', () => {
    const overlay = document.getElementById('welcome-overlay');
    const heroContent = document.querySelector('.hero-content');

    setTimeout(() => {
        overlay.classList.add('fade-out');
        heroContent.classList.add('visible');

        // Initialize section scroll animations
        const sections = document.querySelectorAll('.content-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }, 4000); // Overlay fade-out delay for full icon animation
});
