var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");

import {Update} from '/Joshua-J-G.github.io/Intro.js';
import {UpdateSoftware} from '/Joshua-J-G.github.io/SoftwareMenuScript';
import {UpdateHardware} from '/Joshua-J-G.github.io/HardwareMenuScript';
import {UpdateMusic} from '/Joshua-J-G.github.io/MusicMenuScript';

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