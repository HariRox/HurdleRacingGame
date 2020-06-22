//import { text } from "body-parser";

//import { text } from "body-parser";

//craete the game class
class Game 
{

  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})
  }


  update(state){
    database.ref('/').update({gameState: state});
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

   trackline1 = createSprite(10,100,17000,5);
   trackline1.shapeColor = "black";
   trackline2 = createSprite(10,260,17000,5);
   trackline2.shapeColor = "black";
   trackline3 = createSprite(10,420,17000,5);
   trackline3.shapeColor = "black";
   trackline4 = createSprite(10,580,17000,5);
   trackline4.shapeColor = "black";
   trackline5 = createSprite(10,740,17000,5);
   trackline5.shapeColor = "black";

   obstacle1 = createSprite(3000,200,20,20);
   obstacle2 = createSprite(4000,200,20,20);
   obstacle3 = createSprite(5000,200,20,20);
   obstacle4 = createSprite(3100,320,20,20);
   obstacle5 = createSprite(4100,320,20,20);
   obstacle6 = createSprite(5100,320,20,20);
   obstacle7 = createSprite(3200,440,20,20);
   obstacle8 = createSprite(4200,440,20,20);
   obstacle9 = createSprite(5200,440,20,20);
   obstacle10 = createSprite(3300,560,20,20);
   obstacle11 = createSprite(4300,560,20,20);
   obstacle12 = createSprite(5300,560,20,20);


   obstacle1.shapeColor = "pink";
   obstacle2.shapeColor = "pink";
   obstacle3.shapeColor = "pink";
   obstacle4.shapeColor = "pink";
   obstacle5.shapeColor = "pink";
   obstacle6.shapeColor = "pink";
   obstacle7.shapeColor = "pink";
   obstacle8.shapeColor = "pink";
   obstacle9.shapeColor = "pink";
   obstacle10.shapeColor = "pink";
   obstacle11.shapeColor = "pink";
   obstacle12.shapeColor = "pink";

   obstacle1.addImage("obstacle1",obs1Img);
   obstacle2.addImage("obstacle2",obs2Img);
   obstacle3.addImage("obstacle3",obs3Img);
   obstacle4.addImage("obstacle4",obs4Img);
   obstacle5.addImage("obstacle5",obs5Img);
   obstacle6.addImage("obstacle6",obs6Img);
   obstacle7.addImage("obstacle7",obs7Img);
   obstacle8.addImage("obstacle8",obs8Img);
   obstacle9.addImage("obstacle9",obs9Img);
   obstacle10.addImage("obstacle10",obs10Img);
   obstacle11.addImage("obstacle11",obs11Img);
   obstacle12.addImage("obstacle12",obs12Img);

   obstacle1.scale = 0.5;
   obstacle2.scale = 0.5;
   obstacle3.scale = 0.5;
   obstacle4.scale = 0.5;
   obstacle5.scale = 0.5;
   obstacle6.scale = 0.5;
   obstacle7.scale = 0.5;
   obstacle8.scale = 0.5;
   obstacle9.scale = 0.5;
   obstacle10.scale = 0.5;
   obstacle11.scale = 0.5;
   obstacle12.scale = 0.5;

   player1 = createSprite(200,340,30,30);
   player1.shapeColor = "blue";

   player2 = createSprite(200,460,30,30);
   player2.shapeColor = "pink";    

   player3 = createSprite(200,580,30,30);
   player3.shapeColor = "green";

   player4 = createSprite(200,700,30,30);
   player4.shapeColor = "red";
 
   cars = [player1, player2, player3, player4];

   player1.addImage("player1",plar1Img);
   player2.addImage("player2",plar2Img);
   player3.addImage("player3",plar3Img);
   player4.addImage("player4",plar4Img);    

   player1.scale = 0.4;
   player2.scale = 0.4;
   player3.scale = 0.4;
   player4.scale = 0.4;

   endline = createSprite(8500,500,20,1000);
   endline.shapeColor = "black";
  }


  play(){
    form.hide();
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      background("white");
      var index = 0;
      var x ;
      var y = 45;
      for(var plr in allPlayers){
        index = index + 1 ;
        y = y + 120;
        x = displayWidth + allPlayers[plr].distance;
        console.log(allPlayers[plr].distance);
        cars[index-1].x = x;
        cars[index-1].y = y;

        if (index === player.index){
          stroke(10);
          fill("green");
          ellipse(x,y,110,110);
          cars[index - 1].shapeColor = "black";
          camera.position.x = cars[index-1].x
          camera.position.y = displayHeight/2;
        }
      }

    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
      if(gameState === 1) {
        player.distance +=10
      }
      player.update();
    }

    if(player.distance > 6600){
       gameState = 2;
    }    
    drawSprites();
  }

  end(){
  console.log("Game Ended");
   game.update(2);
  }
}
