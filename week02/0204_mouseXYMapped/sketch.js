var colourY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
}

function draw() {
  // map(value, 0, 100, 0, width);
  colourY = map(mouseY, 0, height, 0, 255);
  background(colourY);

  //console.log(colourY);
  ellipse(width/2, height/2, mouseX, mouseX/2);
  ellipse(mouseX, mouseY, 10, 10);
}
