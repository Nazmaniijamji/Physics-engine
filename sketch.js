//Matter.js - World, Engine, Bodies
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine, object;



function setup() {
createCanvas(400,400);

//create the engine
engine = Engine.create();

//add engine to the world
world = engine.world;

var options = { 
isStatic: true

}


//create the bodies
object = Bodies.rectangle(30,30,60,80,options)

//add body to the world
World.add(world, object);
  
console.log(object);
}

function draw() {
  background(0);  
Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x,object.position.y,60,80 )


}