function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
  noStroke();
}

function draw() {
  background(mouseY); // background color changes based on mouseY
  ellipse(width/2, height/2, mouseX, mouseX/2); // width changes based on mouseX
  ellipse(mouseX, mouseY, 10, 10); // ellipse follows mouse
}
