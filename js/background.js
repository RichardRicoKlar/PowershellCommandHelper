export function initBackground() {
    const canvas = document.getElementById("bg");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    function drawSquares() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const size = 25;
        const density = 0.01;

        for (let x = 0; x < canvas.width; x += size) {
            for (let y = 0; y < canvas.height; y += size) {
                if (Math.random() < density) {
                    const shade = Math.floor(Math.random() * 180);
                    ctx.fillStyle = `rgb(${shade}, ${shade}, ${shade})`;
                    ctx.fillRect(x, y, size, size);
                }
            }
        }
    }

    drawSquares();
}
