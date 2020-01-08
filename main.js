window.onload = () => {
  let canvas = document.getElementById('mainCanvas');
  let ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;
  // temporary change rate values
  let dx = 0;
  let dy = 1.5;

  // define the Flake class
  class Flake {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }

    // method definitions
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    update() {
      if (this.y > height + 10) {
        this.x = Math.floor(Math.random() * width);
        this.y = Math.floor(Math.random() * -0.25 * height);
      } else {
        this.x += dx;
        this.y += dy;
      }
    }
  }

  // create and populate an array of flakes
  const flakes = [];

  while (flakes.length < width / 40) {
    let flake = new Flake(
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * -height)
    );
    flakes.push(flake);
  }

  // loop over the array and draw, update each flake
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < flakes.length; i++) {
      flakes[i].draw();
      flakes[i].update();
    }
  }

  setInterval(loop, 10);
}
