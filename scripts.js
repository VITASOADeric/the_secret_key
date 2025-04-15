document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Add hover effect for about section
    const aboutCards = document.querySelectorAll('#about .bg-white');
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('scale-105');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('scale-105');
        });
    });
}); 