const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canvas;
var panda;
var discoimg
var yellow,yellowimg;
var box;
var orange;
var red;
var finger;
var grateful;
var spotlight;
var intensions;
function preload(){
    panda = loadSound("panda.mp3");
    discoimg = loadImage("disco3.jpg")
    yellowimg = loadImage("yellow.jpg");
    finger = loadImage("finger2.png")
    grateful = loadSound("Grateful.mp3")
    intensions = loadSound("intension.mp3")
    spotlight = loadSound("Spotlight.mp3")
}


function setup(){
    canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;
    //create 4 different surfaces

    yellow = createSprite(1050,750,260,50);  
    yellow.shapeColor = "yellow"
    
    red = createSprite(150,750,260,50);  
    red.shapeColor = "red"
    
    orange = createSprite(450,750,260,50);  
    orange.shapeColor = "orange"

    purple = createSprite(750,750,260,50)
    purple.shapeColor = "purple"

    box = createSprite(600,400,50,50);
    box.addImage(finger)
    box.velocityX = 4;
    box.velocityY = 5; 
    box.scale = 0.2
    }
    //create box sprite and give velocity



function draw() {

    background(discoimg);
    edges = createEdgeSprites();

   Engine.update(engine);
    yellow.display();
    box.display();
    red.display();
    orange.display();
    purple.display();

   if(box.isTouching(yellow)){
    panda.play();
    grateful.stop();
   spotlight.stop();
   intensions.stop();
   }

   if(box.isTouching(orange)){
    grateful.play();
    panda.stop();
    spotlight.stop();
    intensions.stop();
   }

   if(box.isTouching(purple)){
   spotlight.play();
   grateful.stop();
   panda.stop();
   intensions.stop()
  }
  if(box.isTouching(red)){
    spotlight.stop();
    grateful.stop();
    panda.stop();
    intensions.play()

  }

    box.bounceOff(yellow);
    box.bounceOff(red);
    box.bounceOff(edges)
    box.bounceOff(purple)
    box.bounceOff(orange)
    //add condition to check if box touching surface and make it box
    
}
//function YellowTouchingSound(){
    
//}
