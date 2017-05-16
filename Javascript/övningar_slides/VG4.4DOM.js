
//===============================================================
//main

addToHtmlList('first', 'apa');
addToHtmlList('first', 'björn');
addToHtmlList('first', 'delfin');
addToHtmlList('second', 'clementin');
addToHtmlList('second', 'dadel');
addToHtmlList('second', 'fikon');
reverseHtmlList('first');


moveElement('first', 'second');
createTableFromList('body', 3, ['wild', 'words', 'went', 'wilfully', 'wherever', 'wily', 'whales', 'would', 'waste', 'water']); // 10 elements


//===============================================================
//functions

function addToHtmlList(listID, text){
    
    let parent = document.getElementById(listID);
    
    let listItem = document.createElement("li");
    let listContent = document.createTextNode(text);
    
    listItem.appendChild(listContent);
    
    parent.appendChild(listItem);
    
}


 function reverseHtmlList(listID){
     
     //UL list 
     let list = document.getElementById(listID);
     //LI elements
     let listItem = list.getElementsByTagName("li");
     
     //static length of list
     let length = list.childElementCount;
     
     //new static array from list
     let newList = Array.from(listItem);
     
     //reverse list
     newList.reverse().forEach((li)=>{
         list.appendChild(list.removeChild(li));
     });
   
 }



function moveElement(listFromId, destinationId){
   
    //value of firstChild
    let getFirstElement = document.getElementById(listFromId).childNodes[1].firstChild;
   
    //remove firstChild
    let removeFirst = document.getElementById(listFromId);
    removeFirst.removeChild(removeFirst.childNodes[1]);
    
    //move destination
    let destination = document.getElementById(destinationId);
    
    //new list node
    let newElement = document.createElement("li");
    //add value to node
    let text = document.createTextNode(getFirstElement.textContent);
    newElement.appendChild(text);
    
    //add new element to the end of destination
    destination.appendChild(newElement);
    
    
}

function createTableFromList(parentElementId, itemsPerRow, list){
    
    //parent
    let parent = document.getElementById(parentElementId);
    //table
    let table = document.createElement("table");
    table.style.border = "1px solid black";
    //tbody
    let tbody = document.createElement("tbody");
    //static list
    let newList = Array.from(list);
    
    //add necessary rows
    for(let i = 0; i < newList.length/itemsPerRow; i++){
        tbody.appendChild(document.createElement("tr"));    
    }
    
    //add data cells and content
    for(let i = 1, row = 0; i <= newList.length; i++){
        
        //deta cells
        let td = document.createElement("td");
        td.style.border = "1px solid black";
        let tdata = document.createTextNode(newList[i]);
        td.appendChild(tdata);
        
        //add cells
        tbody.childNodes[row].appendChild(td);
        
        //items per row
        if(i % itemsPerRow === 0)
            row++;
    }
    
    
   
    //add to table
    table.appendChild(tbody);
    
    //add to parent
    parent.appendChild(table);
}





















































