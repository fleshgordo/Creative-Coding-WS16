var width, height;

function setup() {
  // print("hello world");
  width = 400;
  height = 300;
  createCanvas(width,height);
  background(255,255,0);
}

function draw() {
  fill(255,0,0);
  line(0,0,width,height);
  line(0,height,width,0);
  ellipse(width/2,height/2,d,d);
}
