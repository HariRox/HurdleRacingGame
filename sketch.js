var canvas, backgroundImage;

var playerRunningCount = 0;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, player1, player2, player3, player4;
var obstacle1,obstacle2,obstacle3;
var obstacle4,obstacle5,obstacle6;
var obstacle7,obstacle8,obstacle9;
var obstacle10,obstacle11,obstacle12;

var track, car1_Img, car2_Img, car3_Img, car4_Img;

var obs1Img;
var obs2Img;
var obs3Img;
var obs4Img;
var obs5Img;
var obs6Img;
var obs7Img;
var obs8Img;
var obs9Img;
var obs10Img;
var obs11Img;
var obs12Img;

var plar1Img,plar2Img,plar3Img,plar4Img;

var playerStandingImage = [];
var playerRunningImage = [];
var playerJumpImage = [];

var trackline1,trackline2,trackline3,trackline4,trackline5;

var endline;

var score = 0;


function preload() {
  //load all the images
  
 // track = loadImage("images/track.jpg");
  //car1_Img = loadImage("images/car1.png");
 // car2_Img = loadImage("images/car2.png");
  //car3_Img = loadImage("images/car3.png");
  //car4_Img = loadImage("images/car4.png");
  obs1Img = loadImage("obs1.jpg");
  obs2Img = loadImage("obs1.jpg");
  obs3Img = loadImage("obs1.jpg");
  obs4Img = loadImage("obs1.jpg");
  obs5Img = loadImage("obs1.jpg");
  obs6Img = loadImage("obs1.jpg");
  obs7Img = loadImage("obs1.jpg");
  obs8Img = loadImage("obs1.jpg");
  obs9Img = loadImage("obs1.jpg");
  obs10Img = loadImage("obs1.jpg");
  obs11Img = loadImage("obs1.jpg");
  obs12Img = loadImage("obs1.jpg");

  plar1Img = loadImage("player1.jpeg");
  plar2Img = loadImage("player2.jpeg");
  plar3Img = loadImage("player3.png");
  plar4Img = loadImage("player4.png");

  for(var i = 0; i < 15; i ++) {
  var j = i+1;
    var path = "./images/Run_" + j + ".png";
    
  }

  for(var p = 0; p < 15; p ++) {
    var j = p+1;
    var path = "./images/Jump_" + j + ".png";
    playerJumpImage[p] = loadImage(path);
  }

  playerStandingImage[0] = loadImage("./images/Idle_1.png");
}





function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw() {
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    clear();
    game.play();
  }

  //call the end function if gamestate is 2
  if (gameState === 2) {
    game.end();

  }
}