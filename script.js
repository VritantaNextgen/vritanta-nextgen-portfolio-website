// Smooth Scrolling Animation
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('main section');
    const headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + headerHeight;
        sections.forEach(function(section) {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

// Responsive Navigation Menu
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('header nav');
    const navToggle = document.querySelector('header nav .nav-toggle');

    navToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });
});