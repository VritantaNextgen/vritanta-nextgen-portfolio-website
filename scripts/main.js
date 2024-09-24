// scripts/main.js
const continueBtn = document.querySelector('.continue-btn');

continueBtn.addEventListener('click', () => {
    // Smooth transition to main page
    document.body.classList.add('transitioning');
    setTimeout(() => {
        window.location.href = 'main.html';
    }, 500);
});