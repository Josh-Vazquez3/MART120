
function setup() {
    createCanvas(400, 400);
    circle = new Circle();
  }
  
  function draw() {
    background(220);
    circle.update();
    circle.display();
     textSize(16);
      text("Start", width - 50, height - 10)
  }
  function keyPressed() {
    if (keyCode === LEFT_ARROW) {
      circle.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
      circle.moveRight();
    }
  }
  
  class Circle {
    constructor() {
      this.size = 30;
      this.x = width / 1;
      this.y = height - this.size / 2;
      this.speed = 3;
    }
    update() {
      this.y -= this.speed;
      if (this.y < 0) {
      }
  
      if (this.x < 0 || this.x > width) {
        this.reset();
      }
    }
    display() {
      fill(40, 50, 355);
      ellipse(this.x, this.y, this.size, this.size);
    }
    moveLeft() {
      this.x -= this.speed;
    }
    moveRight() {
      this.x += this.speed;
    }
  }