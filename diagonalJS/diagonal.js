//=======================================================
//GLOBALS

//=======================================================
//CLASSES

//=======================================================
//MAIN
calcTriangle();
//=======================================================
//CALLBACKS

//=======================================================
//FUNCTIONS

function calcTriangle(){
    let box = document.getElementById("box");
    let imageBox = document.getElementById("image2");
    let image2 = imageBox.children[0];


    //l1 and l2 represents the sides of the box
    let l1 = oldPosToNum(getComputedStyle(box).width);
    let l2 = oldPosToNum(getComputedStyle(box).height);
    //Hypotenuse
    let hypo = Math.sqrt(Math.pow(l1,2) + Math.pow(l2,2));
    let v1 = 90;
    let v2 = (Math.acos(l1/hypo) * (100));
    let v3 = 180-v1-v2;


    let oReactAngle = 357.5-v3;
    let oRectHeight = (Math.cos(v3) * l2 * -1);

    oRectHeight = oRectHeight < 0 ? oRectHeight * -1 : oRectHeight;

    imageBox.style.transform = `rotate(${oReactAngle}deg)`;
    imageBox.style.width = `${hypo+10}px`;
    imageBox.style.height = `${oRectHeight+10}px`;
    image2.style.width = `${l1*1.1}px`;
    image2.style.transform = `rotate(${360-oReactAngle}deg)`;

}


function oldPosToNum(str){
    let num = "";
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i]) || str[i] === "."){
            num += str[i];
        }

    }
    return Number(num) ;
}