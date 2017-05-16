/*jshint esnext: true, moz: true*/
/*jslint browser:true */


var xAngle = 0;
var yAngle = 0;
var html = document.getElementsByTagName("html");
var cube = document.getElementById("cube");
var boundingBox = document.getElementById("boundingBox");
var clickedPos = {"x": 0, "y": 0};
var currentPos = {"x": 0, "y": 0};
var mouseIsDown = false;



//======================================================================================
//LISTENERS

// separate and grow
cube.addEventListener("mouseover", increasCubeSize);
//retract and shrink
cube.addEventListener("mouseout", decreaseCubeSize);
//Control with keys
document.addEventListener('keydown', rotateWithKeys);
//get clickposition
boundingBox.addEventListener("mousedown", posAtClick);
//stop storing positions
html[0].addEventListener("mouseup", ()=> {
    mouseIsDown = false;
});




//=======================================================================================
//FUNCTIONS

//Increas size of cube
function increasCubeSize(){
        
   for(let i = 0; i < 6; i++){
    
       switch(i){
           case 0:
                cube.children[i].style.webkitTransform = "rotateX(90deg) translateZ(240px)";   
               break;       
           case 1:
               cube.children[i].style.webkitTransform = "translateZ(240px)";
               break;
           case 2:
               cube.children[i].style.webkitTransform = "rotateY(90deg) translateZ(240px)";
               break;
           case 3:
               cube.children[i].style.webkitTransform = "rotateY(180deg) translateZ(240px)";
               break;
           case 4:
               cube.children[i].style.webkitTransform = "rotateY(-90deg) translateZ(240px)";
               break;
           case 5:
               cube.children[i].style.webkitTransform = "rotateX(-90deg) translateZ(240px) rotate(180deg)";
               break;
           default:
               console.log("Error switch");
               break;
       }
   }
}

//decreas size of cube
function decreaseCubeSize(){
    
    for(let i = 0; i < 6; i++){
         switch(i){
               case 0:
                    cube.children[i].style.webkitTransform = " rotateX(90deg) translateZ(200px)";   
                   break;
               case 1:
                   cube.children[i].style.webkitTransform = "translateZ(200px)";
                   break;
               case 2:
                   cube.children[i].style.webkitTransform = " rotateY(90deg) translateZ(200px)";
                   break;
               case 3:
                   cube.children[i].style.webkitTransform = " rotateY(180deg) translateZ(200px)";
                   break;
               case 4:
                   cube.children[i].style.webkitTransform = " rotateY(-90deg) translateZ(200px)";
                   break;
               case 5:
                   cube.children[i].style.webkitTransform = " rotateX(-90deg) translateZ(200px) rotate(180deg)";
                   break;
               default:
                   console.log("Error switch");
                   break;
           }
    }
}


//determin cube rotation <------- RETHINK
function rotateCube(){
    if(Math.floor(clickedPos.x - currentPos.x) % 10 === 0 && clickedPos.x > currentPos.x){
         yAngle -= 90;
        console.log("1 true");
    }
    else if(Math.floor(clickedPos.x - currentPos.x) % 10 === 0 && clickedPos.x < currentPos.x){
        yAngle += 90;
          console.log("2 true");
    }
    
    /*
    if(Math.floor(clickedPos.y - currentPos.y) % 10 === 0 && clickedPos.y > currentPos.y){
        xAngle += 5;
          console.log("3 true");
    }
    else if(Math.floor(clickedPos.y - currentPos.y) % 10 === 0 && clickedPos.y < currentPos.y){
         xAngle -= 5;
          console.log("4 true");
    }
    */
    cube.style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}


//EVENT: mousemOve, get mouse position on screen <------------- CURRENTPOS GETS UPDATED EVEN THOU BTN ISNT HELD
function mousePos(event) {

    let rect = html[0].getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    
    if(mouseIsDown){
        currentPos.x = x;
        currentPos.y = y;
        rotateCube();
    }

    //console.log("currentPosX: " + currentPos.x + " CurrentPosY: " + currentPos.y);
}


//EVENT:mousedown, mouse position at click
function posAtClick(event) {
    
    mouseIsDown = true;
    
    let rect = html[0].getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    clickedPos.x = x;
    clickedPos.y = y;
    
    html[0].addEventListener("mousemove", mousePos);
 
    
    //console.log("ClickedPosX: " + currentPos.x + " ClickedPosY: " + currentPos.y);
}


//Control with keys
function rotateWithKeys(e) {
  switch(e.keyCode) {

    case 37: // left
      yAngle -= 90;
      break;

    case 38: // up
      xAngle += 90;
      break;

    case 39: // right
      yAngle += 90;
      break;

    case 40: // down
      xAngle -= 90;
      break;
  }

  cube.style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
}




