var basketball , basket , court ;
var basketball_img , basket_img , court_img;
var playerscore = 0;
var oponentscore = 0;
var edges;

var gameState = "serve";




function preload(){
  basketball_img = loadImage("Basketball.jpg");
  basket_img = loadImage("Basket.jpg");
  court_img = loadImage("Basket ball court.jpg");

}



function setup() {
  createCanvas(700,680);

  //edges = createEdgeSprites();
  

  court = createSprite(350,550,700,680);
  //court.shapeColor = "green";
  court.addImage(court_img);



  basketball = createSprite(600,600,50,50);
  //basketball.shapeColor = "red";
  basketball.addImage(basketball_img);
  basketball.scale = 0.5;
  

  basket = createSprite(350,130,50,50);
  basket.addImage(basket_img);
  //basket.shapeColor = "yellow";

}

function draw() {
  background(0);
  text(mouseX + "," + mouseY, mouseX, mouseY)
  noStroke();
  textSize(30)
  fill("white")

  
 // basketball.bounceOff(edges);
 // basketball.bounceOff(basket);
 if(gameState === "serve"){
   basketball.velocityX = 5;
   basketball.velocityY = -5;
   gameState = "play";
   if(basketball.isTouching(basket)){
    playerscore = playerscore + 0.2;
  }



 }

 if(gameState==="end"){
  if(KeyDown("a") && gameState=== end){
    gameState = "serve";
    playerscore = 0;
    oponentscore = 0;

    if(playerscore ===5 || oponentscore===5  ){
      basketball.velocityX =0;
      basketball.velocityY =0;
     
      fill("black");
      text("GAME ENDED"   , width-450,500)
     

    }

  }

 }

  

  if(basketball.x>695 || basketball.x<0 || basketball.y<0 || basketball.y>679){
    console.log("Hi");
    oponentscore = oponentscore + 0.2;
    basketball.velocityX = 0;
    basketball.velocityY = 0;
    text("Press a to restart" ,width-450,600);


  }

  

  

  



  

        
       
   basketball.depth = basketball.depth+5;

   

       
  

  
  drawSprites();
  text(" Player Score  " + Math.round(playerscore), width-260, 40)
        text("Oponent Score" + Math.round(oponentscore) , width-255 ,70)

       
}


function keyPressed(){
  if(keyCode === 39){
    basketball.velocityX = 50;
  }
  if(keyCode === 37){
    basketball.velocityX = -50;
  }
  if (keyCode === 38){
    basketball.velocityY = -50;
  }
  if(keyCode === 40){
    basketball.velocityY = 50;
  }
  

}