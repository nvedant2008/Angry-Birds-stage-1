const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;var box2; ;log1
var pig1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(720,300,80,80);
    box2 = new Box(900,300,80,80);
    pig1=new pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    box3 = new Box(720,230,80,80)
    box4 = new Box(900,230,80,80)
    pig2 = new pig(810,210)
    log2 = new Log(810,190,300,PI/2)
    box5 = new Box(810,170, 80, 80)
    log3 = new Log(870,100,150,-PI/7)
    log4 = new Log(760,100,150,PI/7)
    bird = new Bird(100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display()
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
}