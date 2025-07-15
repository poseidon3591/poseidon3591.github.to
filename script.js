document.addEventListener('DOMContentLoaded', function() {
    // Buttons effects
    const buttons = document.querySelectorAll('.glow-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.boxShadow = '0 0 30px rgba(0, 255, 255, 1)';
            setTimeout(() => {
                this.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.5)';
            }, 300);
        });
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00ffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00ffff", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        }
    });
});