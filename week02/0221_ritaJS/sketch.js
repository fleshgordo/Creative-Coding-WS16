var input, button;

function setup() {

  createCanvas(200, 200);
  background(50);
  textSize(20);
  noStroke();

  var words = RiTa.tokenize("The elephant took a bite!")
    // for (var i = 0, j = words.length; i < j; i++) {
    //   text(words[i], 50, 50 + i * 20);
    // }
  var myphrase = new RiString("The lazy fox jumps over the ...");
  console.log(myphrase.analyze());
  input = createInput("The lazy fox jumps over the ...");
  input.size(400);
  button = createButton("Send");
  button.mousePressed(processInput);
}

function draw() {

}

function processInput() {
  var string = input.value();
  console.log(string);

}
