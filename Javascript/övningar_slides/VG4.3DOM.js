function addToHtmlList(listID, text){
    
    let parent = document.getElementById(listID);
    
    let listItem = document.createElement("li");
    let listContent = document.createTextNode(text);
    
    listItem.appendChild(listContent);
    
    parent.appendChild(listItem);
    
}

addToHtmlList("listId", "hello");



 function reverseHtmlList(listID){
     
     //UL list 
     let list = document.getElementById(listID);
     //LI elements
     let listItem = list.getElementsByTagName("li");
     
     //static length of list
     let length = list.childElementCount;
     
     //new static array from list
     let newList = Array.from(listItem);

     //reverse array
     for(let i = 0, j = length-1; i < length-1; i++, j--){
         let temp = newList[i];
         newList[i] = newList[j];
         newList[j] = temp;
     }
   
     //replace list
     for(let i = 0; i < length; i++){
        list.replaceChild(newList[i], list.childNodes[i]);     
     }    
   
 }

 reverseHtmlList("exempel");




function moveElement(listFromId, destinationId){
    
    let getFirstElement = document.getElementById(listFromId).childNodes[1].firstChild;
    console.log(getFirstElement);
    
    let removeFirst = document.getElementById(listFromId);
    removeFirst.removeChild(removeFirst.childNodes[1]);
    
   let destination = document.getElementById(destinationId);
    
    let newElement = document.createElement("li");
    
    let text = document.createTextNode(getFirstElement.textContent);
    console.log(text);
    
    newElement.appendChild(text);
    
    destination.appendChild(newElement);
    
    
}

moveElement("listId", "exempel");