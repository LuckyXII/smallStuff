let console = document.getElementById("console");
let log = document.createElement("pre");

log.style.color="lightGreen";
log.style.backgroundColor = "black";


console.appendChild(log);


function logHTML(input){
    let output  = document.createTextNode(input+"\n");
    console.firstChild.appendChild(output);
}

let test = "still testing";
logHTML("test");
logHTML("Which seat should I take? \n ew");
logHTML(test);