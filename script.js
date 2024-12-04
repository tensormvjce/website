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

VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25, // Max tilt rotation (default is 20)
    speed: 400, // Animation speed (default is 300)
    glare: true, // Enables glare effect
    "max-glare": 0.5, // Max glare opacity (0.5 = 50%)
  });


  const textElement = document.getElementById("shuffling-text");

  // List of texts for the slideshow
  const texts = ["TENSOR", "THE AI-ML CLUB"];
  let currentTextIndex = 0;
  
  function shuffleTextReveal(element, text, duration = 2000, interval = 100) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const textArray = text.split("");
    let revealedIndex = 0;
  
    const intervalId = setInterval(() => {
      let displayText = textArray
        .map((char, i) => {
          if (i < revealedIndex) {
            return char; // Fixed characters
          }
          return characters[Math.floor(Math.random() * characters.length)]; // Shuffled characters
        })
        .join("");
  
      element.textContent = displayText;
  
      if (revealedIndex < textArray.length) {
        revealedIndex++; // Reveal the next character
      } else {
        clearInterval(intervalId);
      }
    }, interval);
  }
  
  function startSlideshow() {
    setInterval(() => {
      currentTextIndex = (currentTextIndex + 1) % texts.length; // Loop through texts
      shuffleTextReveal(textElement, texts[currentTextIndex]);
    }, 4000); // Change text every 4 seconds
  }
  
  // Start the first text animation
  shuffleTextReveal(textElement, texts[currentTextIndex]);
  // Start the slideshow
  startSlideshow();
  