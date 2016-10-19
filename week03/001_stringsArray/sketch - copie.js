var words = ["in", "the", "beginning", "there", "was", "the", "word"];

var outputText = "";

function setup() {
  print(words);
  print(words.length);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  textSize(36);

  for (var i = 0; i < words.length; i += 1) {
    outputText = outputText + " " + words[i];
  }
  text(outputText, 100, 100);
  outputText = "";
}

function mousePressed() {
  // randomize the words
  shuffle(words, true);
}
