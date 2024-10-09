// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    // Animate process steps on scroll
    const processSteps = document.querySelectorAll('.process-step');
    
    const animateOnScroll = () => {
        processSteps.forEach(step => {
            const stepTop = step.getBoundingClientRect().top;
            const stepBottom = step.getBoundingClientRect().bottom;
            
            if (stepTop < window.innerHeight && stepBottom > 0) {
                step.classList.add('animate');
            }
        });
    };

    // Initial check for visible elements
    animateOnScroll();

    // Check for visible elements on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Interactive hover effect
    processSteps.forEach(step => {
        step.addEventListener('mouseover', () => {
            step.style.transform = 'scale(1.05) translateY(-10px)';
        });

        step.addEventListener('mouseout', () => {
            step.style.transform = 'scale(1) translateY(0)';
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});