var d = 30;

function setup() {
  width = 400;
  height = 300;
  createCanvas(width,height);
  background(190);
  noStroke();
}

function draw() {
  fill(128);
  for (var j=50; j < width; j+=50) {
    for (var k=50; k < height; k+=50) {
      if (j == 150 && k == 150) {
        fill(255,0,0);
      }
      else {
        fill(128);
      }

      ellipse(j,k,d,d);
    }
  }
}
