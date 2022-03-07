const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var slingShot;
var fruitImg;

function preload(){
  fruitImg = loadImage("fruit.png");
}
function setup() {

  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  
  rock1 = new Rocks(300,275,30,40);
  rock2 = new Rocks(330,275,30,40);
  rock3 = new Rocks(360,275,30,40);
  rock4 = new Rocks(390,275,30,40);
  rock5 = new Rocks(420,275,30,40);
  rock6 = new Rocks(450,275,30,40);
  rock7 = new Rocks(480,275,30,40);
  
  rock8 = new Rocks(330,235,30,40);
  rock9 = new Rocks(360,235,30,40);
  rock10 = new Rocks(390,235,30,40);
  rock11 = new Rocks(420,235,30,40);
  rock12 = new Rocks(450,235,30,40);
  //level three
  rock13 = new Rocks(360,195,30,40);
  rock14 = new Rocks(390,195,30,40);
  rock15 = new Rocks(420,195,30,40);
  //top
  rock16 = new Rocks(390,155,30,40);


  rocks1 = new Rocks(640,175,30,40);
  rocks2 = new Rocks(670,175,30,40);
  rocks3 = new Rocks(700,175,30,40);
  rocks4 = new Rocks(730,175,30,40);
  rocks5 = new Rocks(760,175,30,40);

  rock6 = new Rocks(670,135,30,40);
  rocks7 = new Rocks(700,135,30,40);
  rocks8 = new Rocks(730,135,30,40);

  rocks9 = new Blocks(700,95,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}

function draw() {
  background(56,44,44); 
 
  imageMode(CENTER);
  // write image() to display the polygon image 
  image(this.fruitImg, 100, 200, 50, 50);
  //use the same x and y position as ball
  

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(0,0,0);
  
  
  rock1.display();
  rock2.display();
  rock3.display();
  rock4.display();
  rock5.display();
  rock6.display();
  rock7.display();
  rock8.display();
  rock9.display();
  rock10.display();
  rock11.display();
  rock12.display();
  rock13.display();
  rock14.display();
  rock15.display();
  rock16.display();


  rocks1.display();
  rocks2.display();
  rocks3.display();
  rocks4.display();
  rocks5.display();
  rocks6.display();
  rocks7.display();
  rocks8.display();
  rocks9.display();


  
  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}