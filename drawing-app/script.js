const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 30;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup', () => {
    isPressed = false;
    
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    // On va récupérer la position de la souris lors de l'évent et demander à tracer un cercle à cet endroit
    if(isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        // on oublie pas d'actualiser x et y pour éviter de tracer une ligne par rapport à l'endroit où on avait cliqué la première fois
        x = x2;
        y = y2;
    }
});

function drawCircle(x, y) {
    ctx.beginPath();  // On commence la définition de notre dessin
    ctx.arc(x, y, size, 0, Math.PI * 2);  // On va tracer un cercle (voir méthode associée)
    ctx.fillStyle = color;
    ctx.fill(); // On dessine ce que'on a défini
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
    size += 5;
    if(size > 50) {
        size = 50;
    }

    updateSizeOnScreen() 
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if(size < 5) {
        size = 5;
    }

    updateSizeOnScreen() 
});

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
});

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}


// Animation inutile pour notre projet...
/*function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height); // Efface le contenu du canvas
    drawCircle(x++, y); // Trace le cercle en le décalant à chaque nouvel appel de la fonction
    requestAnimationFrame(draw); // Entraîne la répétition de la fonction ce qui une sorte d'animation
}*/