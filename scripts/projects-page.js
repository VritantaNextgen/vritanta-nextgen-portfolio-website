document.addEventListener('DOMContentLoaded', function () {
    const scrollDownIcon = document.querySelector('.scroll-down img');
    const modal = document.getElementById('dashboard-modal');

    // Smooth scroll to projects section when clicking scroll down icon
    scrollDownIcon.addEventListener('click', () => {
        document.querySelector('.projects-section').scrollIntoView({ behavior: 'smooth' });
    });


