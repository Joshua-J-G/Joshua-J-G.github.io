var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");

import {Update} from './Joshua-J-G.github.io/blob/main/JS/Intro.mjs';
import {UpdateSoftware} from './Joshua-J-G.github.io/blob/main/JS/SoftwareMenuScript.mjs';
import {UpdateHardware} from './Joshua-J-G.github.io/blob/main/JS/HardwareMenuScript.mjs';
import {UpdateMusic} from './Joshua-J-G.github.io/blob/main/JS/MusicMenuScript.mjs';

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