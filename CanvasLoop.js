var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");
//fix
import {Update} from './Intro.js';
import {UpdateSoftware} from './SoftwareMenuScript.js';
import {UpdateHardware} from './HardwareMenuScript.js';
import {UpdateMusic} from './MusicMenuScript.js';

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