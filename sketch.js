var bullet;
var wall;
var speed;
var weight;
var thickness;
var damage;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  console.log(damage); 
  speed.visible = 'false';
  weight.visible = 'false';
  wall = createSprite(1200,200,thickness,height/2);
  bullet = createSprite(50,200,20,10);
  wall.shapeColor = 'grey';
  bullet.velocityX = speed;
}
function draw() {
  background(255,255,255);
  if (damage>10){
  wall.shapeColor = 'red';
  } 
  else if (damage<10){
  wall.shapeColor = 'green';
  }
  if(bullet.x>=1070){
  bullet.velocityX=0;
  } 
  // console.log(damage);
  drawSprites();
} 