window.onload = () => {
  let canvas = document.getElementById('mainCanvas');
  let ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  // temporary start point values
  let x = 50;
  let y = 50;
  // temporary change rate values
  let dx = 0;
  let dy = 1.5;

  function drawFlake(xi, yi) {
    ctx.beginPath();
    ctx.arc(xi, yi, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFlake(x, y);
    x += dx;
    y += dy;
  }

  setInterval(draw, 10);
}
