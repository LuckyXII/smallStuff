let first = document.getElementById("first");
first.innerHTML = "lets test this out";

let oList = document.getElementsByTagName("UL")[0];
oList.style.backgroundColor = "#898989";

let prime = document.getElementsByClassName("prime");

for(let i = 0; i < prime.length; i++){
    prime[i].style.fontWeight = "bold";
}


//========================================
let newRow = document.createElement("TR");
let newTd = document.createElement("TD");

document.getElementsByTagName("tbody")[0].appendChild(newRow);

//skriver över element / updaterar inte lastChild?
document.getElementsByTagName("tbody")[0].lastChild.appendChild(newTd).textContent= "11";
document.getElementsByTagName("tbody")[0].lastChild.appendChild(newTd).textContent= "12";
document.getElementsByTagName("tbody")[0].lastChild.appendChild(newTd).textContent= "13";


/*
//Fungerar
document.getElementsByTagName("tbody")[0].lastChild.appendChild(document.createElement("TD");).textContent= "13";

*/

//========================================

let pets = document.getElementsByTagName("OL")[0];
let tamaguchi = document.createElement("LI");
let dog = document.createElement("LI");
pets.appendChild(tamaguchi).textContent = "Tamaguchi";
pets.appendChild(dog).textContent = "doggies";


let dangerFloof = document.createElement("LI");

let test = document.createTextNode("Danger Floof");

dangerFloof.appendChild(test);


//index 0 ersätter inte första elementet utan flyttar det nedåt
pets.replaceChild(dangerFloof, pets.childNodes[1]);




