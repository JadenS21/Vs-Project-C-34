const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Pendulum1,Pendulum2,Pendulum3,Pendulum4,Pendulum5;
var rope1,rope2,rope3,rope4,rope5;
var ground;

function setup(){
    var canvas = createCanvas(1000,750);
    engine = Engine.create();
    world = engine.world;
    
    Pendulum1 = new Pendulum(150,100,70);
    Pendulum2 = new Pendulum(350,200,70);
    Pendulum3 = new Pendulum(450,200,70);
    Pendulum4 = new Pendulum(550,200,70);
    Pendulum5 = new Pendulum(650,200,70);
    
    ground = new Ground(600,740,width,20);
    rope1 = new Rope(Pendulum1.body,{x:200,y:100})
    rope2 = new Rope(Pendulum2.body,{x:300,y:100})
    rope3 = new Rope(Pendulum3.body,{x:400,y:100})
    rope4 = new Rope(Pendulum4.body,{x:500,y:100})
    rope5 = new Rope(Pendulum5.body,{x:600,y:100})
    
}

function draw(){
    background("black");
    Engine.update(engine);
    
    Pendulum1.display();
    Pendulum2.display();
    Pendulum3.display();
    Pendulum4.display();
    Pendulum5.display();
    
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    
    ground.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(Pendulum1.body, {x: mouseX , y: mouseY});
}