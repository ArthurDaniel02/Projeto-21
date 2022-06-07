
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world
var groundObj, leftSide, rightSide
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options = {
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}
 
	ball = Bodies.circle(260, 100, 20, options)
	World.add(world, ball)

	groundObj=new Ground(width/2, 670,width,20)

	leftSide= new Ground(550,600,10,120)
    rightSide= new Ground(700, 600,10,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display()
  leftSide.display();
  rightSide.display()
  ellipse(ball.position.x, ball.position.y, 20)
  drawSprites();
  
 
}

function keyPressed() {
	 if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x: ball.position.x, y: ball.position.y}, {x: 50, y: -50})
		
	 }
}


