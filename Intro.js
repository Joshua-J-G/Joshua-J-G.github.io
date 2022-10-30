
//fix


const w95faregular = new FontFace('w95faregular', 'url(./src/Fonts/w95fa-webfont.woff)');

import {MainmenuSoftware} from "./SoftwareMenuScript.js";
import {MainmenuHardware} from "./HardwareMenuScript.js";
import {MusicMainMenu} from "./MusicMenuScript.js";
var enterkey = new Image();
enterkey.src = "./src/Images/Enter.png";
//Lines System
// 
//
//
//
//
//
//
//
//
//



window.resizeTo(

  
  window.screen.availWidth / 2,
  window.screen.availHeight / 2
);



w95faregular.load().then(function(mfont){


    document.fonts.add(mfont);
    console.log('w95faregular loaded');
    console.log(canvas);
    ctx.font = '20px w95faregular';
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
   // ctx.fillText('C:\\> Loading Portfolio', 100, 250);
    
   
    ctx.fillText('         MEMORY:     256kb detected                                         ', 515, 300);
    ctx.fillStyle = " #66ff00";
    ctx.fillText('OK', 690, 300);
    ctx.fillStyle = "white";
    ctx.fillText('         STORAGE:     HDD: 1000Mb                                            ', 515, 325);
    ctx.fillStyle = " #66ff00";
    ctx.fillText('OK', 690, 325);
    ctx.fillStyle = "white";




    ctx.fillText('C:\\>', 100, 350);
    ctx.fillText('C:\\>', 100, 375);
    ctx.fillText('C:\\>', 100, 400);
    ctx.fillText('C:\\>', 100, 425);
    ctx.fillText('C:\\>', 100, 450);
    ctx.fillText('C:\\>', 100, 475);
    ctx.fillText('C:\\>', 100, 500);
    ctx.fillText('C:\\>', 100, 525);
    ctx.fillText('C:\\>', 100, 550);
    ctx.fillText('C:\\>', 100, 575);
    ctx.fillText('C:\\>', 100, 600);
    ctx.fillText('C:\\>', 100, 625);
    ctx.fillText('C:\\>', 100, 650);
    ctx.fillText('C:\\>', 100, 675);
    ctx.fillText('C:\\>', 100, 700);
    ctx.fillText('C:\\>', 100, 725);
    ctx.fillText('C:\\>', 100, 750);
    ctx.fillText('C:\\>', 100, 775);
    ctx.fillText('C:\\>', 100, 800);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.moveTo(310, 260);
    ctx.lineTo(725, 260);
    ctx.lineTo(725, 460);
    ctx.lineTo(310, 460);
    ctx.closePath();
    ctx.stroke();

   
    resetScreen("black");
    statAnimation();
    stopresize= true;
  });
//250px is the top
//800px is the bottom of the screen

function wait(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");

function resetScreen(fillStyle)
{
  canvas.width = 1920;
  canvas.height = 1080;
  ctx.fillStyle = fillStyle ;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var InMainMenu = false;

var PopupControlls = true;
var stopresize = false;

export async function LoadMenu()
{
  resetScreen("#01817f");

  for (let x = 0; x < 20*15; x += 20) {
    ctx.fillStyle =  "#c3c3c3";
    ctx.fillRect(canvas.width / 2-400 , canvas.height/2 + x, 800, 30);
    ctx.fillRect(canvas.width / 2 -400, canvas.height/2 - x, 800, 30);
    ctx.fillStyle =  "black";
    ctx.fillRect(canvas.width / 2 -398, (canvas.height/2 + x)+30, 800, 2);
    ctx.fillRect((canvas.height/2 +820), (canvas.height / 2 - x ) , 2, 30);
    ctx.fillRect((canvas.height/2 +820), (canvas.height / 2 + x ) , 2, 30);



    await sleep(50);
  }
  ctx.fillStyle =  "#0000a8";
  ctx.fillRect(canvas.width / 2-390 , (canvas.height/2 - 14*20) + 10, 780, 30);
  ctx.fillStyle =  "#c3c3c3";
  ctx.fillRect(canvas.width / 2+360 , (canvas.height/2 - 14*20) + 15, 20, 20);
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  ctx.strokeRect(canvas.width / 2+360 , (canvas.height/2 - 14*20) + 15, 20, 20);
  ctx.font = '20px w95faregular';
  ctx.textAlign = "left";
  ctx.fillText('Portfolio Options - Joshua Gessner', 600, 292);

  

  InMainMenu = true;

  if(PopupControlls)
  {

  
    popup();
  }
  
}


function popup()
{
  ctx.fillStyle =  "black";
  ctx.fillRect(canvas.width/2 - 250,canvas.height/2-50,500+5,200+5);
  ctx.fillStyle =  "#c3c3c3";
  ctx.fillRect(canvas.width/2 - 250,canvas.height/2-50,500,200);
  ctx.strokeStyle = "#818181";
  ctx.lineWidth = 4;
  ctx.strokeRect(canvas.width/2 - 250,canvas.height/2-50,500,200);
  ctx.drawImage(Arrows,((canvas.width/2))-(420/8)-185,(canvas.height/2)-40,420/4,240/4);
  ctx.drawImage(enterkey,((canvas.width/2))-(420/8)-195,(canvas.height/2)+40,570/4,210/4);
  ctx.font = '20px w95faregular';
  ctx.textAlign = "left";
  ctx.fillStyle = "black";
  ctx.fillText('Use Arrows keys To select Object', (canvas.width/2)-(420/8)-75, (canvas.height/2)-5);
  ctx.fillText('Use Enter Key to Confirm Selection', (canvas.width/2)-(420/8)-60, (canvas.height/2)+70);
  ctx.fillStyle = "#0000a8";
  ctx.fillRect(((canvas.width/2)-48), (canvas.height/2)+120-20, 100, 26);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText('OK', ((canvas.width/2)), (canvas.height/2)+120); 
}

var time = 0.1;
var sizeofpixels = 60;

async function looptheScreen(times)
{
  for (let x = 0; x < canvas.width; x += sizeofpixels) {
    ctx.fillStyle = "#01817f";
    ctx.fillRect(x, sizeofpixels*times, sizeofpixels, sizeofpixels);
    ctx.fillRect(sizeofpixels*times, x, sizeofpixels, sizeofpixels);
   
    ctx.fillRect(canvas.width - x,sizeofpixels*(17-times), sizeofpixels, sizeofpixels);
    ctx.fillRect(sizeofpixels * (31-times),canvas.height - x, sizeofpixels, sizeofpixels);
    await sleep(time);
  }

  if(times == 8)
  {
    LoadMenu();
  }

}



async function statAnimation()
{
 
    console.log('w95faregular loaded');
    console.log(canvas);
    ctx.font = '20px w95faregular';
    ctx.fillStyle = "white";
    ctx.textAlign = "left";
  console.log("start of chain");

  ctx.fillText('C:\\>', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\>_', 100, 100);
  await sleep(200);
  ctx.fillStyle = "black";
  ctx.fillRect(90, 80, 100, 50);
  ctx.fillStyle = "white";

  ctx.fillText('C:\\>', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\>_', 100, 100);
  await sleep(200);
  ctx.fillStyle = "black";
  ctx.fillRect(90, 80, 100, 50);
  ctx.fillStyle = "white";
  
  ctx.fillText('C:\\>', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\>_', 100, 100);
  await sleep(200);
  ctx.fillStyle = "black";
  ctx.fillRect(90, 80, 100, 50);
  ctx.fillStyle = "white";

  ctx.fillText('C:\\>', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\>_', 100, 100);
  await sleep(200);
  ctx.fillStyle = "black";
  ctx.fillRect(90, 80, 100, 50);
  ctx.fillStyle = "white";
  
  ctx.fillText('C:\\>', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> L', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Lo', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loa', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Load', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loadi', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loadin', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading P', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Po', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Por', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Port', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Portf', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Portfo', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Portfol', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Portfoli', 100, 100);
  await sleep(200);
  ctx.fillText('C:\\> Loading Portfolio', 100, 100);
  console.log("end of chain");
  await sleep(200);

  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.moveTo(310, 255-100);
  ctx.lineTo(725, 255-100);
  ctx.lineTo(725, 455-100);
  ctx.lineTo(310, 455-100);
  ctx.closePath();
  ctx.stroke();

  await sleep(100);
  ctx.fillText('MEMORY:     256kb detected                                         ', 325, 200);
  await sleep(500);
  ctx.fillStyle = " #66ff00";
  ctx.fillText('OK', 690, 200);
  ctx.fillStyle = "white";
  await sleep(300);
  ctx.fillText('STORAGE:     HDD: 1000Mb                                            ', 325, 325-100);

  await sleep(500);
  ctx.fillStyle = " #66ff00";
  ctx.fillText('OK', 690, 325-100);
  ctx.fillStyle = "white";
  await sleep(300);
  ctx.fillText('CPU:     Intel 6502   3Mhz                                            ', 325, 350-100);

  await sleep(500);
  ctx.fillStyle = " #66ff00";
  ctx.fillText('OK', 690, 350-100);
  ctx.fillStyle = "white";

  await sleep(300);
  ctx.fillText('SOUND:     Sound Blaster 1.0                                    ', 325, 375-100);

  await sleep(500);
  ctx.fillStyle = " #66ff00";
  ctx.fillText('OK', 690, 375-100);
  ctx.fillStyle = "white";

  await sleep(300);
  ctx.fillText('GPU:    NONE DETECTED                           ', 325, 400-100);

  await sleep(500);
  ctx.fillStyle = " #FC100D";
  ctx.fillText('FAIL', 680, 400-100);
  ctx.fillStyle = "white";

  await sleep(300);
  ctx.fillText('MOTHERBOARD:   NO PROBLEMS DETECTED                              ', 325, 425-100);

  await sleep(500);
  ctx.fillStyle = " #66ff00";
  ctx.fillText('OK', 690, 425-100);
  ctx.fillStyle = "white";

  await sleep(300);
 
  ctx.fillText('Loading OS', 100, 500-100);
  await sleep(500);
  ctx.fillText('Loading OS.', 100, 500-100);
  await sleep(500);
  ctx.fillText('Loading OS..', 100, 500-100);
  await sleep(500);
  ctx.fillText('Loading OS...', 100, 500-100);
  await sleep(500);
  ctx.fillText('Loading OS....', 100, 500-100);
  await sleep(500);
  ctx.fillText('Loading OS.....', 100, 500-100);
  await sleep(500);
  
  resetScreen();

  await sleep(1000);
  for (let x = 0; x < 240; x += 30) {
    ctx.fillStyle = "#c3c3c3";
    ctx.fillRect(x+ (canvas.width / 2)- 30*8 , canvas.height/2, 30, 30);
    ctx.fillRect(-x+ (canvas.width / 2) + 30*8 , canvas.height/2, 30, 30);

    await sleep(100);
  }

  for (let x = 0; x < 80; x += 30) {
    ctx.fillStyle =  "#c3c3c3";
    ctx.fillRect(canvas.width / 2-300 , canvas.height/2 + x, 600, 30);
    ctx.fillRect(canvas.width / 2 -300, canvas.height/2 - x, 600, 30);

    await sleep(100);
  }

  ctx.strokeStyle = "#636262";
  ctx.lineWidth = 10;
  ctx.beginPath();
 
  ctx.moveTo(1260, 480);
  ctx.lineTo(660, 480);

  ctx.lineTo(660, 630);
  ctx.lineTo(1260, 630);

  ctx.closePath();
  ctx.stroke();
  ctx.font = '100px w95faregular';
  ctx.strokeStyle = "Black";
  ctx.lineWidth = 2;
  ctx.textAlign = "center";
  var gradient = ctx.createLinearGradient(0, 0, canvas.width/2, 0);
  gradient.addColorStop("0", "magenta");
  gradient.addColorStop("0.5", "blue");
  gradient.addColorStop("1.0", "red");
  ctx.strokeStyle = gradient;
  ctx.fillStyle  = gradient;
  ctx.fillText('Welcome', (canvas.width/2), (canvas.height/2)+50);


  ctx.strokeStyle = "Black";
  
  ctx.strokeText('Welcome', (canvas.width/2), (canvas.height/2)+50);

  await sleep(1000);

  



looptheScreen(0);
looptheScreen(1);
looptheScreen(2);
looptheScreen(3);
looptheScreen(4);
looptheScreen(5);
looptheScreen(6);
looptheScreen(7);
looptheScreen(8);

  

}
var selectedicon = 0;
var incontactsmenu = false;
document.addEventListener('keydown', function(event) {
  if(InMainMenu)
  {

  
  if(event.keyCode == 37) {
    selectedicon--;
    if(selectedicon <= -1)
    {
      selectedicon = 3;
    }
  }
  else if(event.keyCode == 39) {
    selectedicon++;
    if(selectedicon >= 4)
    {
      selectedicon = 0;
    }
  
 
  }
  else if(event.keyCode == 13)
  {
    
    console.log("Enter Called");

    if(!PopupControlls )
    {
    switch(selectedicon )
    {
      case 0:
        SoftwareMenu();
      break;
      case 1:
        HardwareMenu();
      break;
      case 2:
        MusicMenu();
      break;
      case 3:
        console.log("Enter Contact Called Called");
     
        Contact()
        break;
    }
  }else
  {
    ctx.fillStyle =  "#c3c3c3";
    ctx.fillRect(canvas.width/2 - 275,canvas.height/2-75,550,250);
    PopupControlls = false;

    console.log("reset Called");
  }
  }
}
});









var Software = new Image();
Software.src = "./src/Icons/Software.png";

var Hardware = new Image();
Hardware.src = "./src/Icons/Hardware.png";

var Music = new Image();
Music.src = "./src/Icons/Music.png";

var Contacts = new Image();
Contacts.src = "./src/Icons/Contacts.png";

var iconsize = 80;



var blink = true;



function SoftwareMenu()
{
  console.log("Software Called");
  InMainMenu = false;
  resetScreen("#01817f");
  MainmenuSoftware(ctx,canvas);
}

function HardwareMenu()
{
  console.log("Hardware Called");
  InMainMenu = false;
  resetScreen("#01817f");
  MainmenuHardware(ctx,canvas);
}


function MusicMenu()
{
  console.log("MusicCalled");
  InMainMenu = false;
  resetScreen("#01817f")
  MusicMainMenu(ctx,canvas);

}

var Envelop = new Image();
Envelop.src = "./src/Icons/Email.png";

window.addEventListener("resize", () => {
  if(!stopresize){
  window.location.reload();
  }
});


function popupforContact()
{

  console.log(PopupControlls);
  ctx.fillStyle =  "black";
  ctx.fillRect(canvas.width/2 - 250,canvas.height/2-50,500+5,200+5);
  ctx.fillStyle =  "#c3c3c3";
  ctx.fillRect(canvas.width/2 - 250,canvas.height/2-50,500,200);
  ctx.strokeStyle = "#818181";
  ctx.lineWidth = 4;
  ctx.strokeRect(canvas.width/2 - 250,canvas.height/2-50,500,200);
  ctx.drawImage(Envelop,((canvas.width/2))-(420/8)-185,(canvas.height/2)-40,32*3,32*3);
 // ctx.drawImage(enterkey,((canvas.width/2))-(420/8)-195,(canvas.height/2)+40,570/4,210/4);
  ctx.font = '30px w95faregular';
  ctx.textAlign = "left";
  ctx.fillStyle = "black";
  ctx.fillText('Joshua.Gessner5@gmail.com', (canvas.width/2)-(420/8)-75, (canvas.height/2)+15);
  //ctx.fillText('phone', (canvas.width/2)-(420/8)-60, (canvas.height/2)+70);
  ctx.font = '20px w95faregular';
  ctx.fillStyle = "#0000a8";
  ctx.fillRect(((canvas.width/2)-48), (canvas.height/2)+120-20, 100, 26);
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText('OK', ((canvas.width/2)), (canvas.height/2)+120); 
}


function Contact()
{
  console.log("Contacts Coalled");
  //InMainMenu = false;
  PopupControlls = true;
  popupforContact();

}








var Arrows = new Image();
Arrows.src = "./src/Images/ArrowKeysLeft.png";









export function Update()
{
  //resetScreen();
  if(InMainMenu && !PopupControlls)
  {
    


    ctx.drawImage(Hardware, ((canvas.width/2)-100)-iconsize/2, (canvas.height/2), iconsize, iconsize);
    ctx.drawImage(Music, ((canvas.width/2)+100)-(iconsize/2), (canvas.height/2), iconsize, iconsize);
    ctx.drawImage(Software, ((canvas.width/2)-250)-(iconsize/2), (canvas.height/2), iconsize, iconsize);
    ctx.drawImage(Contacts, ((canvas.width/2)+250)-(iconsize/2), (canvas.height/2), iconsize, iconsize);
  


    console.log(selectedicon);
    ctx.textAlign = "center";
    ctx.font = '24px w95faregular';
    switch(selectedicon)
    {
      case 0:
      
          ctx.fillStyle = "#0000a8";
          ctx.fillRect(((canvas.width/2)-250-48), (canvas.height/2)+120-20, 100, 26);
          ctx.fillStyle = "white";
          ctx.fillText('Software', ((canvas.width/2)-250), (canvas.height/2)+120);      

          ctx.fillStyle = "#c3c3c3";
          ctx.fillRect(((canvas.width/2)+100-48), (canvas.height/2)+120-20, 100, 26);
          ctx.fillStyle = "#c3c3c3";
          ctx.fillRect(((canvas.width/2)-48 - 100), (canvas.height/2)+120-20, 100, 26);
         
          ctx.fillStyle = "#c3c3c3";
          ctx.fillRect(((canvas.width/2)+250-48), (canvas.height/2)+120-20, 100, 26);
          ctx.fillStyle = "black";
          ctx.textAlign = "center";
          ctx.font = '24px w95faregular';
          ctx.fillText('Hardware', (canvas.width/2) - 100, (canvas.height/2)+120);
      

          ctx.fillText('Music', ((canvas.width/2)+100), (canvas.height/2)+120);

          ctx.fillText('Contact', ((canvas.width/2)+250), (canvas.height/2)+120);
      
      break;
      case 1:
        ctx.fillStyle = "#0000a8";
        ctx.fillRect(((canvas.width/2)-48 - 100), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "white";
        ctx.fillText('Hardware', ((canvas.width/2))-100, (canvas.height/2)+120); 
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)+250-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-250-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)+100-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-250-48), (canvas.height/2)+250-20, 100, 26);
        ctx.fillStyle = "black";
  
        
    
        ctx.fillText('Software', ((canvas.width/2)-250), (canvas.height/2)+120);
    
        ctx.fillText('Music', ((canvas.width/2)+100), (canvas.height/2)+120);
        ctx.fillText('Contact', ((canvas.width/2)+250), (canvas.height/2)+120);
      break;
      case 2:
        ctx.fillStyle = "#0000a8";
        ctx.fillRect(((canvas.width/2)+100-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "white";
        ctx.fillText('Music', ((canvas.width/2)+100), (canvas.height/2)+120); 
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)+250-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-48 - 100), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-250-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-250-48), (canvas.height/2)+250-20, 100, 26);

        ctx.fillStyle = "black";

        ctx.fillText('Hardware', (canvas.width/2)-100, (canvas.height/2)+120);
    
        ctx.fillText('Software', ((canvas.width/2)-250), (canvas.height/2)+120);
    
        ctx.fillText('Contact', ((canvas.width/2)+250), (canvas.height/2)+120);

      break;
      case 3:
        ctx.fillStyle = "#0000a8";
        ctx.fillRect(((canvas.width/2)+250-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "white";
        ctx.fillText('Contact', ((canvas.width/2)+250), (canvas.height/2)+120); 
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)+100-48), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-48 - 100), (canvas.height/2)+120-20, 100, 26);
        ctx.fillStyle = "#c3c3c3";
        ctx.fillRect(((canvas.width/2)-250-48), (canvas.height/2)+120-20, 100, 26);


        ctx.fillStyle = "black";

        ctx.fillText('Hardware', (canvas.width/2)-100, (canvas.height/2)+120);
    
        ctx.fillText('Software', ((canvas.width/2)-250), (canvas.height/2)+120);
    
        ctx.fillText('Music', ((canvas.width/2)+100), (canvas.height/2)+120);

      break;

    }


  }
  


}




























//ctx.fillRect(0, 0, canvas.width, canvas.height);


