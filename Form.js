//import { text } from "body-parser";

//craete the form class
class Form {constructor(){
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.age = createInput("Age");
    this.reset = createButton('Reset');7
    this.pause = createButton('Pause');
    this.play = createButton('Play');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.age.hide();
  }
 
  display(){
    this.title.html("Hurdle Race Game");
    this.title.position(displayWidth/2 - 50, 0);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.age.position(925,400);
    this.reset.position( 300, 30);
    this.pause.position(250,30);
    this.play.position(200,30);
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.age.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      player.age = this.age.value();
    });
    
    this.reset.mousePressed(() => {
      game.update(0);
      player.updateCount(0);
    })

    this.pause.mousePressed(() => {
         gameState = 3;
         console.log("pause");
         textSize(25);
         fill("black");
         text("Game Paused" , 500,30);
    })

    this.play.mousePressed(() => {
       gameState = 1;
       console.log("despacito");
    })
  }
}
