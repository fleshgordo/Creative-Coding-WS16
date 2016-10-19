function setup() {
  createCanvas(windowWidth,windowHeight);
  loadJSON("data.json",drawData);
  print("... setting up ...");
  textAlign(CENTER,CENTER);
  textSize(18);
  noStroke();
}

function draw() {

}

function drawData(data) {
  print(".. data loaded ...");
  var i = 1;
  for (var index in data) {
    //print(data[index].location);
    var age = data[index].age * 1;
    var ageCorrect = Math.sqrt(age / Math.PI) * 10;
    var name = data[index].name;
    var colour = data[index].colour;

    fill(colour);
    fill (random(255),random(255),random(255));
    ellipse(100*i,100,ageCorrect,ageCorrect);
    ellipse(100*i,300,age,age);
    fill(0);
    text(name,100*i,150);
    //debugger;
    i += 1;
  }
}
