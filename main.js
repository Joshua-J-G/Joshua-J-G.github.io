




//fix
//import * as THREE from 'https://threejs.org/build/three.js';

import * as THREE from './three.js';
//import { GLTFLoader } from 'GLTFLoader';
import { GLTFLoader } from './GLTFLoader.js';

var Objects;






//Main Scene
const scene = new THREE.Scene();

const camera1 = new THREE.PerspectiveCamera(40, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);
camera1.position.setZ(3.6);

LoadGLTF();


const pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(0,0,1);
pointlight.intensity = 0.1;
const ambeientlight = new THREE.AmbientLight( 0xffffff );
ambeientlight.position.set(0,0,1);
scene.add(pointlight,ambeientlight);


//Canvas

const ctx =  document.getElementById("Screen").getContext('2d');

const Canvas = new THREE.Texture(ctx.canvas);


































function LoadGLTF()
{
  const loader = new GLTFLoader();
  loader.load( "./src/Models/CRT/port.glb", function ( gltf ) {
    Objects = gltf.scene; 
    Objects.rotation.y = -Math.PI / 2;
    const material = new THREE.MeshStandardMaterial( {map: Canvas, emissive: Canvas, emissiveIntensity: 0.6,
    });
    Objects.getObjectByName('Plane002').material = material;
    console.log(Objects);
    scene.add( Objects );
  
  },  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
}, function ( error ) {
  
    console.error( error );
  
  } );

}




function animate(time)
{
  requestAnimationFrame(animate);
  
    time *= 0.001;

  
  
  if(Canvas)Canvas.needsUpdate = true;
  renderer.render(scene,camera1);
 
  Update();

}

animate();




function loadmaterial()
{


  //if(Object)Objects.getObjectByName('Plane').material = mat;
 
  
}







function Update()
{
  
 
  loadmaterial();
}

var elem = document.querySelector("#bg");

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}