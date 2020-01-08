window.onload = () => {
  let canvas = document.getElementById('mainCanvas');
  let ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;


  // define the Flake class
  class Flake {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.dy = size * 0.2;
    }

    // method definitions
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.closePath();
    }

    update() {
      if (this.y > height + 10) {
        this.x = Math.floor(Math.random() * width);
        this.y = Math.floor(Math.random() * -0.25 * height);
      } else {
        this.x += (Math.random() * 1) - 1;
        this.y += this.dy;
      }
    }
  }


  // create and populate an array of flakes
  const flakes = [];

  while (flakes.length < width / 40) {
    let flake = new Flake(
      Math.floor(Math.random() * width) + width / 10,
      Math.floor(Math.random() * -height),
      Math.floor(Math.random() * 6) + 4
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
