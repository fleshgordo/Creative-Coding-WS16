var d = 50.;
var direction = true;
var x =  0;
var y = 0;
var speed = 1;
var angle = 50;
var angle2 = 50;
var speed2 = 1;

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

  angle += speed;
  angle2 += speed2;
  var ang = radians(angle2 + PI);
  d = 100 * sin(ang);
  d2 = angle;

  ellipse(x, y-100, d, d);
  ellipse(x, y+100, d2, d2)

  if (d2 > 100) {
    speed = -speed;
  } else if (d2 < 10) {
    speed = -speed;
  }
  //x += speed;
}
