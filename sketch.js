const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var ball, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box11 = new Box(920,320,70,70);
    box12 = new Box(920,320,70,70);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);

    box5 = new Box(700,240,70,70);
    box10 = new Box(700,240,70,70);
    box6 = new Box(800,320,70,70);
    box7 = new Box(800,320,70,70);
    box8 = new Box(800,320,70,70);
    box9 = new Box(800,320,70,70);
   
    ball = new Ball(420,100,50)
 
    //log6 = new Log(230,180,80, PI/2);
    slingshot = new Wreck(ball.body,{x:420, y:50});
}

function draw(){

     background(0);
    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();

    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
ball.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
   // gameState = "launched";
}

