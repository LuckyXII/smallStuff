



//================================================================================
//Constructors

//Base class
function Shape(){
    "use strict";
    //---------------------------------------------------------------------
    //AREA
    
    this.area = ()=>{
        
        let areaShape;
        //Circle area
        if(this.args===3){
            areaShape = (this.radius*this.radius)*Math.PI;
        }
        
        //Triangle area
        else if(this.args===6){
            let side1 = Math.sqrt(Math.pow(this.x2-this.x1,2)+Math.pow(this.y2-    this.y1,2));
            
            let side2 = Math.sqrt(Math.pow(this.x3-this.x2,2)+Math.pow(this.y3-this.y2,2));
            
            let side3 = Math.sqrt(Math.pow(this.x3-this.x1,2)+Math.pow(this.y3-this.y1,2));
            
            areaShape = Math.sqrt((side1+(side2+side3))*(side3-(side1-side2))*(side3+(side1-side2))*(side1+(side2-side3)))/4;
        }
        
        //Rectangle area
        else if(this.args===4){
            areaShape = (this.x2-this.x1) * (this.y2-this.y1);
        }
        
        //Polygon area
        else if(this.args===1){
            
            let holdValue = 0;
            for(var i = 0; i < this.pos.length-1; i++){
                holdValue += ((this.pos[i].x * this.pos[i+1].y - this.pos[i].y * this.pos[i+1].x)); 
            }
            
            //if negative value convert to positive and return
            areaShape = (holdValue + ((this.pos[i].x * this.pos[0].y) - (this.pos[i].y * this.pos[0].x)))/2 > 0 ? 
            (holdValue + ((this.pos[i].x * this.pos[0].y) - (this.pos[i].y * this.pos[0].x)))/2 :
            -1*(holdValue + ((this.pos[i].x * this.pos[0].y) - (this.pos[i].y * this.pos[0].x)))/2;
        }
        
        return areaShape;
    };
    
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
            
            positions.push({x:this.x1,y:this.y1});
            positions.push({x:this.x2,y:this.y2});
            positions.push({x:this.x3,y:this.y3});
        }
        
        //Rectangle points
        else if(this.args===4){
            positions.push({x:this.x1,y:this.y1});
            positions.push({x:this.x1,y:this.y2});
            positions.push({x:this.x2,y:this.y2});
            positions.push({x:this.x2,y:this.y1});
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
    
    //-------------------------------------------------------------------
    //DistanceTo
    
    this.distanceTo = (obj)=>{
     
        let distance;
        let centerDistance;
        let centerPoint = {};
        //distance to circle
        if(this.args===3){

             centerDistance = Math.sqrt(Math.pow(obj.centerX-this.centerX,2)+Math.pow(obj.centerY-this.centerY,2));
            
            if((centerDistance - this.radius) - obj.radius < 0){
                return 0;
            }
            
            //if negative convert to positive
            distance = (centerDistance - this.radius) - obj.radius >= 0 ?
                (centerDistance - this.radius) - obj.radius :
            -1*((centerDistance - this.radius) - obj.radius);
        }
        
        //distance to rectangle
        else if(this.args===4){
            
            centerPoint.x = obj.x2 - (obj.x2-obj.x1)/2;
            centerPoint.y = obj.y2 - (obj.y2-obj.y1)/2;
            centerPoint.x1 = this.x2 - (this.x2-this.x1)/2;
            centerPoint.y1 = this.y2 - (this.y2-this.y1)/2;
            
            distance = Math.sqrt(Math.pow(centerPoint.x-centerPoint.x1,2)+Math.pow(centerPoint.y-centerPoint.y1,2));
            
        }
    return distance;
    
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
    Shape.call(this);
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



//=============================================================
//MAIN

//create objects
var myCircle = new Circle(20,20,5);
var otherCircle = new Circle(12,20,5);

var myTriangle = new Triangle(30,30,30,40,45,30);
var myRectangle = new Rectangle(50,50,60,65);
var otherRectangle = new Rectangle(70,70,80,70);

let polPoints = [{x:4,y:10},{x:7,y:12},{x:10,y:10},{x:9,y:8},{x:7,y:7},{x:11,y:14}];
var myPolygon = new Polygon(polPoints);

console.log("test1: ",myCircle.boundingBox());
console.log("test2: ",myTriangle.boundingBox());
console.log("test poly: ",myPolygon.boundingBox());
console.log("is poly rect: ", myPolygon.boundingBox() instanceof Rectangle);

//print position
console.log("Points: ",myRectangle.points());
console.log("PolyPoints: ",myPolygon.points());



let fig1 = new Circle(0, 0, 1);  // cirkel vid position (0,0) med radien 1
let fig2 = new Circle(4, 4, 1);
fig2.move(0, -4);  // flytta cirkel till (4,0)
let distance = fig1.distanceTo(fig2);
console.log(distance);
// avståndet ska vara: 4-0-1-1 == 2
// rita en figur för att testa!

console.log('Är fig1 en cirkel? ' + (fig1 instanceof Circle));
