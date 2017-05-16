var input = Number(prompt("Please input a number between 1-10"));
var hiddenValue = 7;

if(input<1 && input>10){
    console.log("Error: wrong input");
}
else if(input===hiddenValue){
    console.log("Congratulations you entered the hidden value");
}

switch(input){
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3");
    break;
  case 4:
    console.log("4");
    break;
  case 5:
    console.log("5");
    break;
  case 6:
    console.log("6");
    break;
  default:
    console.log("you entered something 7 or above becasue I didn't code higher");
    break;
}
