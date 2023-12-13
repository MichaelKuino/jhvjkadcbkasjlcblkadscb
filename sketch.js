function preload(){
  
bg = loadImage("Imagenes/iss.png");
sleep = loadAnimation("Imagenes/sleep.png");
brush = loadAnimation("Imagenes/brush.png");
gym = loadAnimation("Imagenes/gym1.png", "Imagenes/gym2.png", "Imagenes/gym11.png", "Imagenes/gym12.png");
eat = loadAnimation("Imagenes/eat1.png", "Imagenes/eat2.png");
drink = loadAnimation("Imagenes/drink1.png", "Imagenes/drink2.png");
move = loadAnimation("Imagenes/move.png", "Imagenes/move1.png");
bath = loadAnimation("Imagenes/bath1.png", "Imagenes/")
}


function setup() {
  createCanvas(bg);
  createSprite(400, 200, 50, 50);

  createEdgeSprite();
}

function draw() {
  background(255,255,255);  
  drawSprites();

  astronaut = createSpri8te(300,230);
  astronatu.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing", brush);
  astronaut.changeAnimation("brushing");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut. velocityY = 0;
}

if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bath1", bath);
  astronaut.changeAnimation("bath2");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut. velocityY = 0;
}

if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gym1", gym);
  astronaut.changeAnimation("gym2");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut. velocityY = 0;
}

if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eat1", eat);
  astronaut.changeAnimation("eat2");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut. velocityY = 0;
}

if(keyDown("m")){
  astronaut.addAnimation("move", move);
  astronaut.changeAnimation("move1");
  astronaut.y = 350;
  astronaut.velocityX = 0;
  astronaut. velocityY = 0;
}
}