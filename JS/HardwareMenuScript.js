
//fix
var sizeX = 900;
var sizey = 700;

import {LoadMenu} from "./JS/Intro.js";

var enterkey = new Image();
enterkey.src = "./src/Images/Enter.png";

var ArrowKeys = new Image();
ArrowKeys.src = "./src/Images/ArrowKeys.png";

//Software Images
var Central2D = new Image();
Central2D.src = "./src/Images/Hardware/Hardware 1.png";

var FightBot = new Image();
FightBot.src = "./src/Images/Hardware/Hardware 2.png";

var uniWeb = new Image();
uniWeb.src = "./src/Images/Hardware/Hardware 3.png";

var StudyHub = new Image();
StudyHub.src = "./src/Images/Hardware/Hardware 4.png";


var ImpostUs = new Image();
ImpostUs.src = "./src/Images/Hardware/Hardware 5.png";



var canvas;

var ctxe

var selectedProject = 0;

var ifonsoftwaremenu = false;

function refreshWhiteSpace()
{
    ctxe.fillStyle =  "white";
    ctxe.fillRect(canvas.width /2 - (sizeX/2) + 10 , canvas.height/2 - (sizey /2) + 60, sizeX - 20 - 175,sizey - 80);
    ctxe.strokeStyle = "black";
    ctxe.lineWidth = 1;
    ctxe.strokeRect(canvas.width /2 - (sizeX/2) + 10 , canvas.height/2 - (sizey /2) + 60, sizeX - 20 - 175,sizey - 80);



}


function TakeToWebSight()
{
    if(ifonsoftwaremenu)
    {
    switch(selectedProject)
    {


        case 6:
            ifonsoftwaremenu = false;
            LoadMenu();
        break;
    }
    }
}














document.addEventListener('keydown', function(event) {
    if(ifonsoftwaremenu)
    {
  
    
    if(event.keyCode == 38) {
        selectedProject--;
        if(selectedProject <= -1)
        {
            selectedProject = 0
        }
   
    }
    else if(event.keyCode == 40) {
        selectedProject++;
        if(selectedProject >= 6)
        {
            selectedProject = 6;
        }
    }
    else if(event.keyCode == 13)
    {
      TakeToWebSight();
    }
  }
  });



export function UpdateHardware()
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
            ctxe.drawImage(ArrowKeys, (canvas.width/2)-192*2, (canvas.height/2)-150, 191/2, 461/2);
        
        
            ctxe.fillStyle = "black";
            ctxe.textAlign = "left";
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Use the Up and Down Arrow Keys To Navigate Between Projects', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 ) - 175, (canvas.height/2)-150 + 461/4);
            ctxe.fillText('Hitting Enter will Direct you to a demonstration or Project files', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 ) - 175, (canvas.height/2)-150 + 425);
        break;
        case 1:
            refreshWhiteSpace();
            ctxe.drawImage(Central2D, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 867/5, 1156/5);
            ctxe.fillStyle = "black";
            ctxe.textAlign = "left";
            ctxe.font = '30px w95faregular';
            ctxe.fillText('Project Name:Fixing GPU', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-150, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2021', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-150, (canvas.height/2)-250 + 30);
           
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245);
            ctxe.fillText('This was During the GPU Crisis', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+20);
            ctxe.fillText('my Freind wanted a new Computer and So i decided to help him but he didnt have much', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+40);
            ctxe.fillText(' money left to spend on a GPU around $300 and so we came to the conclusion that', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+60);
            ctxe.fillText(' we would need to buy a broken gpu', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+80);
            ctxe.fillText('for this project the ram on the gpu was dead / dying', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+100);
            ctxe.fillText('so i replaced it with identical models from new old stock', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+120);
            ctxe.fillText('the card at first worked in my pc but then when i went to build his it stoped', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+140);
            ctxe.fillText('turned out a couple of the solder balls had cracked so I rehaeded the board with a ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+160);
            ctxe.fillText('soldering Station', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+180);
            ctxe.fillText('i then did some tests on the pc parts to make sure they hit the standards i expected', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+200);
        break;
        case 2:
            refreshWhiteSpace();
            ctxe.drawImage(FightBot, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 1024/4, 1024/4);
            ctxe.fillStyle = "black";
            ctxe.textAlign = "left";
            ctxe.font = '30px w95faregular';
            ctxe.fillText('Project Name: Xbox Repair', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-75, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2021', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-75, (canvas.height/2)-250 + 30);

            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245);
            ctxe.fillText('I like collecting old hardware', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+20);
            ctxe.fillText('for this project i had just got an old xbox but there where a couple problems with it', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+40);
            ctxe.fillText('the fans where way too loud and the clock wasnt saying on', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+60);
            ctxe.fillText('well these descoveries lead me to discover that this xbox was suffering from ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+80);
            ctxe.fillText('capacitor plauge', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+100);
            ctxe.fillText('i decided to rip out the clock cap and replace the other burst capacitors with', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+120);
            ctxe.fillText('modern equivilents', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+140);
        break;
        case 3:
            refreshWhiteSpace();
            ctxe.textAlign = "left";
            ctxe.drawImage(uniWeb, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 1816/10, 4032/10);
            ctxe.font = '30px w95faregular';
            ctxe.fillStyle = "black";
            ctxe.fillText('Project Name: R2D2', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-155, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2021', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-155, (canvas.height/2)-250 + 30);
            
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-100+ 245);
            ctxe.fillText('I created this using a raspberry pi and a Arudion mega talking via i2c', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-100 + 245+20);
            ctxe.fillText('finaly A freind of mine gave me an old R2D2 which they had broken knowing i like', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-100 + 245+40);
            ctxe.fillText('To fix stuff they Gave it to me and I turned it into a Smart Device', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-100 + 245+60);
            ctxe.fillText('i later disasemble it for other projects', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-100 + 245+80);
        break;
        case 4:
            refreshWhiteSpace();
            ctxe.textAlign = "left";
            ctxe.drawImage(StudyHub, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 1815/10, 3055/10);
            ctxe.font = '30px w95faregular';
            ctxe.fillStyle = "black";
            ctxe.fillText('Project Name: Study Tablet', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-150, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2021-2022', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-150, (canvas.height/2)-250 + 30);
           
          
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-200 + 245);
            ctxe.fillText('This Was my attempt at creating a simple android tablet for study', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-200 + 245+20);
            ctxe.fillText('origonaly the design called for e-ink but I couldnt get my hands on any displays', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-200 + 245+40);
            ctxe.fillText('Fast enough for the job i needed it to do ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-200 + 245+60);
            ctxe.fillText('the tablet was a writing tablet posed as my first idea for my Design and Tech Project', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-200 + 245+80);
            ctxe.fillText('i got most of the way in before be stuck cause ki cad wouldnt let me do the PCB Traces', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-200 + 245+100);
            break;
            case 5:
                refreshWhiteSpace();
                ctxe.textAlign = "left";
                ctxe.drawImage(ImpostUs, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 6936/24, 9248/24);
                ctxe.font = '30px w95faregular';
                ctxe.fillStyle = "black";
                ctxe.fillText('Project Name: EG01', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-25, (canvas.height/2)-250);
                ctxe.fillText('Year Of Creation: 2022', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-25, (canvas.height/2)-250 + 30);
                
                
                ctxe.font = '20px w95faregular';
                ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245);
                ctxe.fillText('This was For one of my 3 Major Works', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+20);
                ctxe.fillText('This project came to me after watching guitarist setup the guitars', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+40);
                ctxe.fillText('The guitar has built in pedal which is able to be flicked on the guitar', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+60);
                ctxe.fillText('the origonal desing called for a removable pedals but due to me frying the boards', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+80);
                ctxe.fillText('when removing them i decided to remove the feature cause the deadline of the project', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+100);
                ctxe.fillText('was creeping in', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+120);
                ctxe.fillText('in the end the project worked fantastic', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-120 + 245+140);

                break;
              
                    case 8:
                        refreshWhiteSpace();
                        ctxe.textAlign = "left";
                        ctxe.drawImage(DoomLauncher, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 2513/8, 2700/8);
                        ctxe.font = '30px w95faregular';
                    ctxe.fillStyle = "black";
                    ctxe.fillText('Project Name: Doom Launcher', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-20, (canvas.height/2)-250);
                    ctxe.fillText('Year Of Creation: 2022', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-20, (canvas.height/2)-250 + 30);
                    ctxe.fillText('Language Used: Python', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-20, (canvas.height/2)-250 + 60);
                    ctxe.font = '20px w95faregular';
                    ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 330);
                    ctxe.fillText('i Created this during my free time at breaks for fun ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 330+20);
                    ctxe.fillText('it is a doom launcher for GZDoom allowing for easy Muliplayer access', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 330+40);
                    ctxe.fillText('it also has the ability to boot doom mods making it easy for doom modded multiplayer', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 330+60);
                    break;
    }
    }




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
    ctxe.fillText('GPU', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*1);

    
    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*2,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*2,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Xbox', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*2);

    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*3,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*3,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('R2D2', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*3);


    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*4,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*4,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Study Tablet', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*4);

    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*5,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*5,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('EG01', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*5);




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
        ctxe.fillText('GPU', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*1);
        break;
        case 2:
            ctxe.fillStyle =  "#0000a8";
            ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*2,155,30);
            ctxe.font = '20px w95faregular';
            ctxe.fillStyle = "white";
            ctxe.textAlign = "center";
            ctxe.fillText('Xbox', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*2);
        break;
        case 3:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*3,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('R2D2', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*3);
        break;
        case 4:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*4,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Study Tablet', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*4);
        break;
        case 5:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*5,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('EG01', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*5);
        break;
        case 10:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*6,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('FireStar 3D', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*6);
        break;
        case 7:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*7,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('KOTH', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*7);
        break;
        case 8:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*8,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Doom Launcher', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*8);
        break;
        case 9:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*9,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Portfolio Website 2', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*9);
        break;

        case 6:
            ctxe.fillStyle =  "#ff0081";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*13,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Back', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*13);
        break;

    }
}






export function MainmenuHardware(ctx, Canvas)
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
    ctx.fillText('Hardware - Joshua Gessner', 550, 222);
    ctx.strokeStyle = "#818181";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#818181";
    ctx.strokeRect(Canvas.width /2 + sizeX/2 - 175 , Canvas.height/2- (sizey /2),175,sizey );
    ctx.fillRect(Canvas.width /2 + sizeX/2 - 175 , Canvas.height/2- (sizey /2),175,sizey );
    ifonsoftwaremenu = true;
    
     
}