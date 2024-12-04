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
  const texts = ["Welcome!", "Hover Over Me", "Enjoy the Tilt!", "Let's Shuffle"];
  let currentTextIndex = 0;
  
  function shuffleText(element, text, duration = 2000, interval = 100) {
    let shuffled = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const iterations = Math.ceil(duration / interval);
    let count = 0;
  
    const intervalId = setInterval(() => {
      // Generate random characters for each position
      shuffled = text
        .split("")
        .map((char, i) =>
          count >= iterations || Math.random() > 0.5 ? char : characters[Math.floor(Math.random() * characters.length)]
        )
        .join("");
  
      // Update the element's text
      element.textContent = shuffled;
  
      count++;
      if (count >= iterations) {
        clearInterval(intervalId);
        element.textContent = text; // Show the actual text
      }
    }, interval);
  }
  
  function startSlideshow() {
    setInterval(() => {
      // Get the next text in the array
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      shuffleText(textElement, texts[currentTextIndex]);
    }, 4000); // Change text every 4 seconds
  }
  
  // Start with the first text
  shuffleText(textElement, texts[currentTextIndex]);
  // Start the slideshow
  startSlideshow();
    