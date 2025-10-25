const canvas = document.getElementById('cascada');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columnas = Math.floor(canvas.width / 20);
const gotas = [];

for (let i = 0; i < columnas; i++) {
    gotas[i] = Math.random() * canvas.height;
}

function dibujar() {
    ctx.fillStyle = "rgba(2, 8, 20, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffff"; // Color neón
    ctx.font = "16px monospace";

    for (let i = 0; i < gotas.length; i++) {
        const texto = "01";
        const caracter = texto[Math.floor(Math.random() * texto.length)];
        ctx.fillText(caracter, i * 20, gotas[i] * 20);

        if (gotas[i] * 20 > canvas.height && Math.random() > 0.975) {
            gotas[i] = 0;
        }
        gotas[i]++;
    }
}

setInterval(dibujar, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
