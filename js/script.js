// Мобильное меню
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Корзина
let cartCount = 0;
const cartButton = document.getElementById('cart-button');
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});

// Анимация при прокрутке
const animateElements = document.querySelectorAll('.animate-slide-up, .animate-zoom-in, .animate-fade-in');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, { threshold: 0.3 });

animateElements.forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// Параллакс эффект для hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-image');
    const scrollPosition = window.pageYOffset;
    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});
