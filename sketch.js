function preload(){
  bg = loadImage ("Images/Astronaut's daily routine/iss.png");
  sleep = loadAnimation ("Images/Astronaut's daily routine/sleep.png");
  brush = loadAnimation ("Images/Astronaut's daily routine/brush.png");
  gym = loadAnimation ("Images/Astronaut's daily routine/gym11.png","Images/Astronaut's daily routine/gym12.png");
  eat = loadAnimation ("Images/Astronaut's daily routine/eat1.png","Images/Astronaut's daily routine/eat2.png");
  drink = loadAnimation ("Images/Astronaut's daily routine/drink1.png","Images/Astronaut's daily routine/drink2.png");
  move = loadAnimation ("Images/Astronaut's daily routine/move.png","Images/Astronaut's daily routine/move1.png");
  bath = loadAnimation ("Images/Astronaut's daily routine/bath1.png","Images/Astronaut's daily routine/bath2.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}