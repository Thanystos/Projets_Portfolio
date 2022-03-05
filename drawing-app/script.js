const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;


canvas.addEventListener('mousedown', () => {

});

function drawCircle(x, y) {
    ctx.beginPath();  // On commence la définition de notre dessin
    ctx.arc(x, y, size, 0, Math.PI * 2);  // On va tracer un cercle (voir méthode associée)
    ctx.stroke(); // On dessine ce que'on a défini
}

drawCircle(50, 50);