var skullList = [];
var img;
var gameStats;
var skullAmount = 5;

function preload() {
  // load image
  img = loadImage("./img/skull.png");
}

function setup() {
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  cursor(CROSS);

  gameStats = {
    over: false,
    time: 0,
    level: 0,
    startTime: millis(),
    update: function () {
      this.time = millis();
      if (this.time - this.startTime > 8000) {
        background(255);
        var textGameOver = "Game is over\nYou've catched: " + (skullAmount - skullList.length);
        text(textGameOver, width / 2, height / 2);
      }
      if (skullList.length === 0) {
        background(255);
        var textGameWin = "well done.";
        this.startTime = millis();
        text(textGameWin, width / 2, height / 2);
        this.level = this.level + 1;
        skullAmount += 10;
        this.init();
      }
    },
    init: function () {
      for (var i = 0; i < skullAmount; i++) {
        var gravityRandom = random(0.5, 5);
        var bouncing = random(0.1, 0.99);
        var ballSize = random(30, 150);
        var xRan = random(width - img.width);
        var skull = {
          x: xRan,
          y: 0,
          speedY: 1,
          gravity: gravityRandom,
          bouncing: 0.9,
          size: ballSize,
          imgPreload: img,
          display: function () {
            image(this.imgPreload, this.x, this.y);
            //ellipse(this.x, this.y, this.size, this.size);
          },
          move: function () {
            this.speedY = this.speedY + this.gravity;
            this.y = this.y + this.speedY;

            if (this.y > height - this.imgPreload.height) {
              // set y to bottom pos
              this.y = height - this.imgPreload.height;

              // invert the speed
              this.speedY = this.speedY * -this.bouncing;
            }
            // reached top?
            else if (this.y <= 0) {
              this.speedY = -this.speedY;
            }
          }
        };
        skullList[i] = skull;
      }
    }
  };
  gameStats.init();
}

function draw() {
  background(128);
  for (var i = 0; i < skullList.length; i++) {
    skullList[i].display();
    skullList[i].move();
  }
  gameStats.update();
}

function mousePressed() {
  for (var i = 0; i < skullList.length; i++) {
    //console.log("x: " + skullList[i].x + " y:" + skullList[i].y);
    //console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    var distance = dist(skullList[i].x + skullList[i].imgPreload.width / 2, skullList[i].y + skullList[i].imgPreload.height / 2, mouseX, mouseY);
    //console.log(distance);
    // delete object from array
    if (distance < 50) {
      skullList.splice(i, 1);
    }
  }
}
