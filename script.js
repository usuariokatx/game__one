let xsnake = 400; 
let ysnake = 400;
let direction = 1;
let directiony = 0;
let speed = 4;
let actualBall = null;

function setup() {
    createCanvas(800, 800);
  }

  
  function draw() {
    background(220);
    if(!actualBall){
actualBall = generateRandomBall();
    }
    drawPlayer(xsnake,ysnake);
    drawBorder();
    updatePlayer();
    drawBall(actualBall)

  }


   function keyPressed(){
       //internamente almacena en una variable llamada kerbode la tecla que se ha presionado previamente

switch(keyCode){
    case LEFT_ARROW:
        xsnake -=1;
        direction = -1;
        directiony = 0;
        break;
    case RIGHT_ARROW:
        xsnake +=1;
        direction = 1;
        directiony = 0;
        break;
     case UP_ARROW:
        ysnake -=1;
        directiony =-1;
        direction = 0;
        break;
    case DOWN_ARROW:
        ysnake +=1;
        directiony =1;
        direction = 0;
        break;
}}

    
function updatePlayer(){
    // 

    if(xsnake > width){
        xsnake = 0;
    }else{
        xsnake += direction * speed;
    }

    if(xsnake < 0){
        xsnake = width;
    }

    


 ysnake = ysnake + directiony * speed;
ysnake = constrain(ysnake,50, height - 100)



}

   function drawPlayer(xsnake,ysnake){
    rect(xsnake, ysnake, 50, 50);
   }

function drawBorder(){


    for(let indexy of [0,height - 50]){
        for(let indexX = 0; indexX <width; indexX += 50){
            drawBlock(indexX,indexy)
        }
    }
    
    
   
}

   function drawBlock(x,y){
       rect(x,y,50,50)
   }

   
function generateRandomBall(ball){
    return{x : getRandomArbitrary(0, width), y : getRandomArbitrary(0,height)}
}

   function drawBall(ball){
       fill(255, 204, 150);
       circle(ball.x, ball.y, 20);
      fill(255,255,255);
   }

   function getRandomArbitrary(min, max){
       return Math.random() * (max - min)
       + min;
   }

