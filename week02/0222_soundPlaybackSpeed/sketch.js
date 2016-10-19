var song;

function preload() {
  // Preloading
  song = loadSound('./files/beam.mp3');
}

function setup() {
  createCanvas(720, 720);

  // Loop the sound forever
  song.loop();
}

function draw() {
  background(200);

  // Set volume between 0 and 1
  var volume = map(mouseX, 0, width, 0, 1);
  volume = constrain(volume, 0, 1);
  song.amp(volume);

  // Set playback speed pitch
  var speed = map(mouseY, 0.1, height, 0, 2);
  speed = constrain(speed, 0.01, 4);
  song.rate(speed);

  // Draw circles
  stroke(0);
  fill(51, 100);
  ellipse(mouseX, 100, 48, 48);
  stroke(0);
  fill(51, 100);
  ellipse(100, mouseY, 48, 48);
}
