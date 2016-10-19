var angle = 0;
var ang = 0;

var amplitude = 100;
var offset = 150;
var d = 50;

var x = -d/2;
var y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(4);
}

function draw() {
  background(0);
  stroke(255);
  var ang = radians(angle);
  y = offset + amplitude * sin(ang);

  ellipse(x, y, d, d);
  if (x > windowWidth + d) {
    angle = 0;
    x = -d/2;
    // show debugger in web inspector
    //debugger;
  }

  //point(x, y);
  //console.log(x);
  x += 1;
  angle += 1;
}
