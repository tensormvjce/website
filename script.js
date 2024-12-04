// script.js
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // Show when scrolled down 300px
    scrollTopBtn.style.display = "flex";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Scroll to the top of the page when the button is clicked
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});