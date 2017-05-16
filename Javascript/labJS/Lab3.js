/*jshint esnext: true, moz: true*/
/*jslint browser:true */

//lab2 code start

//================================================================================
//Constructors

//Base class
function Shape(){
    "use strict";
    //------------------------------------------------------------------
    //POINTS
    

    //Points of shapes
    this.points = ()=>{
        let positions =[];
        //Circle points
        if(this.args===3){
            let pos = {x:this.centerX,y:this.centerY};
            positions.push(pos);
        }
        
        //Triangle points
        else if(this.args===6){
            
            let p1 = {x:this.x1,y:this.y1};
            let p2 = {x:this.x2,y:this.y2};
            let p3 = {x:this.x3,y:this.y3};
            positions.push(p1);
            positions.push(p2);
            positions.push(p3);
        }
        
        //Rectangle points
        else if(this.args===4){
            let p1 = {x:this.x1,y:this.y1};
            let p2 = {x:this.x1,y:this.y2};
            let p3 = {x:this.x2,y:this.y2};
            let p4 = {x:this.x2,y:this.y1};
            positions.push(p1);
            positions.push(p2);
            positions.push(p3);
            positions.push(p4);
        }
        
        //Polygon points
        else if(this.args===1){
            
            positions = this.pos;
        
        }
        
        return positions;
    };
    
    //-----------------------------------------------------------------
    //MOVE
    
    //Move shapes
    this.move = (dx,dy)=>{
        
         //Circle
        if(this.args===3){
           this.centerX+=dx; 
           this.centerY+=dy;
        }
        
        //Triangle
        else if(this.args===6){
            this.x1+=dx;
            this.y1+=dy;
            this.x2+=dx;
            this.y2+=dy;
            this.x3+=dx;
            this.y3+=dy;
        }
        
        //Rectangle
        else if(this.args===4){
            this.x1+=dx;
            this.y1+=dy;
            this.x2+=dx;
            this.y2+=dy;
        }
        
        //Polygon
        else if(this.args===1){
            
            this.pos.forEach((obj)=>{
               obj.x+=dx;
               obj.y+=dy;
           });
          
        }
        
    };
    
   
    //-----------------------------------------------------------------
    //boundingBox
    
    this.boundingBox = ()=>{
          
        let rectangle = {};
        //boundingBox circle
        if(this.args===3){

            rectangle.x1 = this.centerX - this.radius;
            rectangle.y1 = this.centerY - this.radius;
            rectangle.x2 = this.centerX + this.radius;
            rectangle.y2 = this.centerY + this.radius;
        }
        
        //boundingBox rectangle
        else if(this.args===6){
             
            let X = {x1:this.x1, x2:this.x2, x3:this.x3};
            let Y = {y1:this.y1, y2:this.y2, y3:this.y3};
            
            let minX = Infinity, maxX = -Infinity;
            let minY = Infinity, maxY = -Infinity;
            for( let i in X) {
                if( X[i] < minX) {minX = X[i];}
                if( X[i] > maxX) {maxX = X[i];}
            }
            
             for( let i in Y) {
                if( Y[i] < minY) {minY = Y[i];}
                if( Y[i] > maxY) {maxY = Y[i];}
            }
            
            rectangle = {
                x1: minX,
                y1: minY,
                x2: maxX,
                y2: maxY
            };
          
        }
        //boundingBox Polygon
        else if(this.args===1){
            
            let minX = Infinity, maxX = -Infinity;
            let minY = Infinity, maxY = -Infinity;
            
            this.pos.forEach((obj)=>{
                if(obj.x < minX) {minX = obj.x;}
                if(obj.x > maxX) {maxX = obj.x;}
                if(obj.y < minY) {minY = obj.y;}
                if(obj.y > maxY) {maxY = obj.y;}
            });
            
            rectangle = {
                x1: minX,
                y1: minY,
                x2: maxX,
                y2: maxY
            };
        }
        
        return new Rectangle(rectangle.x1,rectangle.y1,rectangle.x2,rectangle.y2);
    };
    
    
}

//******************************************************************************
// Sub-Shapes

//circle
function Circle(centerX, centerY, radius){
    this.args = arguments.length;
    
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
}

//Triangle
function Triangle(x1, y1, x2, y2, x3, y3){
    this.args = arguments.length;
    Shape.call(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
}

//Rectangle
function Rectangle(x1, y1, x2, y2){
    this.args = arguments.length;
    Shape.call(this);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
}

//Polygon
function Polygon(pos){
    this.args = arguments.length;
    Shape.call(this);
    this.pos = pos;
}

//make subclass of Shape
Circle.prototype = Object.create(Shape.prototype);
Triangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype = Object.create(Shape.prototype);
Polygon.prototype = Object.create(Shape.prototype);


//lab2 code end
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//lab3 code

//get elements
var styleMenu = document.getElementById("showStyleMenu");
var colorPicker = document.getElementById("colorPicker");
var pickedColors = document.getElementById("presetColors");
var newColor = document.getElementById("newColor");
var addColor = document.getElementById("addColor");
var rectangle = document.getElementById("rectShape");
var circle = document.getElementById("circleShape");
var triangle = document.getElementById("triShape");
var polygon = document.getElementById("polyShape");
var cancel = document.getElementById("cancelBtn");
var clear = document.getElementById("clearBtn");
var textArea = document.getElementById("JSON");
var expJSON = document.getElementById("expJS");
var impJSON = document.getElementById("impJS");
document.getElementById("instruct").appendChild(document.createTextNode(""));

//Canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

//Shapes
var myRectangle;
var myCircle;
var myTriangle;
var myPolygon;

//Globals
var coordinates = [];
var clicked = 0;
var elementList = [rectangle,circle,triangle,polygon];
var JSONshapes = { "shapes": [] };
var pickedColor = "";


//properties
rectangle.isSelected = false;
circle.isSelected = false;
triangle.isSelected = false;
polygon.isSelected = false;
cancel.cancel = false;


document.getElementById("instruct").textContent = "Welcome!\nOpen Style Menu and start drawing!";

//show and hide style menu
styleMenu.addEventListener("click", ()=> {
    let styleMenu = document.getElementById("styleMenu");
    if(styleMenu.style.display == "none"){
        styleMenu.style.display = "block";
        document.getElementById("showStyleMenu").value="Hide Style Menu";  
    }
    else if(styleMenu.style.display == "block"){
        styleMenu.style.display = "none";
        document.getElementById("showStyleMenu").value="Show Style Menu";
        document.getElementById("instruct").textContent = "";
    }
    else{
        styleMenu.style.display = "block";
        document.getElementById("instruct").textContent = "";
    }
});


//Show information in status bar when mouse over
function statusMessage(element,message){
    
    element.addEventListener("mouseover", ()=> {
        let text = document.createTextNode(message);
        document.getElementById("status").appendChild(text);
    });
    element.addEventListener("mouseout", ()=> {
        let paragraph =  document.getElementById("status");
        paragraph.removeChild(paragraph.firstChild);
    });
}

//instructions when click shape
function instructions(element, message){
    element.addEventListener("click", ()=> {
        let text = document.createTextNode(message);
        document.getElementById("status").appendChild(text);
    });
    element.addEventListener("click", ()=> {
        let paragraph =  document.getElementById("status");
        paragraph.removeChild(paragraph.firstChild);
    });
}


//pick color
let presetColors = document.getElementById("colorPicker");
presetColors.addEventListener("change", ()=> {
    //let colors = document.getElementById("presetColors");
    for(let i = 0; i < pickedColors.childElementCount*2; i++){
        if(pickedColors.childNodes[i].selected === true){
            pickedColor = pickedColors.childNodes[i].value;
        }  
    }
});


//check for valid input otherwise disable addBtn
newColor.addEventListener("keyup", ()=> { 
     "use strict";
    //let newColor = document.getElementById("newColor");
    //let addColor = document.getElementById("addColor");

    if(newColor.value[0] != "#" || (newColor.value.length !== 4 && 
        newColor.value.length !== 7) ){
        addColor.disabled = true;
        newColor.style.background = "#FFF";
        addColor.value ="Invalid Color";
        addColor.style.cursor = "not-allowed";
     }else{
        for(let i = 1; i <= newColor.value.length-1; i++){
            if(isNaN(newColor.value[i])){
                if(newColor.value[i].toUpperCase() < "A" || newColor.value[i].toUpperCase() < "F"){
                    addColor.disabled = true;
                    newColor.style.background = "#FFF";
                    addColor.value ="Invalid Color";
                    addColor.style.cursor = "not-allowed";
                    break;
                }
            }
            else{
                addColor.style.cursor = "pointer";
                addColor.value ="Add Color";
                addColor.disabled = false;
                newColor.style.background = newColor.value;
            }
        }
    }
});

//add new color to selector
addColor.addEventListener("click", ()=> {
     "use strict";
    //let newColor = document.getElementById("newColor");
    //let pickedColors = document.getElementById("presetColors");
    let option = document.createElement("option");
    let customColor = document.createTextNode(newColor.value);
    //let addColor = document.getElementById("addColor");
    option.appendChild(customColor);
    pickedColors.appendChild(option);
    
    newColor.style.background = "#FFF";
    
    //style new color
    pickedColors.lastChild.value = newColor.value;
    pickedColors.lastChild.style.color = newColor.value;
    newColor.value="";
    addColor.disabled = true;
    pickedColors.lastChild.style.fontWeight ="bold";
});


//if selected flag and empty coords
function selectElement(element){
    element.addEventListener("click", ()=> {
        
        //cancel drawing polygon
        if(element.isSelected === true && element.defaultValue === "Polygon"){
    
            myPolygon = new Polygon(coordinates);
             //store JSON
            JSONshapes.shapes.push({"shape":"Polygon","lineColor":pickedColor,"points":coordinates});
        }else{
            //make true if shape is pressed
            element.isSelected = true;
            //unselect other shapes
            for(let i = 0; i < elementList.length; i++){
                if(elementList[i] !== element){
                    elementList[i].isSelected = false;
                } 
            }
        }
        
        //empty coords
        coordinates = [];
        clicked = 0;
        
    });
}


//print coordinates in log
canvas.addEventListener("mouseover", ()=> {
    
    document.getElementById("status").appendChild(document.createTextNode(""));
    canvas.addEventListener("mousemove", (event)=> {
       
        let rect = event.target.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        let printPos = "x: " + Math.floor(x) + " y: " + Math.floor(y);
        document.getElementById("status").textContent = printPos;
        
        var check;
        try{
            check = elementList.find((shape)=>{return shape.isSelected === true;}).isSelected;
        }catch(e){}
               
        if(clicked === 0 && check){
            document.getElementById("instruct").textContent = "Select a startpoint or change shape to draw";
        }
        else if(clicked === 1){
            document.getElementById("instruct").textContent = "Add next point";
        }
      
    });
});
canvas.addEventListener("mouseout", ()=> {
    let paragraph =  document.getElementById("status");
    paragraph.removeChild(paragraph.firstChild);     
});


//create shapes and add to JSONshapes
 canvas.addEventListener("click", (event)=> {
    "use strict";
     
    try{ 
        let check = elementList.find((shape)=>{return shape.isSelected === true;}).isSelected;
        if(check === true){     

            clicked++;
            let rect = event.target.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            coordinates.push({x:x,y:y});
    
            if(clicked === 1){
                
                context.beginPath();
                context.moveTo(x,y);
            }
      
            if(rectangle.isSelected && clicked === 2){
                
                myRectangle = new Rectangle(coordinates[0].x,coordinates[0].y,coordinates[1].x,coordinates[1].y);
                
                
                //store JSON
                JSONshapes.shapes.push({"shape":"Rectangle","lineColor":pickedColor,
                                 "startX": coordinates[0].x,"startY": coordinates[0].y,
                                 "x1":myRectangle.points()[1].x,"y1":myRectangle.points()[1].y,
                                 "x2":myRectangle.points()[2].x,"y2":myRectangle.points()[2].y,
                                 "x3":myRectangle.points()[3].x,"y3":myRectangle.points()[3].y,
                                 });
                
                clicked = 0;
                coordinates = [];
                
            }
            else if(circle.isSelected && clicked === 2){
                myCircle = new Circle(coordinates[0].x, coordinates[0].y,
                              Math.sqrt(Math.pow(coordinates[1].x-coordinates[0].x,2)+Math.pow(coordinates[1].y-coordinates[0].y,2))); 
               
               
                //store JSON
                JSONshapes.shapes.push({"shape":"Circle","lineColor":pickedColor,
                                 "centerX":myCircle.centerX,"centerY":myCircle.centerY, "radius":myCircle.radius,
                                 "startAngle":0, "endAngle":360 });
                clicked = 0;
                coordinates = [];
            }
            else if(triangle.isSelected && clicked === 3){
                myTriangle = new Triangle(coordinates[0].x, coordinates[0].y,coordinates[1].x,                                  coordinates[1].y,coordinates[2].x,coordinates[2].y);
                
                
                //store JSON
                JSONshapes.shapes.push({"shape":"Triangle","lineColor":pickedColor,
                                 "startX": coordinates[0].x,"startY": coordinates[0].y,
                                 "x1":myTriangle.points()[1].x,"y1":myTriangle.points()[1].y,
                                 "x2":myTriangle.points()[2].x,"y2":myTriangle.points()[2].y});
                
                clicked = 0;
                coordinates = [];
                
            }
            /*else if(polygon.isSelected){
                context.strokeStyle = pickedColor;
                context.lineTo(coordinates[clicked-1].x,coordinates[clicked-1].y);
                context.stroke();
            }*/
        }
    }catch(exception){
        console.log(exception);
    }
     
});


//Ghostlines: draw lines and clear canvas
canvas.addEventListener("mouseover", ()=> {
    canvas.addEventListener("mousemove", ()=> {
     "use strict";

        if(clicked >= 1){
            
            if(pickedColor === ""){
                pickedColor = "#000";
            }

            let rect = event.target.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            let x1 = coordinates[0].x;
            let y1 = coordinates[0].y;

            context.beginPath();
            context.moveTo(x1,y1);
            
            if(rectangle.isSelected){
                context.clearRect(0,0,500,500);
                context.strokeStyle = pickedColor;
                context.lineTo(x1,y);
                context.lineTo(x,y);
                context.lineTo(x,y1);
                context.closePath();
                context.stroke();
            }
            
            else if(circle.isSelected){
                context.clearRect(0,0,500,500);
                context.strokeStyle = pickedColor;
                context.arc(x1,y1,Math.sqrt(Math.pow(x-x1,2)+Math.pow(y-y1,2)),0,360);     
                context.stroke();  
            }
            else if(triangle.isSelected){
                context.clearRect(0,0,500,500);
                context.strokeStyle = pickedColor;
                context.lineTo(x,y);
                
                if(clicked === 2){
                    context.lineTo(x1,y1);
                    context.lineTo(coordinates[1].x,coordinates[1].y);
                    context.lineTo(x,y);
                    context.closePath(); 
                }
                context.stroke();

            }
            else if(polygon.isSelected){
                context.clearRect(0,0,500,500);
                context.strokeStyle = pickedColor;
            }
   
        }
    });
});

//redraw shapes
function reDraw(){
    
    
    
    for(let i = 0; i < JSONshapes.shapes.length; i++){

        if(JSONshapes.shapes[i].shape === "Rectangle"){
            
            context.beginPath();
            context.strokeStyle = JSONshapes.shapes[i].lineColor;
            context.moveTo(JSONshapes.shapes[i].startX,JSONshapes.shapes[i].startY);
            context.lineTo(JSONshapes.shapes[i].x1,JSONshapes.shapes[i].y1);
            context.lineTo(JSONshapes.shapes[i].x2,JSONshapes.shapes[i].y2);
            context.lineTo(JSONshapes.shapes[i].x3,JSONshapes.shapes[i].y3);
            context.closePath();
            context.stroke();
           
        }
        else if(JSONshapes.shapes[i].shape === "Circle"){
            
            context.beginPath();
            context.strokeStyle = JSONshapes.shapes[i].lineColor; context.arc(JSONshapes.shapes[i].centerX,JSONshapes.shapes[i].centerY,JSONshapes.shapes[i].radius,0,360);     
            context.stroke();
            
        }
        else if(JSONshapes.shapes[i].shape === "Triangle"){
            context.beginPath();
            context.strokeStyle = JSONshapes.shapes[i].lineColor;
            context.lineTo(JSONshapes.shapes[i].startX,JSONshapes.shapes[i].startY);
            context.lineTo(JSONshapes.shapes[i].x1,JSONshapes.shapes[i].y1);
            context.lineTo(JSONshapes.shapes[i].x2,JSONshapes.shapes[i].y2);
           
            context.closePath();
            context.stroke();
        }
        else if(JSONshapes.shapes[i].shape === "Polygon"){
            context.beginPath();
            context.strokeStyle = JSONshapes.shapes[i].lineColor;
            
            for(let j = 0; j < JSONshapes.shapes[i].points.length; j++){
                context.lineTo(JSONshapes.shapes[i].points[j].x,JSONshapes.shapes[i].points[j].y);
                
            }
            
            context.closePath();
            context.stroke();
        }
       
    }
}


//stop Drawing
cancel.addEventListener("click", ()=> {
     context.closePath();
     context.stroke();
     clicked = 0;
     coordinates = [];
});

//clear Canvas
clear.addEventListener("click", ()=> {
    context.clearRect(0,0,500,500);
    JSONshapes.shapes = [];
    clicked = 0;
    coordinates = [];
    textArea.textContent = "";
});

//export JSON
expJSON.addEventListener("click", ()=> {
    
    let string = JSON.stringify(JSONshapes.shapes);
    let JSONtext = document.createTextNode(string);
    if(JSONtext.length > 5){
        textArea.appendChild(JSONtext);
        JSONshapes.shapes = "";
    }
});


     


//=============================================================
//MAIN

statusMessage(styleMenu,"Show and hide the style menu");
statusMessage(colorPicker,"Choose color");
statusMessage(newColor,"Add new color");
statusMessage(addColor,"Add selected color to picker");
statusMessage(rectangle, "Draw rectangle");
statusMessage(circle, "Draw circle");
statusMessage(triangle, "Draw triangle");
statusMessage(polygon, "Draw polygon");
statusMessage(cancel,"Cancel draw");
statusMessage(clear,"Clear Canvas");
statusMessage(expJSON,"Export shapes in JSON format");
statusMessage(impJSON,"Import JSON (under construction)\nmeanwhile listen to this joke:\n'Why do Java programmers wear glasses?':\n'Because they can't C#'");

selectElement(rectangle);
selectElement(circle);
selectElement(triangle);
selectElement(polygon);


let refresh = setInterval(()=>{
    
    
    instructions(rectangle, "Click a starting point on the canvas");
    instructions(triangle,  "Click a starting point on the canvas");
    instructions(circle,  "Click a starting point on the canvas");
    instructions(polygon,  "Click a starting point on the canvas");


    try{
      
        reDraw();
           
            
        
    }catch(exception){console.log(exception);}

   
},30);




 