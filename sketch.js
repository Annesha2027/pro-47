var shooter, shooter_shooting,shooter_standing;
var zombie;
var backgroundImage;
var bullet;

function preload(){
  shooter_shooting =   loadAnimation("shooter1.png","shooter2.png","shooter3.png","shooter4.png");
  shooter_standing= loadImage("shooter1.png");
  bullet_shooting = loadImage("bullet.png");
  zombie_running = loadImage("zombie.png");
  backgroundImg = loadImage("background.png");
}

function setup() {
  createCanvas(1300,670);
  shooter = createSprite(400, 200, 50, 50);
  shooter.addImage("shooter1", shooter_standing);
  shooter.scale = 0.3
  
  bulletGroup = new Group()
  zombieGroup = new Group()
}
function draw() {
  background(backgroundImg);  

  if( keyDown("UP_ARROW")){
   shooter.y = shooter.y - 30;
  }
  if( keyDown("DOWN_ARROW")){
    shooter.y = shooter.y + 30;
   }

  if(keyWentDown("space")){
      bullet = createSprite(shooter.x+30,shooter.y-30,20,10)
      //bullet = createSprite(400,random(100,500),40,20);
      bullet.addImage("bullet", bullet_shooting);
      bullet.scale = 0.1
      bullet.velocityX = 20
      bullet.lifetime= 600;
      bulletGroup.add(bullet);
  
      shooter.depth = bullet.depth
      shooter.depth = shooter.depth+2
      shooter.addAnimation("shooter1", shooter_shooting);
  }
  if(keyWentUp("space")){
    shooter.addImage("shooter1", shooter_standing);
  }
  spawnZombies()
  drawSprites();

}

function spawnZombies(){
  if (frameCount % 80 === 0){
    zombie = createSprite(random(1000,1200),random(100,500),40,20);
    zombie.addImage("zombie", zombie_running);
    zombie.scale = 0.2
    zombie.velocityX = -6
    zombie.lifetime= 400;
    zombieGroup.add(zombie);
  }
  
 
}
