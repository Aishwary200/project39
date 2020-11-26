var canvas
var boy,boyImg,won
var obstacle
var gameState=0
var obstacleGroup
var backImg,finish

function preload(){
boyImg=loadImage("boy.png")
backImg=loadImage("background.png")
finish=loadImage("finish.png")
won=loadImage("boy Won.png")
}
  

function setup(){
  canvas=createCanvas(500,1000)
boy=createSprite(250,250,50,50)

boy.setCollider("circle",boy.x-200,boy.y-200,200)
obstacleGroup=new Group();
}
function draw(){
  
  if(boy.y<-1500){
    background(finish)
    gameState=2
    
  }
  else{
    background(backImg)
  }
  
  
  var rand=Math.round(random(boy.x-250,boy.x+250))
  console.log(boy.y)
  
  if(gameState===0){
    boy.addImage("boy",boyImg)
boy.scale=0.3
    if(World.frameCount%30===0){
      obstacle=createSprite(rand,boy.y-200,40,40)
      obstacle.shapeColor="brown"
      obstacleGroup.add(obstacle)
    }
    movement();
    if(boy.isTouching(obstacleGroup)){
      gameState=1
    }  
  }
  else if(gameState===1){
    boy.addImage("boy",boyImg)
boy.scale=0.3
    textSize(70)
    fill("black")
    text("Game Over",boy.x-200,boy.y-200)
  }
  else if(gameState===2){
    boy.addImage("won",won)
    textSize(70)
    fill("black")
    text("You Won",boy.x-200,boy.y-200)
    
  }
  drawSprites();
}
function movement(){
  if(keyDown(UP_ARROW)){
    boy.y=boy.y-100
    camera.position.x=boy.x
    camera.position.y=boy.y
  }
  
  if(keyWentDown(LEFT_ARROW)){
    boy.x=boy.x-100
    camera.position.x=boy.x
    camera.position.y=boy.y
  }
  if(keyWentDown(RIGHT_ARROW)){
    boy.x=boy.x+100
    camera.position.x=boy.x
    camera.position.y=boy.y
  }
  
}

  