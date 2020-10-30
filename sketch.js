var flag = 0;
var boyImage,boyWalk,boyJump,boyDuck,backdropImg,obstacleImage;
var walk,boy,jump,duck,backdrop,door;
var line1,line2, line3,line4,line5;
function preload(){
boyImage = loadImage( "images/alienBeige.png");
boyWalk = loadImage("images/alienBeige_walk.png");
boyJump = loadImage("images/alienBeige_jump.png");
boyDuck = loadImage("images/alienBeige_duck.png");
backDropImg = loadImage("images/background.png");
obstacleImage = loadImage("images/chainsaw.png")
door = loadImage("images/door.png");
}



function setup() {
  createCanvas(1000,400);

backdrop = createSprite(400,400,1600,400);
backdrop.addImage(backDropImg);
backdrop.scale = 3;

line1 = createSprite(200,400,10,790);
line1.shapeColor = "brown";

line2 = createSprite(550,395,700,10);
line2.shapeColor = "brown";

line3 = createSprite(900,200,10,500);  
line3.shapeColor = "brown";

line4 = createSprite(550,7,700,10);
line4.shapeColor = "brown"

line5 = createSprite(470,200,550,10);
line5.shapeColor = "brown";

line6 = createSprite(500,150,80,80);

line7 = createSprite(350,150,10,80);

line8 = createSprite(550,380,10,50);

line9 = createSprite(400,350,50,50);
line9.velocityY = 3;
line10 = createSprite(645,350,200,5);

line11 = createSprite(220,330,10,100);
line11.shapeColor = "yellow";
line11.addImage(door)
line11.scale = 0.5;



line12 = createSprite(859,300,95,10);
line12.velocityY = 2;
line12.addImage(obstacleImage);
line12.scale = 0.3;


boy = createSprite(300,150,10,10);
boy.addImage(boyImage);
}



function draw() {
  if(keyDown(LEFT_ARROW)){
    boy.x =boy.x-5;
  }

  if(keyDown(RIGHT_ARROW)){
    boy.x =boy.x+5;
  }

  if(keyDown(UP_ARROW)){
    boy.y =boy.y-4;
  }

  if(keyDown(DOWN_ARROW)){
    boy.y = boy.y+4;  
  }

  

  boy.collide(line1);
  boy.collide(line2);
  boy.collide(line3);
  boy.collide(line4);
  boy.collide(line5);

line12.bounceOff(line2);
line12.bounceOff(line4);
line9.bounceOff(line2);
line9.bounceOff(line5);

 if(boy.isTouching(line6) || boy.isTouching(line7) || boy.isTouching(line8) || boy.isTouching(line9) ||
  boy.isTouching(line10) || boy.isTouching(line12) ) {
    boy.x = 300;
    boy.y = 150;
 }

 
 
if (boy.isTouching(line11)){
flag = 1

 }


  createEdgeSprites();
  drawSprites();
  if(flag === 1 ){
    textFont("georgia");
    textSize(50);
    fill("red");
    text("Y O U W I N",200,200);
   }
}