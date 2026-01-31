const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let birdY = 200;
let velocity = 0;
const gravity = 1.5;
let score = 0;

document.addEventListener("click", () => velocity = -10);

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  velocity += gravity;
  birdY += velocity;

  ctx.fillStyle = "yellow";
  ctx.fillRect(50, birdY, 20, 20);

  score++;
  ctx.fillStyle = "black";
  ctx.fillText("Score: " + score, 10, 20);

  if (birdY > canvas.height) {
    alert("Game Over! Score: " + score);
    birdY = 200;
    velocity = 0;
    score = 0;
  }
  requestAnimationFrame(loop);
}

loop();
