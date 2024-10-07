document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const collectButton = document.getElementById('collectButton');
    const profileButtons = document.getElementById('profileButtons');

    // Toggle menu icon animation
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('active');
        // Here you can add code to show/hide a menu
    });

    // Collect button interaction
    collectButton.addEventListener('click', () => {
        alert('Item collected!');
        // Here you can add code for the collect functionality
    });

    // Profile button interactions
    profileButtons.addEventListener('click', (event) => {
        if (event.target.classList.contains('profile-button')) {
            alert('Profile clicked!');
            // Here you can add code to show profile details
        }
    });

    // Add hover effect to menu icon
    menuIcon.addEventListener('mouseenter', () => {
        menuIcon.querySelectorAll('span').forEach(span => {
            span.style.backgroundColor = '#ff00ff';
        });
    });

    menuIcon.addEventListener('mouseleave', () => {
        menuIcon.querySelectorAll('span').forEach(span => {
            span.style.backgroundColor = '#fff';
        });
    });
});