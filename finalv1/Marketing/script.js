// script.js

document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentItem = 0;
    let intervalId;

    function showItem(index) {
        carouselItems[currentItem].classList.remove('active');
        currentItem = (index + carouselItems.length) % carouselItems.length;
        carouselItems[currentItem].classList.add('active');
    }

    function showNextItem() {
        showItem(currentItem + 1);
    }

    function showPrevItem() {
        showItem(currentItem - 1);
    }

    function startCarousel() {
        intervalId = setInterval(showNextItem, 5000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    prevButton.addEventListener('click', () => {
        stopCarousel();
        showPrevItem();
        startCarousel();
    });

    nextButton.addEventListener('click', () => {
        stopCarousel();
        showNextItem();
        startCarousel();
    });

    // Start the carousel
    startCarousel();

    // Add animation on scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const adServices = document.querySelectorAll('.ad-service');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateOnScroll() {
        serviceCards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                setTimeout(() => {
                    card.classList.add('animate');
                }, index * 100);
            }
        });

        adServices.forEach((service, index) => {
            if (isElementInViewport(service)) {
                setTimeout(() => {
                    service.classList.add('animate');
                }, index * 100);
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
});