

//=========================================================
//Main

var database = [];

//make objects
let starWars = createMovieObject('The Force Awakens', 2015, "scifi");
let greenMile = createMovieObject('Green Mile', 2000, "Drama");
let matrix = {title:'matrix', year:1999, genre:"action"};



// add objects to database
database.push(starWars);
database.push(greenMile);
database.push(matrix);


//finds movies even with mixed cases
rateMovie(database[SelectMovie("The force Awakens")],3);
rateMovie(database[SelectMovie("the Force Awakens")],5);
rateMovie(database[SelectMovie("The Force awakens")],3);

rateMovie(database[SelectMovie("green Mile")],3);
rateMovie(database[SelectMovie("Green mile")],5);
rateMovie(database[SelectMovie("Green Mile")],3);

/*
rateMovie(database[SelectMovie("matrix")],3);
rateMovie(database[SelectMovie("Matrix")],4);
rateMovie(database[SelectMovie("matrIx")],5);
*/

console.log("best: ",getBestMovie(database));
console.log("worst: ",getWorstMovie(database));
console.log("year: ",getMoviesThisYear(database,2000));
console.log("genre: ",getMoviesByGenre(database,"action"));
console.log("Info: ",movieInfo(database[SelectMovie("green Mile")]));

console.log(database);



//Function definition
//======================================================================================


//Create new movies
function createMovieObject(title, year, genre) {
	"use strict";
    let movieTitle = {
        title: title.toLowerCase(),
		year: year,
		genre: genre.toLowerCase(),
        ratings: [],
        averageRating: null,
        timesRated: 0,
        
        toString: function(){
            return ("Title: " + this.title+
                    "\nYear: " + this.year+
                    "\nGenre: " + this.genre+
                    "\nAverage Rating: " + this.averageRating);
        } 
	};
	return movieTitle;
}

//Select movie from database by name despite case-mixing
function SelectMovie(movieName){
    "use strict";
	let selectedMovie = movieName.toLowerCase();
	
	for(let index = 0; index < database.length; index++){
		if(database[index].title === selectedMovie){
			return index;
		}  
    }
    return alert("Movie not found");
}

//Print info about movie
function movieInfo(movie){
    "use strict";
    return movie.toString();
}

//If properties are missing in an object add them
function validateObject(movie){
    if(!movie.genre){
  		movie["genre"] = []; 
  	}
    if(!movie.year){
  		movie["year"] = []; 
  	}
    if(!movie.ratings){
  		movie["ratings"] = []; 
  	}
    if(!movie.averageRating){
        movie["averageRating"] = null;
    }
    if(!movie.timesRated){
        movie["timesRated"] = 0;
    }
}

//Rate movie
function rateMovie(movie,rate) {
    "use strict";
    validateObject(movie);
    
    if(rate > 5 && rate < 0){
        alert("ratings can only be 1-5");
    }
  
    movie["ratings"].push(rate); 
}

//Calculate Average Rating
 function avgRating(movie){
    let averageRate = 0;
    for(let i = 0; i < movie.ratings.length; i++){
        averageRate += movie.ratings[i];    
    }
    movie.timesRated=movie.ratings.length;
    movie.averageRating=averageRate/movie.timesRated;
}


//Best rated movie
function getBestMovie(database) {
    "use strict";
   
    if(database.length === null){
   	    return null;
    }
    
    
    let bestAverage = 0;
    let bestMovie = {};
    for(let i = 0; i < database.length; i++){
       
        validateObject(database[i]);
        avgRating(database[i]);    
        if(database[i].averageRating > bestAverage){
            bestAverage = database[i].averageRating;
            bestMovie = database[i];
        }
    }
    return bestMovie;
}

//Worst rated movie
function getWorstMovie(database) {
    "use strict";
    if(database.length === null){
   	    return null;
    }
    
    let worstAverage = 6;
    let worstMovie = {};
    for(let i = 0; i < database.length; i++){
        
        validateObject(database[i]);
        avgRating(database[i]);
        
        if(database[i].ratings.length !== 0){
            if(database[i].averageRating < worstAverage){
                worstAverage = database[i].averageRating;
                worstMovie = database[i];
            }    
        }
        
    }
    return worstMovie;
}

//find movies by year made
function getMoviesThisYear(database, movieYear) {
    "use strict";
    
	let moviesOfYear = [];
	for(let index = 0; index < database.length; index++){
		if(database[index].year === movieYear){
			moviesOfYear.push(database[index]);
		}  
    }
    
    return moviesOfYear;     
}

//find movies by Genre
function getMoviesByGenre(database, genre) {
    "use strict";
    
	let movieByGenre = [];
	for(let index = 0; index < database.length; index++){
		if(database[index].genre === genre.toLowerCase()){
			movieByGenre.push(database[index]);
		}  
    }
    return movieByGenre;    
}

