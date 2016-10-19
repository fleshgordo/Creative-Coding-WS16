var img;
var x = 0;
var y = 0;

var gravity = 0.5;
//create a variable for speed
var speedY = 1;

function preload() {
  // load image
  img = loadImage("./img/skull.png");
}

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  background(128);
  noStroke();
  x = windowWidth / 2;
}

function draw() {
  background(128);

  fallingSkull(x);
  fallingSkull(0);
    fallingSkull(100);
}

function fallingSkull(_x) {
  // display image (img, x, y)
  image(img, _x, y);
  speedY = speedY + gravity;

  // updating y pos with speed
  y = y + speedY;

  // reaching bottom?
  if (y > height - img.height) {
    // set y to bottom pos
    y = height - img.height;

    // invert the speed
    speedY = speedY * -0.79;
  }
  // reached top?
  else if (y <= 0) {
    speedY = -speedY;
  }
}
