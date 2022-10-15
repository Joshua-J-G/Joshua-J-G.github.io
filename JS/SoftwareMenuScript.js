//fix

var sizeX = 900;
var sizey = 700;

import {LoadMenu} from "/JS/Intro.js";

var enterkey = new Image();
enterkey.src = "/src/Images/Enter.png";

var ArrowKeys = new Image();
ArrowKeys.src = "/src/Images/ArrowKeys.png";

//Software Images
var Central2D = new Image();
Central2D.src = "/src/Images/Software/Software1 Central 2D.png";

var FightBot = new Image();
FightBot.src = "/src/Images/Software/Software2 FightBot.png";

var uniWeb = new Image();
uniWeb.src = "/src/Images/Software/Software3 UniWeb.png";

var StudyHub = new Image();
StudyHub.src = "/src/Images/Software/Software4 StudyHub.png";


var ImpostUs = new Image();
ImpostUs.src = "/src/Images/Software/Software5 FirstOnlineMultiplayer.png";

var Koth = new Image();
Koth.src = "./src/Images/Software/Software6 KOTH.png";

var FireStar = new Image();
FireStar.src = "/src/Images/Software/Software7 FireStar.png";

var DoomLauncher = new Image();
DoomLauncher.src = "/src/Images/Software/Software8 DoomLauncher.png";

var GameReel = new Image();
GameReel.src = "/src/Images/Software/Software9 GameReel.png";

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
        case 1:
            window.open("https://github.com/Joshua-J-G/Central-2D");
        break;
        case 2:
            window.open("https://github.com/Joshua-J-G/Fight-Bot");
        break;
        case 3:
            window.open("https://github.com/Joshua-J-G/Uni-Website");
        break;
        case 4:
            window.open("https://github.com/Joshua-J-G/StudyHub");
        break;
        case 6:
            window.open("https://github.com/Joshua-J-G/FireStar-3D");
        break;


        case 10:
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
        if(selectedProject >= 10)
        {
            selectedProject = 10;
        }
    }
    else if(event.keyCode == 13)
    {
      TakeToWebSight();
    }
  }
  });



export function UpdateSoftware()
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
            ctxe.drawImage(Central2D, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 962/3, 752/3);
            ctxe.fillStyle = "black";
            ctxe.textAlign = "left";
            ctxe.font = '30px w95faregular';
            ctxe.fillText('Project Name: Central 2D', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 ), (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2017', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 ), (canvas.height/2)-250 + 30);
            ctxe.fillText('Language Used: Java', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 ), (canvas.height/2)-250 + 60);
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245);
            ctxe.fillText('Central 2D was my first attempt at createing a 2D Game Engine in Java.', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+20);
            ctxe.fillText('This was Created in Year 7 And Included:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+40);
            ctxe.fillText('Sprite Render', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+60);
            ctxe.fillText('2D Light System', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+80);
            ctxe.fillText('Collision Detection', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+100);
            ctxe.fillText('Audio Playback', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+120);
            ctxe.fillText('Camera System', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+140);
            ctxe.fillText('And Simple Shooting', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+160);
            ctxe.fillText('this lead me to making some small java mods for minectaft which added decrotive blocks', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+200);
            ctxe.fillText('and small life improvements through 2017 and the start of 2018', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+220);
        break;
        case 2:
            refreshWhiteSpace();
            ctxe.drawImage(FightBot, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 1024/4, 1024/4);
            ctxe.fillStyle = "black";
            ctxe.textAlign = "left";
            ctxe.font = '30px w95faregular';
            ctxe.fillText('Project Name: Fight Bot', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-75, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2020', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-75, (canvas.height/2)-250 + 30);
            ctxe.fillText('Language Used: JavaScript', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-75, (canvas.height/2)-250 + 60);
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245);
            ctxe.fillText('This was a Discord bot that I Created for Fun', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+20);
            ctxe.fillText('The bot was a turn Based shooter where each user would get into a dual and fight for xp', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+40);
            ctxe.fillText('This project was inspied by a previous project of mine name red vs blu a tf2 inspired', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+60);
            ctxe.fillText('tournament and xp collecter for discord', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+80);
            ctxe.fillText('the bot was fully featured with a shop, ranking system, help system and acount creation', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+120);
            ctxe.fillText('for new Users', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+140);
        break;
        case 3:
            refreshWhiteSpace();
            ctxe.textAlign = "left";
            ctxe.drawImage(uniWeb, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 2560/8, 1400/8);
            ctxe.font = '30px w95faregular';
            ctxe.fillStyle = "black";
            ctxe.fillText('Project Name: Uni Website', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2020', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 30);
            ctxe.fillText('Language Used: Html, CSS', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 60);
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245);
            ctxe.fillText('This was my first attempt At making a University Entry Website', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+20);
            ctxe.fillText('it was created in year 10 and was a pretty good source to learn from', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+40);
            ctxe.fillText('This was also going to act like my study hub where i would add notes from school', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+60);
            ctxe.fillText('This lead me to creating 3 different Aplication Websight each one improved from the last', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+80);
        break;
        case 4:
            refreshWhiteSpace();
            ctxe.textAlign = "left";
            ctxe.drawImage(StudyHub, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 2560/8, 1400/8);
            ctxe.font = '30px w95faregular';
            ctxe.fillStyle = "black";
            ctxe.fillText('Project Name: Study Hub', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250);
            ctxe.fillText('Year Of Creation: 2020', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 30);
            ctxe.fillText('Language Used: Html, CSS,', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 60);
            ctxe.fillText('Javascript', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 90);
            ctxe.font = '20px w95faregular';
            ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245);
            ctxe.fillText('This Was my study hub i created for School', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+20);
            ctxe.fillText('on all of my books i had a NFC sticker that linked you to this website where i could', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+40);
            ctxe.fillText('write down notes and other things in a neat way', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+60);
            ctxe.fillText('the website had notes for drama, english, DT, Music, SOR And Math', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+80);
            ctxe.fillText('this was made at the end of Year 10 for Year 11', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+100);
            break;
            case 5:
                refreshWhiteSpace();
                ctxe.textAlign = "left";
                ctxe.drawImage(ImpostUs, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 2560/8, 1400/8);
                ctxe.font = '30px w95faregular';
                ctxe.fillStyle = "black";
                ctxe.fillText('Project Name: ImpostUs', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250);
                ctxe.fillText('Year Of Creation: 2020', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 30);
                ctxe.fillText('Language Used: C#', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 60);
                
                ctxe.font = '20px w95faregular';
                ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245);
                ctxe.fillText('This was made for a school project ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+20);
                ctxe.fillText('This project was not my first video game in unity but my first video game using', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+40);
                ctxe.fillText('online multiplayer', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+60);
                ctxe.fillText('this was the thrid game i made for that assignment the first game was Inspired', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+80);
                ctxe.fillText('By SCP and got pretty far in development before my macbook died deleting most of', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+100);
                ctxe.fillText('my work, the second game was a puzzle game which used lasers but after i tested it', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+120);
                ctxe.fillText('I found it wasnt fun, and so with 3 days left I made this', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+140);
                ctxe.fillText('The game is a 4 player fps shooter created using the Mirror System For Unity', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+160);
                break;
                case 6:
                    refreshWhiteSpace();
                    ctxe.textAlign = "left";
                    ctxe.drawImage(FireStar, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 1006/3, 759/3);
                    ctxe.font = '30px w95faregular';
                    ctxe.fillStyle = "black";
                    ctxe.fillText('Project Name: FireStar 3D', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250);
                    ctxe.fillText('Year Of Creation: 2020', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 30);
                    ctxe.fillText('Language Used: C++', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 60);
                    
                    ctxe.font = '20px w95faregular';
                    ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245);
                    ctxe.fillText('This is a Simple 3D Game Engine', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+20);
                    ctxe.fillText('This is a Game Engine That Includes Creating simple 3D objects, Simple Lights, Camera', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+40);
                    ctxe.fillText('The Engine uses old D3D11 Systems to create an image and uses standard concepts such', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+60);
                    ctxe.fillText('as a SwapChain and ScreenBuffer', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+80);
                    ctxe.fillText('at one point this game engine was more advance and had hit the point where i was ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+100);
                    ctxe.fillText('implmenting 3d audio using openAl but that version has been lost this was in', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+120);
                    ctxe.fillText('my backups folder', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-250 + 245+140);
                    break;



                case 7:
                    refreshWhiteSpace();
                    ctxe.textAlign = "left";
                    ctxe.drawImage(Koth, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 2560/8, 1400/8);
                    ctxe.font = '30px w95faregular';
                    ctxe.fillStyle = "black";
                    ctxe.fillText('Project Name: KOTH', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250);
                    ctxe.fillText('Year Of Creation: 2021', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 30);
                    ctxe.fillText('Language Used: C#', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+10, (canvas.height/2)-250 + 60);
                    
                    ctxe.font = '20px w95faregular';
                    ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245);
                    ctxe.fillText('This was a successor to my school project', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+20);
                    ctxe.fillText('This project was my second online multiplayer game this time i decided to write the', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+40);
                    ctxe.fillText('full online multiplayer system, from opening ports to the client communications', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+60);
                    ctxe.fillText('finally I toped it off with server reconsiation and Client side prediction', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+80);
                    ctxe.fillText('i did this after reading a intressting document on how valve implmented these', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+100);
                    ctxe.fillText('concepts in their games ', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-320 + 245+120);
                   
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
                    case 9:
                        refreshWhiteSpace();
                        ctxe.textAlign = "left";
                        ctxe.drawImage(GameReel, (canvas.width/2)-962/3 - 110, (canvas.height/2)-280, 2560/7, 1400/7);
                        ctxe.font = '30px w95faregular';
                    ctxe.fillStyle = "black";
                    ctxe.fillText('Project Name: GameReel', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+30, (canvas.height/2)-250);
                    ctxe.fillText('Year Of Creation: 2022', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+30, (canvas.height/2)-250 + 30);
                    ctxe.fillText('Language Used: C#', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )+30, (canvas.height/2)-250 + 60);
                    ctxe.font = '20px w95faregular';
                    ctxe.fillText('Description:', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-380 + 330);
                    ctxe.fillText('This is a Project Game Reel', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-380 + 330+20);
                    ctxe.fillText('this is suppost to be a Collection of demos which show my skills of in modeling,', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-380 + 330+40);
                    ctxe.fillText('lighting, music, sound and code but sadly i didnt get it finnished in time', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-380 + 330+60);
                    ctxe.fillText('as i needed to start Studing for hsc meaning on 2 of 4 demos work even though', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-380 + 330+80);
                    ctxe.fillText('there is data for another 5 demos some being tower defences or space shooters', (canvas.width /2 - (sizeX/2) + (10 + sizeX - 20 - 175)/2 )-340, (canvas.height/2)-380 + 330+100);
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
    ctxe.fillText('Central 2D', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*1);

    
    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*2,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*2,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Fight Bot', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*2);

    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*3,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*3,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Uni Website 1', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*3);


    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*4,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*4,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('StudyHub', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*4);

    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*5,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*5,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Impost Us', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*5);

    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*6,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*6,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('FireStar 3D', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*6);

    
    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*7,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*7,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('KOTH', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*7);


    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*8,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*8,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Doom Launcher', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*8);

    
    ctxe.fillStyle =  "black";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165+1, 200+1+50*9,155,30);
    ctxe.fillStyle =  "#c3c3c3";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*9,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "black";
    ctxe.textAlign = "center";
    ctxe.fillText('Game Reel', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*9);


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
        ctxe.fillText('Central 2D', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*1);
        break;
        case 2:
            ctxe.fillStyle =  "#0000a8";
            ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*2,155,30);
            ctxe.font = '20px w95faregular';
            ctxe.fillStyle = "white";
            ctxe.textAlign = "center";
            ctxe.fillText('Fight Bot', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*2);
        break;
        case 3:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*3,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Uni Website 1', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*3);
        break;
        case 4:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*4,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('StudyHub', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*4);
        break;
        case 5:
            ctxe.fillStyle =  "#0000a8";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*5,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Impost Us', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*5);
        break;
        case 6:
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
    ctxe.fillText('Game Reel', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*9);
        break;

        case 10:
            ctxe.fillStyle =  "#ff0081";
    ctxe.fillRect(canvas.width /2 + sizeX/2 - 165,200+50*13,155,30);
    ctxe.font = '20px w95faregular';
    ctxe.fillStyle = "white";
    ctxe.textAlign = "center";
    ctxe.fillText('Back', canvas.width /2 + sizeX/2 - 165 +155/2,220+50*13);
        break;

    }
}






export function MainmenuSoftware(ctx, Canvas)
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
    ctx.fillText('Software - Joshua Gessner', 550, 222);
    ctx.strokeStyle = "#818181";
    ctx.lineWidth = 1;
    ctx.fillStyle = "#818181";
    ctx.strokeRect(Canvas.width /2 + sizeX/2 - 175 , Canvas.height/2- (sizey /2),175,sizey );
    ctx.fillRect(Canvas.width /2 + sizeX/2 - 175 , Canvas.height/2- (sizey /2),175,sizey );
    ifonsoftwaremenu = true;
    
     
}