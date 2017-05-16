//===================================================================================
// 5.1

let consoleHTML = document.getElementById("consoleLog");
let logHTML = document.createElement("pre");

logHTML.style.color="lightGreen";
logHTML.style.backgroundColor = "black";

consoleHTML.appendChild(logHTML);


function logOutputHTML(input, ...args){
    let output  = document.createTextNode(input+args+"\n");
    consoleHTML.firstChild.appendChild(output);
}


let buttonElement = document.getElementById("btn");

buttonElement.addEventListener("click",(event)=>{ 
    logOutputHTML("Event type:",event.type + "\nEvent target:" +event.target);
});

//=====================================================================================
//5.2



let start = document.getElementById("start");
let stop = document.getElementById("stop");



start.addEventListener("click", (event)=>{
   document.getElementById("stop").disabled =true;
    
    if(document.getElementById("stop").disabled === true){
        document.getElementById("stop").disabled = false;
        document.getElementById("start").disabled = true;
    }
});

stop.addEventListener("click", (event)=>{
   document.getElementById("start").disabled = true;
    
    if(document.getElementById("start").disabled === true){
        document.getElementById("start").disabled = false;
        document.getElementById("stop").disabled = true;
    }
});



//==================================================================================
//5.3

let tabs = document.getElementsByClassName("tabs");
let btnTabs = document.getElementsByClassName("btnTabs");


for(let i = 0; i < tabs.length; i++){
    tabs[i].style.border = "1px solid black";
    tabs[i].style.width = "90px";
    tabs[i].style.height = "90px";
    btnTabs[i].style.display = "inline-block";
    tabs[i].style.display = "none";
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

tab1.style.backgroundColor = "cornsilk";
tab2.style.backgroundColor = "red";
tab3.style.backgroundColor = "green";

btn1.addEventListener("click", (event)=>{
    
     document.getElementById("tab1").style.display = "block";
   
    if(document.getElementById("tab1").style.display === "block"){
        document.getElementById("tab2").style.display="none";
        document.getElementById("tab3").style.display="none";
    }
    
    
});

btn2.addEventListener("click", (event)=>{
    
     document.getElementById("tab2").style.display = "block";
    
    if(document.getElementById("tab2").style.display === "block"){
        document.getElementById("tab1").style.display="none";
        document.getElementById("tab3").style.display="none";
    }
    
});

btn3.addEventListener("click", (event)=>{
    
     document.getElementById("tab3").style.display = "block";
    
    
    if(document.getElementById("tab3").style.display === "block"){
        document.getElementById("tab2").style.display="none";
        document.getElementById("tab1").style.display="none";
    }
    
});

///================================================================================================
//5.4


let container = document.getElementById("changeColor");

container.style.backgroundColor = "#797979";
container.style.display = "block";
container.style.width = "200px";
container.style.heght = "100px";




let hexColor = container.style.backgroundColor;


//convert RGB to HEX
function hexValue(rgbStr){
    
    let red = "";
    let blue = "";
    let green = "";
    
    //go through stored RGB String e.g  "rgb(11, 233, 155)"
    for(let i = 0, count = 0; i < rgbStr.length; i++){
        
        //ignore NaN characters
        if(!isNaN(rgbStr[i])){
            
            //fill nect color when encountered SPACE
            if(rgbStr[i] === " "){
                count++;
            }
            
            if(count === 0){
                red += rgbStr[i]; 
            }
            else if(count === 1){
                green += rgbStr[i];
            }
            else if(count === 2){
                blue += rgbStr[i];
            }
            
        }
        if(count > 2)
            break;
    }
    
    //Bitwise operator for converting Decimal to Hexadecimal
    function rgbToHex() {
        return "#" + ((1 << 24) + (Number(red) << 16) + (Number(green) << 8) + Number(blue)).toString(16).slice(1);
    }
    
    //return value in HEX format
    let value = rgbToHex();
    return value.toLocaleUpperCase();
    
}


let hex = document.createTextNode(hexValue(hexColor));
let paragraph = document.createElement("p");

paragraph.style.height ="50px";

paragraph.appendChild(hex);
paragraph.setAttribute("id","hexColor");
container.appendChild(paragraph);

container.addEventListener('mouseover', (event)=> {
    
    document.getElementById("changeColor").addEventListener('mousemove', (event)=> {
        
        let randomRGB = String("rgb("+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random())+", "+Math.floor(255*Math.random()));
        let container = document.getElementById("changeColor");
        
        console.log(randomRGB);
          container.style.backgroundColor = randomRGB; 
          document.getElementById("hexColor").firstChild.textContent = hexValue(container.style.backgroundColor);
    });
   
});


//==========================================================================
//5.5
























    
