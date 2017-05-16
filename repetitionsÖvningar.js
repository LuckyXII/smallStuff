/*jshint esnext: true, moz: true*/
/*jslint browser:true */


var btn = document.getElementById("btn");
var statusText = document.getElementById("status");

btn.addEventListener("click", ajaxCall);

function ajaxCall(){
    /*
    var xml = new XMLHttpRequest();
    xml.onload = () =>{
        if(xml.status == 200){
            console.log(JSON.parse(xml.responseText));
        }
    };
    xml.open("GET", "https://forverkliga.se/JavaScript/api/simple.php");
    xml.send();
    */
    
    fetch("https://forverkliga.se/JavaScript/api/simple.php?world=whatever")
        .then((response)=>{
            return response.json();
    })
    .then((json)=>{
        console.log(json);
        countries = json;
    });
}


var xml = new XMLHttpRequest();
xml.onload = () =>{
    if(xml.status == 200){
        getCountries(JSON.parse(xml.responseText));
    }
};
xml.open("GET", "https://forverkliga.se/JavaScript/api/simple.php?world=whatever");
xml.send();
function getCountries(result){
    
    printInfo(result);
}

function printInfo(countries){
    var totalPopulation = countries.reduce((total, pop)=>{
       return total+pop.population;
    },0);
    
    

    var zimbabwe = countries.filter((countries)=>{
        return countries.name == "Zimbabwe";
    });

    function femalePopulationZimbabwe(){
        var pop  = 0;
        for(let i = 0; i < zimbabwe.length; i++){
           pop += zimbabwe[i].pFemale*zimbabwe[i].population;
        }
        return pop;
    }
    var femPopZim = femalePopulationZimbabwe();

    var smallestPop = {}, small = Infinity;
    countries.forEach((countries)=>{
        if(small > countries.population){
            smallestPop = countries;
            small = countries.population;
        }
    });
    
    let populationEurope = {continent:"europe", 
                            population: popContinent(countries,"Europe")};
    let populationSouthAmerica = {continent:"South America",
                                  population:popContinent(countries,"South America")};
    let populationAsia = {continent:"Asia",
                          population:popContinent(countries, "Asia")};
    let populationNorthAmerica = {continent:"North America",
                                  population:popContinent(countries, "North America")};
    let populationOceania = {continent:"Oceania", 
                             population:popContinent(countries, "Oceania")};
    let populationAfrica = {continent: "Africa",
                            poulation:popContinent(countries, "Africa")};
    let continents = [populationAfrica,populationAsia,populationEurope,populationNorthAmerica,populationOceania,populationSouthAmerica];
    
    let biggestContinent = continents.reduce((prev, cur)=>{
        if(prev.population > cur.population){
            return prev;
        }else{return cur;}
    });

    console.log(`Total population: ${totalPopulation}`);
    console.log(`population Europe: ${populationEurope}`);
    console.log(`female population in zimbawe: ${femPopZim}`);
    console.log(`smallest country by pop: ${smallestPop.name}`);
    console.log(`Biggest continent by population: ${biggestContinent.continent}`);

}
  
function popContinent(countries, continent){
     let cont = countries.filter((country)=>{
        return country.continent == continent;
    });
    
    return cont.reduce((total, pop)=>{    
        return total + pop.population;
    },0);
}
