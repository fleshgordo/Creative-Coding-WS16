var xPos = 30;
var yPos = 50;
var d = 100;

var width, height;
var counter = "hello";
var counter2 = "world";

function setup() {
  // print("hello world");
  width = 400;
  height = 300;
  createCanvas(width,height);
  background(255,255,0);
  frameRate(1);
  stroke(255);
}

function draw() {

  //print();
  print(counter + " : " + counter2);
  //print(counter2);
  fill(255,0,0);
  // rect (x,y,width,height)
  // rect(xPos,yPos,50,100);
  // line(x1,y1,x2,y2)
  line(0,0,width,height);
  line(0,height,width,0);
  ellipse(width/2,height/2,d,d);
}
