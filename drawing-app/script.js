const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;

canvas.addEventListener('mousedown', () => {
    isPressed = true;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
});

canvas.addEventListener('mousemove', (e) => {
    // On va récupérer la position de la souris lors de l'évent et demander à tracer un cercle à cet endroit
    if(isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x, y);
    }
});

function drawCircle(x, y) {
    ctx.beginPath();  // On commence la définition de notre dessin
    ctx.arc(x, y, size, 0, Math.PI * 2);  // On va tracer un cercle (voir méthode associée)
    ctx.fill(); // On dessine ce que'on a défini
}

increaseBtn.addEventListener('click', () => {
    size += 5;
    if(size > 50) {
        size = 50;
    }
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if(size < 5) {
        size = 5;
    }
});

function draw() {
    /*ctx.clearRect(0, 0, canvas.clientWidth, canvas.height); // Efface le contenu du canvas
    drawCircle(x++, y); // Trace le cercle en le décalant à chaque nouvel appel de la fonction
    requestAnimationFrame(draw); // Entraîne la répétition de la fonction ce qui une sorte d'animation*/
}

draw();