var phrase = "in the beginning there was the word";
var ritaPhrase, lexicon;
var outputText = "";
var counter = 0;
var speed = 0.5;
function setup() {
  createCanvas(windowWidth, windowHeight);
  ritaPhrase = new RiString(phrase);
  lexicon = new RiLexicon();
  //console.log(lexicon.randomWord("nn",3));
}

function draw() {
  counter += speed;

  background(255);
  textSize(height/20);
  text(outputText,100,100);
  if (counter % 100 == 0 ) {
    generatePhrase();
  }
}

function generatePhrase() {
  outputText = "";
  var words = ritaPhrase.words();
  var pos = ritaPhrase.pos();
  console.log(words);
  console.log(pos);
  for (var i=0; i<words.length; i++) {
    if (pos[i] == 'nn') {
      outputText += lexicon.randomWord("nn",2) + " ";
    }
    else {
      outputText += words[i] += " ";
    }
  }
}
