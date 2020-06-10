var fixedRect, movingRect;

function setup() {
  createCanvas(2000,1200);
  fixedRect = createSprite(100, 1000, 50, 50);
  movingRect = createSprite(1900, 1000, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  fixedRect.velocityX = 3;
  movingRect.velocityX = -3;
}

function draw() {
  background(255,255,255);
  //movingRect.y = mouseY;
  //movingRect.x = mouseX
   isTouching();
   bounceOff();
  drawSprites();
}

function isTouching(){
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 
    ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
}
function bounceOff(){
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 )
    {
      fixedRect.velocityY = fixedRect.velocityY*-1;
      movingRect.velocityY = movingRect.velocityY*-1;
      fixedRect.velocityX = fixedRect.velocityX*-1;
      movingRect.velocityX = movingRect.velocityX*-1;
    }
}