var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");
//fix
import {Update} from '/JS/Intro.js';
import {UpdateSoftware} from '/JS/SoftwareMenuScript.js';
import {UpdateHardware} from '/JS/HardwareMenuScript.js';
import {UpdateMusic} from '/JS/MusicMenuScript.js';

function update()
{
   // ctx.clearRect(0,0,canvas.width , canvas.height);
    Update();
    UpdateSoftware();
    UpdateHardware();
    UpdateMusic();
    requestAnimationFrame(update);
}
update();