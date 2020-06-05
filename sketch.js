var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}
var engine,world,ground,ball;
function setup() {
	createCanvas(800, 700);

    create sprite(400,200,50,50);
	engine = Engine.create();
	world = engine.world;
    var ground_options={

		isStatic:true;

	}
    ground=bodies.rectangle(200,390,200,20,ground_options);
	World.add(world,ground);

	}
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,400,20);
  drawSprites();
 
}



