var d = 50;
var x = d/2;
var y = 0;
var speed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(4);
  y = windowHeight / 2;
}

function draw() {
  background(0);
  stroke(255);

  ellipse(x, y, d, d);

  if (x > windowWidth - d/2) {
    speed = -speed;
  }
  else if (x < d/2)  {
    speed = -speed;
  }
  x += speed;

}
