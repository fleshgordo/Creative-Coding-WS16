var phrases = ["in","the","beginning","there","was","the","commandline"];
var randomRange = phrases.length;
var outputText = "";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  textSize(height/20);
  text(outputText,100,100);
}

function mousePressed() {
  outputText = "";
  var randomNumber = int(random(randomRange));
  console.log(phrases[randomNumber]);
  console.log(int(random(randomRange)));
  console.log(random(randomRange));
  shuffle(phrases,true);
  for (var i = 0; i< randomRange; i++ ) {
    outputText += phrases[i] + " ";
  }
}
