'use strickt';

const burgerButton = document.querySelector('#burgerButton');
const header = document.querySelector('#header');


burgerButton.addEventListener('click', () => {
    header.classList.toggle('showBurgerMenu');
});