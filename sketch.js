
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 p1 = new Bob(170,250)
 p2 = new Bob(185,250)
 p3 = new Bob(200,250)
 p4 = new Bob(215,250)

 support = new Stand(400,300,200,40)

 pendulum = new Pendulum(support.body,p1.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
   p1.display();
  p2.display();
  p3.display();
 p4.display();
 support.display();
pendulum.display()

  
  drawSprites();
 
}



