
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0, o1, o1i, o2, o2i;

function preload()
{
	o1i=loadImage("blue1.png"); 
}

function setup() {
	createCanvas(500,500);


	engine = Engine.create();
	world = engine.world;

	o1 = createSprite(100,100,10,10);
	o1.addImage(o1i);
     

	Engine.run(engine);
  
}


function draw() {
  
 
}




