"use strict";

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

// Scroll to Top Button Functionality
const scrollToTopButton = document.querySelector("#scrollToTop");

if (scrollToTopButton) {
  // Function to show/hide scroll to top button based on scroll position
  function toggleScrollToTopButton() {
    // Check for different second sections based on the page
    const secondSection =
      document.querySelector("#philosophy") ||
      document.querySelector("#copytrading");

    if (secondSection) {
      const secondSectionTop = secondSection.offsetTop;
      const scrollPosition = window.pageYOffset;

      // Show button when we reach the second section
      if (scrollPosition >= secondSectionTop - 100) {
        scrollToTopButton.classList.add("visible");
      } else {
        scrollToTopButton.classList.remove("visible");
      }
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", toggleScrollToTopButton);

  // Add click event listener for scroll to top
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Initial check on page load
  toggleScrollToTopButton();
}
