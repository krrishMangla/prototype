var phn,phnImg;
var s,sImg;
var gui;
var mood;
var state = 0;
var main;
var rainI,fogI,sunI,snowI;



function preload()
{
  phnImg = loadImage("icons/phn.jpg");
  sImg = loadImage("icons/bg.jpg");
  rainI = loadImage("icons/rain.jpeg");
  fogI = loadImage("icons/fog.jpeg");
  sunI = loadImage("icons/sun.jpeg");
  snowI = loadImage("icons/snow.jpg");
}

function setup()
{
 var canvas = createCanvas(windowWidth,windowHeight);



 phn = createSprite(windowWidth/2,windowHeight/2);
 phn.addImage(phnImg);
 phn.scale = 1.9;

  s = createSprite(779,365,327,560);
  s.addImage(sImg);

  
 
 
 

 

 
 
}

function draw()
{
 background(255);

 drawSprites();

 
 if(state === 0)
    {
     gui = new Weather();
     gui.display();
    }

  if(state === 1)
  {
   //mood = new Mood(); 
  }  
    

 fill(0);
 text(mouseX +","+mouseY ,mouseX,mouseY);



 
}