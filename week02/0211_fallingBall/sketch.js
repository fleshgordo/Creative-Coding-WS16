var x = 0;
var y = 0;
var d = 150;
var gravity = 0.5;

//create a variable for speed
var speedY = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  x = windowWidth / 2;
}

function draw() {
  //clear the background and set the fill colour
  background(0);
  fill(255);

  ellipse(x, y, d, d);

  // adding gravity
  // uncomment this line to see what it is doing
  speedY = speedY + gravity;

  // updating y pos with speed
  y = y + speedY;

  // reaching bottom?
  if (y > height - d / 2) {
    // set y to bottom pos
    y = height - d / 2;

    // invert the speed
    speedY = speedY * -0.79;
  }
  // reached top?
  else if (y <= 0) {
    speedY = -speedY;
  }

  //console.log(speedY);
}
