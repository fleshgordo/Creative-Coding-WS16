var skullObject = {};

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);

  var skull = {
    x: windowWidth / 2,
    y: 0,
    speedY: 1,
    gravity: 0.5,
    bouncing: 0.8,
    size: 55,
    display: function () {
      //image(this.img, this.x, this.y);
      ellipse(this.x, this.y, this.size, this.size);
    },
    move: function () {
      this.speedY = this.speedY + this.gravity;
      this.y = this.y + this.speedY;

      if (this.y > height - this.size / 2) {
        // set y to bottom pos
        this.y = height - this.size / 2;

        // invert the speed
        this.speedY = this.speedY * -this.bouncing;
      }
      // reached top?
      else if (this.y <= 0) {
        this.speedY = -this.speedY;
      }
    }
  };
  skullObject = skull;
}

function draw() {
  background(128);
  skullObject.display();
  skullObject.move();
}
