const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var cannonball;



function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);//crear canvas
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
 //crear los objetos{
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  cannonball = new CannonBall(cannon.x,cannon.y);//crear un objeto para la bala de cañón
  // }
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  cannonball.display();//mostrar la bala de cañón
}






function keyReleased() {
if(keyCode == DOWN_ARROW){  //utilizar  keydown para llamar a la función shoot
 cannonball.shoot(); 
}
}
