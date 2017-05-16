
var choice  = Number(prompt("To view a exercise enter it's number of occurance e.g chapter2 exercise 1 = 2.1"));
var stop=false;
do{
    
    switch(choice){
        
        case(0):
            stop=true;
            break;

        case(2.1):
            //C2E1


            var symb = "";
            for(var i=0; i<8; i++){
               console.log(symb+="#");
            }

           break;

        case(2.2):
            //C2E2-3
            var size= Number(prompt("Enter size of grid: "));
            var i =0;
            var symb ="";
            while(i<size){

              if(i%2===0){
                for(var j=0; j<(size/2); j++){
                    symb+="# ";        
                }
              }
               else{
                  for(var y=0; y<(size/2); y++){
                      symb+=" #";
                   }
                }

                console.log(symb);
                symb="";
              i++;
            }
            break;
        default:
            prompt("Not an exercise");
            break;
    }
    
    if(choice !== 0){
        choice = Number(prompt("Enter Number: \n(0 to exit.)"));    
    }
    
}while(!stop);

