import {LoadMenu} from "./Intro.js";
//fix
var enterkey = new Image();
enterkey.src = "./src/Images/Enter.png";

var ArrowKeys = new Image();
ArrowKeys.src = "./src/Images/Full Arrows.png";

var sizeX = 900;
var sizey = 700;


var Bioshockaudio = new Audio("./src/Audio/Bioshock.mp3");
var Cupheadaudio = new Audio("./src/Audio/Cuphead.mp3");


var Art = new Audio("./src/Audio/ArtistRageOST.mp3");

var canvas;

var ctxe

var selectedProject = 0;
var selectedObject = 0;

var ifonsoftwaremenu = false;

var playvideo = false;
function TakeToWebSight()
{
    if(ifonsoftwaremenu)
    {
    switch(selectedProject)
    {


        case 4:
            ifonsoftwaremenu = false;
            LoadMenu();
        break;
    }
    }

    switch(selectedObject)
    {
        case 0:
            switch(selectedProject)
            {
                case 1:
                    Cupheadaudio.currentTime = 0;
                    Cupheadaudio.play();
                break;
                case 2:
                    Bioshockaudio.currentTime = 0;
                    Bioshockaudio.play();
                break;
                case 3:
                    Art.currentTime = 0;
                    Art.play();
                break;
            }
        break;
        case 1:
            playvideo = !playvideo;

            switch(selectedProject)
            {
                case 1:
                    if(playvideo)
                    {
                        Cupheadaudio.play();
                    }else
                    {
                        Cupheadaudio.pause();
                    }
                break;
                case 2:
                    if(playvideo)
                    {
                        Bioshockaudio.play();
                    }else
                    {
                        Bioshockaudio.pause();
                    }
                break;
                case 3:
                    if(playvideo)
                    {
                        Art.play();
                    }else
                    {
                        Art.pause();
                    }
                break;
            }
        break;
        case 2:
            
            switch(selectedProject)
            {
                case 1:
                    window.open("https://drive.google.com/file/d/1JwVhMqfKWjwx_ihu32cW1lmvUQfNrIC2/view?usp=sharing");
                break;
                case 2:
                    window.open("https://drive.google.com/file/d/1svQe8zlVlPlaSX32-P1YZuGDbs9YVSQe/view?usp=sharing");
                break;
                case 3:
                    window.open("https://drive.google.com/file/d/1PQCcWXT_zr5vqWE7U64RlGCDD3JCrWJC/view?usp=sharing");
                break;
            }
           
        break;
    }
}








document.addEventListener('keydown', function(event) {
    if(ifonsoftwaremenu)
    {
  
    
    if(event.keyCode == 38) {
        selectedProject--;
        Cupheadaudio.pause();
        Bioshockaudio.pause();
        Art.pause();
        if(selectedProject <= -1)
        {
            selectedProject = 0
        }
        playvideo = false;
        selectedObject = 0;
   
    }
    else if(event.keyCode == 40) {
        selectedProject++;
        Cupheadaudio.pause();
        Bioshockaudio.pause();
        Art.pause();
        if(selectedProject >= 4)
        {
            selectedProject = 4;
        }
        playvideo = false;
        selectedObject = 0;
    }
    else if(event.keyCode == 13)
    {
      TakeToWebSight();
    }else if(event.keyCode == 37)
    {
        selectedObject--;
 
        if(selectedObject <= -1)
        {
            selectedObject = 0;
        }
    }else if(event.keyCode == 39)
    {
        selectedObject++;
      
        if(selectedObject >= 2)
        {
            selectedObject = 2;
        }
    }
  }
  });



  function refreshWhiteSpace()
  {
      ctxe.fillStyle =  "white";
      ctxe.fillRect(canvas.width /2 - (sizeX/2) + 10 , canvas.height/2 - (sizey /2) + 60, sizeX - 20 - 175,sizey - 80);
      ctxe.strokeStyle = "black";
      ctxe.lineWidth = 1;
      ctxe.strokeRect(canvas.width /2 - (sizeX/2) + 10 , canvas.height/2 - (sizey /2) + 60, sizeX - 20 - 175,sizey - 80);
  
  
  
  }
  
  

  function MediaButtons()
  {
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";

   
    if(playvideo)
    {
        ctxe.font = '100px w95faregular';
        ctxe.fillText('???', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2, 815);
    
    }else
    {
        ctxe.font = '60px w95faregular';
        ctxe.fillText('??????', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2, 800);
      
        
    }
    ctxe.textAlign = "center";
    
    ctxe.font = '100px w95faregular';
    ctxe.fillText('???', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 -150, 815);
    ctxe.textAlign = "center";
    ctxe.font = '100px w95faregular';
    ctxe.fillText('???', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2+ 150, 815);


    switch(selectedObject)
    {
        case 0:
            ctxe.fillStyle =  "black";
            ctxe.fillStyle =  "#0000a8";
           ctxe.fillRect(canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 - 60 - 150, 825,100,20);

        break;
        case 1:
            ctxe.fillStyle =  "black";
            ctxe.fillStyle =  "#0000a8";
           ctxe.fillRect(canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 - 60, 825,100,20);
        break;
        case 2:
            
            ctxe.fillStyle =  "black";
            ctxe.fillStyle =  "#0000a8";
           ctxe.fillRect(canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 - 60 + 150, 825,100,20);
        break;
    }


    //ctxe.fillRect();
  }












  function SelectedSidebar()
  {
     
  
  
      ctxe.fillStyle =  "black";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1,155,30);
      ctxe.fillStyle =  "#c3c3c3";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "black";
      ctxe.textAlign = "center";
      ctxe.fillText('Introduction', canvas.width /2 + sizeX/2 - 165 +155/2,220);
  
      ctxe.fillStyle =  "black";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*1,155,30);
      ctxe.fillStyle =  "#c3c3c3";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*1,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "black";
      ctxe.textAlign = "center";
      ctxe.fillText('Cuphead', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*1);
  
      
      ctxe.fillStyle =  "black";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*2,155,30);
      ctxe.fillStyle =  "#c3c3c3";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*2,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "black";
      ctxe.textAlign = "center";
      ctxe.fillText('Bioshock', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*2);
  
      ctxe.fillStyle =  "black";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*3,155,30);
      ctxe.fillStyle =  "#c3c3c3";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*3,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "black";
      ctxe.textAlign = "center";
      ctxe.fillText('Comp 1', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*3);
  
  
  
     
  
  
      ctxe.fillStyle =  "black";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*13,155,30);
      ctxe.fillStyle =  "#c3c3c3";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*13,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "black";
      ctxe.textAlign = "center";
      ctxe.fillText('Back', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*13);
  
      switch(selectedProject)
      {
          case 0:
              ctxe.fillStyle =  "#0000a8";
              ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200,155,30);
              ctxe.font = '20px w95faregular';
              ctxe.fillStyle = "white";
              ctxe.textAlign = "center";
              ctxe.fillText('Introduction', canvas.width /2 + sizeX/2 - 165 +155/2,220);
          break;
          case 1:
              ctxe.fillStyle =  "#0000a8";
              ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*1,155,30);
          ctxe.font = '20px w95faregular';
          ctxe.fillStyle = "white";
          ctxe.textAlign = "center";
          ctxe.fillText('Cuphead', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*1);
  
          break;
          case 2:
              ctxe.fillStyle =  "#0000a8";
              ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*2,155,30);
              ctxe.font = '20px w95faregular';
              ctxe.fillStyle = "white";
              ctxe.textAlign = "center";
              ctxe.fillText('Bioshock', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*2);
          break;
          case 3:
              ctxe.fillStyle =  "#0000a8";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*3,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "white";
      ctxe.textAlign = "center";
      ctxe.fillText('Comp', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*3);
          break;
   

          case 4:
              ctxe.fillStyle =  "#ff0081";
      ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*13,155,30);
      ctxe.font = '20px w95faregular';
      ctxe.fillStyle = "white";
      ctxe.textAlign = "center";
      ctxe.fillText('Back', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*13);
          break;
  
      }
  }
  



  export function UpdateMusic()
  {
      if(ifonsoftwaremenu)
      {
      
          SelectedSidebar();
      switch(selectedProject)
      {
        
          case 0:
             
              refreshWhiteSpace();
              ctxe.fillStyle = "black";
              ctxe.font = '50px w95faregular';
              ctxe.fillText('Introduction', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2, 300);
              ctxe.drawImage(enterkey, (canvas.width/2)-210*2, (canvas.height/2)+150, 570/2, 210/2);
              ctxe.drawImage(ArrowKeys, (canvas.width/2)-192*2, (canvas.height/2)-150, 611/3, 461/3);
          
          
              ctxe.fillStyle = "black";
              ctxe.textAlign = "left";
              ctxe.font = '20px w95faregular';
              ctxe.fillText('Use the Up and Down Arrow Keys To Navigate Between Projects and Music Menus', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-320, (canvas.height/2)-150 + 461/4 + 60);
              ctxe.fillText('Hitting Enter will play the Song you have selected', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 ) - 175, (canvas.height/2)-150 + 425);
          break;

          case 1:
             
              refreshWhiteSpace();
              ctxe.fillStyle = "black";
              ctxe.textAlign = "center";
              ctxe.font = '60px w95faregular';
              ctxe.fillText('Cuphead Medley', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2, 300);
              MediaButtons();
          break;
          case 2:
             
            refreshWhiteSpace();
            ctxe.fillStyle = "black";
            ctxe.textAlign = "center";
            ctxe.font = '60px w95faregular';
            ctxe.fillText("Cohen's Masterpiece", canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2, 300);
            MediaButtons();
        break;
        case 3:
             
            refreshWhiteSpace();
            ctxe.fillStyle = "black";
            ctxe.textAlign = "center";
            ctxe.font = '60px w95faregular';
            ctxe.fillText('Comp 1', canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2, 300);
            MediaButtons();
        break;
     
      }
      
    
    }
}













export function MusicMainMenu(ctx,Canvas)
{
    selectedProject = 0;
    canvas = Canvas;
    ctxe = ctx
    ctx.fillStyle =  "black";
    ctx.fillRect(Canvas.width /2 - (sizeX/2)+1 , Canvas.height/2 - (sizey /2)+1, sizeX+1,sizey+1);
    ctx.fillStyle =  "#c3c3c3";
    ctx.fillRect(Canvas.width /2 - (sizeX/2) , Canvas.height/2 - (sizey /2), sizeX,sizey);
    ctx.fillStyle =  "#0000a8";
    ctx.fillRect(Canvas.width /2 - (sizeX/2) + 10 , Canvas.height/2 - (sizey /2) + 10, sizeX - 20 - 175,30);
    ctx.font = '20px w95faregular';
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
    ctx.fillText('Music - Joshua Gessner', 550, 222);
    ctx.strokeStyle = "#818181";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#818181";
    ctx.strokeRect(Canvas.width /2 + sizeX/2 - 175 , Canvas.height/2- (sizey /2),175,sizey );
    ctx.fillRect(Canvas.width /2 + sizeX/2 - 175 , Canvas.height/2- (sizey /2),175,sizey );
    ifonsoftwaremenu = true;
}