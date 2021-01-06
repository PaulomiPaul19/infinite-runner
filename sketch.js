var thief,police,obstacle;
var score = 0;
var gameState = 0;
var cityBg;
var policeI,thiefI;


function preload(){
cityBg = loadImage("Images/bg.jpg")
policeI = loadAnimation("Images/Police/P1.png","Images/Police/P2.png","Images/Police/P3.png","Images/Police/P4.png","Images/Police/P5.png","Images/Police/P6.png","Images/Police/P7.png","Images/Police/P8.png");
thiefI = loadAnimation("Images/Thief/T1.png","Images/Thief/T2.png","Images/Thief/T3.png","Images/Thief/T4.png","Images/Thief/T5.png","Images/Thief/T6.png");

}


function setup() {
  createCanvas(1500,700);

  city = createSprite(750,350,1200,700);
  city.addImage(cityBg);
  city.scale=1.2;
  //city.x = city.width/2;
 // city.velocityX=2;
  city.setCollider("rectangle",0,0,1500, 700);
 // city.debug=true;
  thief = createSprite(500, 650, 50, 50);
  thief.addAnimation("thief_running",thiefI);
  thief.scale = 0.8;

  police = createSprite(100, 630, 50, 50);
  police.addAnimation("police_running",policeI);
  police.scale = 0.75;
 
  
}

function draw() {
 city.velocityX = 2
  if(city.x > 1200){
   city.x = 0;
  }
  console.log(city.x);



  drawSprites();
}