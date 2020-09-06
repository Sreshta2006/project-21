var wall,bullet;
var thickness,speed,weight;
var bulletrightedge,wallleftedge


function setup() {
  createCanvas(1600,400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50, 200, 50, 50);
bullet.shapeColor="white";

wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor=color(80,80,80);


}

function draw() {
  background(0,0,0);  

bullet.velocityX = speed;
if(hasCollided(bullet,wall)){

  bullet.velocityX=0;
  var damage=0.5* weight* speed* speed/(thickness* thickness* thickness);
  
  if(damage>10){
    wall.shapeColor="green";
  }
  
  if(damage<10){
    wall.shapeColor="red"; 
  }
  
}


  drawSprites();
}

function hasCollided(bullet,wall){

  bulletrightedge=bullet.x+bullet.width;
  wallleftedge=wall.x;

  if(bulletrightedge>=wallleftedge){
    return true;
  }else{
    return false;
  }
     
}

