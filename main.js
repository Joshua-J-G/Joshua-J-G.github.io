
//fix
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.117.1/build/three.module.js';
import { GLTFLoader } from 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';


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

LoadGLTF('./src/Models/CRT/port.glb',0);


const pointlight = new THREE.PointLight(0xffffff);
pointlight.position.set(0,0,1);
pointlight.intensity = 0.1;
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointlight,ambientLight);


//Canvas

const ctx =  document.getElementById("Screen").getContext('2d');

const Canvas = new THREE.Texture(ctx.canvas);


































function LoadGLTF(Location, id)
{
  const loader = new GLTFLoader();
  loader.load( Location, function ( gltf ) {
    Objects = gltf.scene; 
    Objects.rotation.y = -Math.PI / 2;
    const material = new THREE.MeshStandardMaterial( {map: Canvas, emissive: Canvas, emissiveIntensity: 0.6,
    });
    Objects.getObjectByName('Plane002').material = material;
    console.log(Objects);
    scene.add( Objects );
  
  }, undefined, function ( error ) {
  
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