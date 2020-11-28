const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,350,70,70);
    box2 = new Box(900,350,70,70);
    box3 =new Box(700,270,70,70);
    box4 = new Box (900,270,70,70);
    box5 = new Box (800,250,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new Pig (800,350);
    pig2 = new Pig (800,290);
    log1 = new log(800,300,270,PI/2)
    log2 = new log(800,250,270,PI/2)
    log3 = new log(750,200,120,PI/4)
    log4 = new log(850,200,120,PI/-4)
    bird1 = new Bird(100,50)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird1.display();
}