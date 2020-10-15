var car;
var wall;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1000,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX = speed;
  wall.shapeColor = (80,80,80);
  car.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
      car.shapeColor = "red";
}
  0.5*weight*speed*speed
  drawSprites();
}