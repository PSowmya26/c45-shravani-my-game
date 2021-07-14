var edges;
var bg, fish, bread, bg_Img, fish_Img, bread_Img;
var spawnBread, breadGroup;
var score;

function preload() {
  bg_Img = loadImage("bg.png");
  bread_Img = loadImage("bread.png");
  fish_Img = loadImage("fish.png");
}

function setup() {
  createCanvas(400, 400);

  fish = createSprite(190, 340);
  fish.addImage(fish_Img);
  fish.scale = 0.3;
  edges = createEdgeSprites();
  score = 0;
  breadGroup = new Group();
}

function draw() {
  background(bg_Img);

  fill("yellow");
  textFont("Algerian");
  text("SCORE:" + score, 30, 20);
  textSize(40);

  if (keyDown("DOWN_ARROW")) {
    fish.velocityX = 0;
    fish.velocityY = 2;
  }
  if (keyDown("UP_ARROW")) {
    fish.velocityX = 0;
    fish.velocityY = -2;
  }
  if (keyDown("LEFT_ARROW")) {
    fish.velocityX = -2;
    fish.velocityY = 0;
  }
  if (keyDown("RIGHT_ARROW")) {
    fish.velocityX = 2;
    fish.velocityY = 0;
  }
  fish.collide(edges);

  spawnBread();
  drawSprites();
  if (breadGroup.isTouching(fish)) {
    score = score + 2;
  } else {
    text("OOps! You Lose", 60, 200);
    fill("Blue");
    strokeWeight(4);
    stroke("black");
    textFont("Algerian");
    textSize(30);
  }
}

function spawnBread() {
  if (frameCount % 40 === 0) {
    var bread = createSprite(
      Math.round(random(20, 380)),
      Math.round(random(0, 400))
    );
    bread.addImage(bread_Img);
    bread.scale = 0.1;
    bread.velocityY = 3;
    breadGroup.add(bread);
  }
}
