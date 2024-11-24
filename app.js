particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 65, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800 // Area density
        }
      },
      "color": {
        "value": "#ffffff" // Particle color
      },
      "shape": {
        "type": "circle" // Particle shape
      },
      "opacity": {
        "value": 0.5 // Transparency
      },
      "size": {
        "value": 5, // Particle size
        "random": true // Random sizes
      },
      "line_linked": {
        "enable": true, // Connect particles with lines
        "distance": 150, // Max distance to link particles
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6 // Movement speed
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab" // Effect on hover
        },
        "onclick": {
          "enable": true,
          "mode": "repulse" // Effect on click
        }
      }
    },
    "retina_detect": true // High-DPI devices support
  });
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
});
  

