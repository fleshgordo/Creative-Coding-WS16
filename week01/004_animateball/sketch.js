var x = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  ellipse(x, height/2, height/4, height/4);

  //x++;
  x+=10;
  // try x += 1;
  // or faster x = x + 10;
  // remember x += 10; is the same thing as above
}
