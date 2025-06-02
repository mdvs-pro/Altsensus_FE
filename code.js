"use strickt";

const burgerButton = document.querySelector("#burgerButton");
const header = document.querySelector("#header");

burgerButton.addEventListener("click", () => {
  header.classList.toggle("showBurgerMenu");
});

const burgerMenuLinks = document.querySelectorAll("#burgerNav a");

burgerMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("showBurgerMenu");
  });
});
