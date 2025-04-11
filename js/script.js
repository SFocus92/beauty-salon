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
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});
