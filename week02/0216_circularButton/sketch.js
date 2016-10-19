var backgroundColor;
var isOverCircle;

var circleX = 200;
var circleY = 200;

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);

  // default background color
  backgroundColor = color(255, 255, 255);
  noStroke();
}

function draw() {
  background(backgroundColor);

  // get distance between mouse and circle
  var distance = dist(mouseX, mouseY, circleX, circleX);

  // if the distance is less than the circle's radius
  if (distance < 50) {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }

  // draw a circle
  ellipseMode(CENTER);

  if (isOverCircle === true) {
    fill(100);
    cursor(HAND);
  } else {
    fill(200);
    cursor(ARROW);
  }
  ellipse(circleX, circleX, 100, 100);

}

function mousePressed() {
  if (isOverCircle === true) {
    backgroundColor = color(random(255), random(255), random(255));
  }
}
