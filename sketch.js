var boat, boatImg;
var shield, shieldImg;
var cannonball, cannonballImg;
var highScore;
var livesLeft = 20;
var ballsGroup;


function preload() {
  shieldImg = loadImage("./shield.png");
  boatImg = loadImage("./longShip.png");
  cannonballImg = loadImage("./cannon ball.png");
}

function setup() {
  createCanvas(1000, 850);
  boat = createSprite(500, 600, 650, 50);
  boat.addImage("boatImg", boatImg);
  boat.scale = 0.4;

  shield = createSprite(400, 700, 100, 100);
  shield.addImage("shieldImg", shieldImg);
  shield.debug = true;
  shield.scale = 0.18;
  shield.setCollider("circle", 0, 0, 300)

  ballsGroup = new Group();
  cannonball = createSprite(random(300, 700), random(20, 300), 20, 20);
  cannonball.addImage("cannonballImg", cannonballImg);
  cannonball.scale = 0.25;
  cannonball.velocityY = 6;
  cannonball.debug = true;
}




function draw() {
  background(0, 200, 230);
  shield.x = World.mouseX;
  spawnCannon();

  text(200, 200, livesLeft)

  for (var i = 0; i < ballsGroup.size(); i++) {
    if (ballsGroup[i].isTouching(shield)) {
      ballsGroup[i].velocityY = -6;
      ballsGroup[i].velocityX = random(-5, 5);
    }
  }

  console.log(cannonball)

  drawSprites();
}



function spawnCannon() {
  if (frameCount % 50 == 0) {
    cannonball = createSprite(random(300, 700), random(20, 300), 20, 20);
    cannonball.addImage("cannonballImg", cannonballImg);
    cannonball.scale = 0.25;
    cannonball.velocityY = 6;
    cannonball.velocityX = random(-5, 5);
    cannonball.debug = true;
    cannonball.setCollider("circle", 0, 0, 125)
    ballsGroup.add(cannonball);
  }
}



