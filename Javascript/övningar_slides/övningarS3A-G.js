var choice = prompt("Test Exercises: Enter letter A-G").toUpperCase();


//------------ A ------------------
if(choice == "A"){
    // Convert fahrenheit
    var fahrenheit = 451;
    var celsius = 0;

    function FahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5  / 9);
    }
    celsius = FahrenheitToCelsius(fahrenheit);
    console.log(fahrenheit +" fahrenheit = " + celsius + " Calsius");
    }

    //------------- B ----------------------
    else if(choice == "B"){
    // Who are you?
    var name = prompt("What's your name?");
    var favouriteColor = prompt("What's your favourite color?");
    var home = prompt("Where are you from?");

    console.log("Welcome " + name + " from " + home + " with favourite color " + favouriteColor);
}

//------------- C --------------------

else if(choice == "C"){
    //guess number game
    var answerCorrect = false;
    var guess = 0;
    var rndNum = Math.floor((Math.random()*100)+0.5);


    do{
        guess = Number(prompt("Please guess a number between 1-100\n Enter: 101 to stop"));

        if(guess === rndNum){
            answerCorrect=true;
            console.log("Congratulations you guess right!");
        }
        else if(guess === 101){
            answerCorrect=true;
        }
        else if(guess > rndNum){
            console.log("The number you've entered is larger than the one we're looking for\nPlease guess again");
        }
        else if(guess < rndNum){
            console.log("The number you've entered is smaller than the one we're looking for\nPlease guess again");
        }


    }while(!answerCorrect);
}

//------------- D -------------------
else if(choice == "D"){
    var sum=0;
    for(var i = 1; i < 101; i++){
        sum += i;
    }
    console.log("Sum of 1-100: " + sum);
}

//------------ E --------------------
else if(choice == "E"){
    //recount string backwards
    var str = prompt("Please enter a string of text");

    var backwards = "";
    for(var i = 0; i < str.length; i++){
        backwards += str[(str.length-1)-i];
    }
    console.log(backwards);
}

//----------- F ----------------
else if(choice == "F"){
    // find vocals a, e, i, o, u, y
    //Populate array
    var vokals=[0];
    for(var y = 0; y < 25; y++){
        vokals.push(0);
    }


    var str = prompt("Please enter another string of text").toLocaleLowerCase();
    function ascii (a) { return a.charCodeAt(0); }
    
    
    
    var tempSize = 0;
    for(var i = 0; i < str.length; i++){
        
        if(ascii(str[i])>97 || ascii(str[i])<122){
            vokals[(ascii(str[i])-97)]++;
        }
        else{
            console.log("only english letters");
        }
        
    }

    console.log("Vokals used: a:" + vokals[0] + " e:" + vokals[4] + " i:" + vokals[8] + " o:" + vokals[14] + " u:" + vokals[20] + " y:" + vokals[24]); 


    console.log("All letters used:");
    var y = 0;
    while(y < vokals.length){
        console.log(String.fromCharCode(97+y) + " = " + vokals[y]);
        y++;
    }
}

//----------- G -----------------
else if(choice == "G"){
    var prime = Number(prompt("Check for Prime-number"));
    var i = 2;
    var primeTrue = undefined;
    while(i<prime){
       if(prime%i === 0){
           primeTrue = false;
           break;
       }
        else if(prime%i !== 0){
            primeTrue = true;
        }
        i++;
    }

    console.log("Prime-Number: " + primeTrue);
}
else{
    console.log("Invalid input: Exiting");
}