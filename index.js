const $canvas = document.querySelector("#myCanvas");
// get the context
const context = $canvas.getContext("2d");

// -----Rectangle
function drawRect() {
  // define fill style before drawing rect
  context.save();
  context.fillStyle = "red";
  // context.fillRect(x, y, width, height)
  context.fillRect(0, 0, 50, 50);
  context.restore();
}
// drawRect();

// -----Triangle - Path
function drawTriangle(fillColor, strokeColor) {
  context.save();
  context.fillStyle = fillColor;
  context.beginPath();
  context.moveTo(150, 50);
  context.lineTo(100, 150);
  context.lineTo(200, 150);
  context.lineTo(150, 50);
  context.fill();
  context.stroke();
  context.closePath();
  context.restore();
}
// drawTriangle("pink", "red");

// -----Circle
function drawCircle(radius) {
  context.beginPath();
  // context.arc(x, y, r, startAngle, endAngle)
  context.arc(50, 100, radius, 0, Math.PI * 2);
  context.stroke();
  context.closePath();
}
// drawCircle(60);

// -----Doted rect
function drawDots(initial, end) {
  for (let i = initial; i > end; i--) {
    if (i % 20 === 0) {
      context.fillRect(initial, i, 5, 5);
    }
  }
}
// drawDots($canvas.height, $canvas.height / 2);

// -----Text
function sayHi(name) {
  context.fillStyle = "purple";
  context.font = "30px monospace";
  context.fillText(`Hello ${name}!`, 120, 150);
}
// sayHi("Gui");

// -----Image
let image = new Image();
image.src =
  "https://previews.123rf.com/images/briang77/briang771903/briang77190300096/120352698-hot-flame-fireball-vector-cartoon.jpg";
function drawImg() {
  context.drawImage(image, 30, 30, 60, 60);
}
//drawImg();

// ----- Fireball Class -------

class Fireball {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.image = new Image();
    this.image.src =
      "https://previews.123rf.com/images/briang77/briang771903/briang77190300096/120352698-hot-flame-fireball-vector-cartoon.jpg";
  }
  draw() {
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    this.update();
  }
  update() {
    this.x += 10;
    this.y += 10;
    console.log(this.x, this.y);
  }
  animation() {
    setInterval(() => {
      this.draw();
    }, this.speed);
  }
}

let fireball = new Fireball(0, 0, 30, 30, 200);
// fireball.animation();
