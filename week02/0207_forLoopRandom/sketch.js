function setup() {
  createCanvas(710, 400);
  background(0);
  frameRate(10);
}

function draw() {
  background(0)

  for (var j = 0; j < width; j++) {
    strokeWeight(random(10));
    stroke(255);
    point(j, random(height));
  }
}
