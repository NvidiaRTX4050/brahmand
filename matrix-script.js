// Initializing the canvas
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Initial resize

// Devanagari characters
const letters = "अआइईउऊऋएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषस".split("");

// Font settings
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

// Function to draw the Matrix effect
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Semi-transparent black background for fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = fontSize + "px 'Noto Sans Devanagari', sans-serif";

    for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = `rgb(0, ${Math.random() * 255}, 0)`; // Random green shades
        ctx.shadowColor = "#0f0";
        ctx.shadowBlur = 10;
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Loop the animation
setInterval(drawMatrix, 33);
