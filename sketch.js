function preload(){
bgImage=loadImage("snow2.jpg")
sprite=loadImage("OIP.jpg")

}
function setup() {
  createCanvas(800,400);

  snowman=createSprite(400, 200, 50, 50);
  snowman.addImage(sprite)
  snowman.scale=0.5

}

function draw() {
  background(bgImage); 
  if(keyDown("left")) {
  	snowman.x=snowman.x-5
  }
  if(keyDown("right")) {
  	snowman.x=snowman.x+5
  }
  if(keyDown("up")) {
  	snowman.y=snowman.y-5
  }
  if(keyDown("down")) {
  	snowman.y=snowman.y+5
  }
  drawSprites();
}