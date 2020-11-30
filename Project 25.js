
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	fuction keyPressed(){
    if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject,body,paperObject,body.Position,position,(x:85,8:85));
	}
	}


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



