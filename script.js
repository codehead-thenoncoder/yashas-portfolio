// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Welcome Animation Control
window.addEventListener('load', () => {
    const overlay = document.getElementById('welcome-overlay');
    const heroContent = document.querySelector('.hero-content');

    setTimeout(() => {
        overlay.classList.add('fade-out'); // Fades out the welcome overlay
        heroContent.classList.add('visible'); // Fades in hero content

        // Make each section visible on scroll
        const sections = document.querySelectorAll('.content-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => observer.observe(section));
    }, 3000); // 3 seconds for initials animation to complete
});
