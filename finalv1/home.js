document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.nav-link');
    const sliderItems = document.querySelectorAll('.slider-item');
    const heroSection = document.getElementById('home');
    const heroDescription = document.querySelector('.hero-description');
    const workCards = document.querySelectorAll('.work-card');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    const popupClose = document.getElementById('popup-close');
    const popupBody = document.getElementById('popup-body');

    // Sidebar toggle functionality
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            mainContent.classList.toggle('ml-64');
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero slider functionality
    sliderItems.forEach(item => {
        item.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            updateHeroContent(service);
            sliderItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function updateHeroContent(service) {
        const serviceData = {
            bi: {
                title: 'Business Intelligence',
                description: 'Transform your data into actionable insights with our advanced BI solutions.',
                background: 'pexels-agk42-2599244.jpg'
            },
            rpa: {
                title: 'Robotic Process Automation',
                description: 'Streamline your operations and boost efficiency with our cutting-edge RPA technologies.',
                background: 'https://source.unsplash.com/1600x900/?robot,automation'
            },
            web: {
                title: 'Web Development',
                description: 'Create stunning, responsive websites that engage your audience and drive results.',
                background: 'https://source.unsplash.com/1600x900/?web,coding'
            },
            marketing: {
                title: 'Marketing',
                description: 'Boost your brand visibility and reach your target audience with our innovative marketing strategies.',
                background: 'https://source.unsplash.com/1600x900/?marketing,digital'
            }
        };

        const content = serviceData[service];
        heroDescription.innerHTML = `
            <h2 class="text-3xl font-bold text-white mb-4">${content.title}</h2>
            <p class="text-xl text-white">${content.description}</p>
        `;
        heroSection.style.backgroundImage = `url('${content.background}')`;
    }

    // Work cards functionality
    workCards.forEach(card => {
        card.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            showPopup(service);
        });
    });

    popupClose.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', closePopup);

    const demoButtons = document.querySelectorAll('.demo-button');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const service = this.closest('.work-card').getAttribute('data-service');
            showPopup(service);
        });
    });

    function showPopup(service) {
        popupBody.innerHTML = getPopupContent(service);
        popupOverlay.classList.remove('hidden');
        popupContent.classList.remove('hidden');
        if (service === 'rpa') {
            typeWriter();
        }
    }

    function closePopup() {
        popupOverlay.classList.add('hidden');
        popupContent.classList.add('hidden');
    }

    function getPopupContent(service) {
        switch (service) {
            case 'bi':
                return `
                    <h2 class="text-3xl font-bold mb-4">Business Intelligence Dashboard</h2>
                    <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                        <img src="https://via.placeholder.com/1200x600?text=BI+Dashboard" alt="BI Dashboard" class="w-full rounded-lg">
                    </div>
                `;
            case 'rpa':
                return `
                    <h2 class="text-3xl font-bold mb-4">RPA Code Generation</h2>
                    <pre class="bg-gray-800 text-white p-4 rounded-lg"><code class="typewriter"></code></pre>
                `;
            case 'web':
                return `
                    <h2 class="text-3xl font-bold mb-4">Web Development Demo</h2>
                    <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                        <img src="https://via.placeholder.com/1200x600?text=Web+Development+Demo" alt="Web Development Demo" class="w-full rounded-lg">
                    </div>
                `;
            case 'marketing':
                return `
                    <h2 class="text-3xl font-bold mb-4">Marketing Strategy Flow</h2>
                    <div class="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                        <img src="https://via.placeholder.com/1200x600?text=Marketing+Strategy+Flow" alt="Marketing Strategy Flow" class="w-full rounded-lg">
                    </div>
                `;
        }
    }

    function typeWriter() {
        const code = `@ Hi Folks...

We can help you achieve the best business results using RPA:

1. UiPath: Automate complex workflows
2. Power Automate: Streamline Microsoft ecosystem
3. Python: Custom automation scripts
4. AI Agents: Intelligent decision-making bots

Our RPA solutions can:
- Reduce manual errors
- Increase productivity
- Cut operational costs
- Improve customer satisfaction

Let's transform your business together!`;

        const codeElement = document.querySelector('.typewriter');
        let i = 0;
        const speed = 50;

        function type() {
            if (i < code.length) {
                codeElement.innerHTML += code.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });

    // Update toggle button icon
    function updateToggleIcon() {
        const icon = darkModeToggle.querySelector('i');
        if (html.classList.contains('dark')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Initial icon update
    updateToggleIcon();

    // Update icon when theme changes
    darkModeToggle.addEventListener('click', updateToggleIcon);

    document.addEventListener('click', function(e) {
        if (e.target && e.target.closest('.work-card')) {
            const service = e.target.closest('.work-card').getAttribute('data-service');
            showPopup(service);
            if (service === 'rpa') {
                typeWriter();
            } else if (service === 'web') {
                setTimeout(init3DCube, 100);
            }
        }
    });

    // Handle form submission
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});