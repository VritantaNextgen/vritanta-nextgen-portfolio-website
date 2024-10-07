document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('.main-content');
    const slider = document.getElementById('slider');
    const sliderDescription = document.getElementById('slider-description');
    const prevSlide = document.getElementById('prevSlide');
    const nextSlide = document.getElementById('nextSlide');
    const navLinks = document.querySelectorAll('.nav-link');

    // Slider content
    const slides = [
        {
            title: "Welcome to TechSolutions",
            description: "Empowering Your Digital Transformation",
            image: "pexels-pixabay-356056.jpg"
        },
        {
            title: "Robotic Process Automation",
            description: "Streamline Your Business Operations",
            image: "pexels-agk42-2599244.jpg"
        },
        {
            title: "Business Intelligence",
            description: "Turn Data into Actionable Insights",
            image: "pexels-asphotograpy-95916.jpg"
        },
        {
            title: "Web Development",
            description: "Create Stunning Digital Experiences",
            image: "pexels-mikael-blomkvist-6476584.jpg"
        }
    ];

    let currentSlide = 0;

    // Sidebar toggle functionality
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            mainContent.classList.toggle('ml-64');
        });
    }

    // Close sidebar when clicking outside of it (for mobile)
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggleButton = sidebarToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickOnToggleButton && window.innerWidth < 768) {
            sidebar.classList.remove('open');
            mainContent.classList.remove('ml-64');
        }
    });

    // Slider functionality
    function updateSlider() {
        slider.style.backgroundImage = `url('${slides[currentSlide].image}')`;
        sliderDescription.innerHTML = `
            <h2 class="text-4xl font-bold text-blue-600 mb-4">${slides[currentSlide].title}</h2>
            <p class="text-xl text-gray-600">${slides[currentSlide].description}</p>
        `;
    }

    function nextSlideHandler() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    function prevSlideHandler() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlider();
    }

    nextSlide.addEventListener('click', nextSlideHandler);
    prevSlide.addEventListener('click', prevSlideHandler);

    // Update slider based on navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            switch(section) {
                case 'home':
                    currentSlide = 0;
                    break;
                case 'rpa':
                    currentSlide = 1;
                    break;
                case 'bi':
                    currentSlide = 2;
                    break;
                case 'web':
                    currentSlide = 3;
                    break;
            }
            updateSlider();
            
            // Smooth scroll to the corresponding section
            const targetSection = document.getElementById(section);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Initialize slider
    updateSlider();

    // Form submission handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            const formData = new FormData(contactForm);
            console.log('Form submitted with the following data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }

            // Clear the form
            contactForm.reset();

            // Show a success message (you can replace this with a more sophisticated notification)
            alert('Thank you for your message. We will get back to you soon!');
        });
    }

    // Add animation to service cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => {
        observer.observe(card);
    });
});