var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");

import {Update} from './Intro.js';
import {UpdateSoftware} from './SoftwareMenuScript';
import {UpdateHardware} from './HardwareMenuScript';
import {UpdateMusic} from './MusicMenuScript';

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