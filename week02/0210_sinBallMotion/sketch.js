var d = 50;
var direction = true;
var x =  0;
var y = 0;
var speed = 5;
var x2 = d / 2;
var y2 = 100;
var angle2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(10);
  stroke(255);
  y = height / 2;
  x = width / 2;
}

function draw() {
  background(0);

  var ang2 = radians(angle2);

  x2 = (width/2)  + (width/2 - d/2) * sin(ang2);
  angle2 += 1.6;

  ellipse(x, y, d, d);
  ellipse(x2, y2, d, d);

  x2 += 5;

  if (x > windowWidth - d / 2) {
    direction = false;
    speed = -speed;
  } else if (x < d / 2) {
    direction = true;
    speed = -speed;
  }
  x += speed;
}
