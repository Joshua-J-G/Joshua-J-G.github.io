var canvas = document.getElementById("Screen");
var ctx = canvas.getContext("2d");

import {Update} from './Joshua-J-G.github.io/blob/main/JS/Intro.js';
import {UpdateSoftware} from './Joshua-J-G.github.io/blob/main/JS/SoftwareMenuScript.js';
import {UpdateHardware} from './Joshua-J-G.github.io/blob/main/JS/HardwareMenuScript.js';
import {UpdateMusic} from './Joshua-J-G.github.io/blob/main/JS/MusicMenuScript.js';

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