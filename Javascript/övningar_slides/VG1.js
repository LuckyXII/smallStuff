
//================================================
//countries
const countryStatistics = [
	{
		name: 'Sweden',
		continent: 'Europe', 
		population: 9890000,
		pFemale: 0.502        // 50,2% of population is female
	},
	{
		name: 'Norway',
		continent: 'Europe',
		population: 5300180,
		pFemale: 0.499
	},
	{
		name: 'Denmark',
		continent: 'Europe',
		population: 5701870,
		pFemale: 0.504
	},
    {
		name: 'Chile',
		continent: 'South America',
		population: 18206356,
		pFemale: 0.506
	},
	{
		name: 'Japan',
		continent: 'Asia',
		population: 126408645,
		pFemale: 0.513
	},
    {
		name: 'Botswana',
		continent: 'Africa', 
		population: 2323499,
		pFemale: 0.495        // 50,2% of population is female
	},
    {
		name: 'Congo',
		continent: 'Africa', 
		population: 80508257,
		pFemale: 0.593        // 50,2% of population is female
	},
     {
		name: 'Australia',
		continent: 'Australia', 
		population: 24482534,
		pFemale: 0.502        // 50,2% of population is female
	},  
    {
		name: 'test',
		continent: 'South America', 
		population: 19206356,
		pFemale: 0.502        // 50,2% of population is female
	}
	
	
];

//==================================================
//Universal functions and variables

function continentCountries(countryStatistics,continentName){
    return countryStatistics.filter((x) =>{return x.continent === continentName;});
}

function populationContinent(countries){
    return countries.reduce((x,y) => {return x += y.population;},0);
}

function leastPopulation(continent){
    
    let smallestPopulation = continent.reduce((x,y) => { return x < y.population ? x : y.population;},Infinity);

    function small(x){
        if(x.population === smallestPopulation){
            return x;
        }
    }
    return continent.filter(small);
}

//------------------
//continents

//african countries
let africanCountries = continentCountries(countryStatistics,"Africa");

//European countries
let europeanCountries = continentCountries(countryStatistics,"Europe");

//Asian countries
let asianCountries = continentCountries(countryStatistics,"Asia");

//South American countries
let southAmericanCountries = continentCountries(countryStatistics,"South America");

//North American Countries
let northAmericanCountries = continentCountries(countryStatistics,"North America");

//Australia
let australia = continentCountries(countryStatistics,"Australia");

//Antarctica
let antarctica = continentCountries(countryStatistics,"Antarctica");

// world continents
let world = [africanCountries,europeanCountries,asianCountries,southAmericanCountries,australia,northAmericanCountries ,antarctica];

//==================================================
// uppg 1:

//print countries
countryStatistics.forEach(country => console.log(country.name));

//=================================================
//uppg 2:

//total population
console.log("Total Population: ",populationContinent(countryStatistics));

//=================================================
//uppg 3:

//Population Europa
console.log("population Europe: ",populationContinent(europeanCountries));

//==================================================
//uppg 4:

//least population
console.log("country with the least inhabitants is: ",leastPopulation(countryStatistics)[0].name);

//-------------------------
//uppg 4: Asia

//least population Asia
console.log("Asian country with the least inhabitants is: ",leastPopulation(asianCountries)[0].name);

//=======================================================
//uppg 5:

//Population in Africa
let populationAfrica = populationContinent(africanCountries);

console.log("Average african population is: ",populationAfrica/africanCountries.length);

//=======================================================
// uppg 6:

//compare continents
let mostInhabitedContinent = world.reduce((x,y) => {return populationContinent(x) > populationContinent(y) ? x : y;});

//most populated continent
console.log("Continent with the most inhabitants is: ",mostInhabitedContinent[0].continent);

//=======================================================
//uppg 7:

//Filter countries with more than 50m population
let bigCountries = countryStatistics.filter((country)=>{return country.population > 50000000;});

bigCountries.forEach(country => console.log("Countries with a population above 50m: ",country.name));

//======================================================
//uppg 8:

//Check if ALL european countries has more pop than 1234567
console.log("All European countries has a bigger population than 1234567: ",europeanCountries.every((country) =>{return country.population > 1234567;}));

//======================================================
//uppg 9:

//Filter countries with 8-15m in population
let countriesBetween8_15millions = countryStatistics.filter((country)=>{return (country.population > 8000000 && country.population < 15000000);});

countriesBetween8_15millions.forEach((country)=>{console.log("Countries between 8 and 15 million inhabitants: ",country.name);});

//======================================================
//uppg 10:

//List countries with more than 50m population
let countriesWith50Mil = world.map((continent)=>{
    return continent.filter((countries)=>{return countries.population > 50000000;});
});

//amount of countries matching per continent
var amountOfBigCountries = countriesWith50Mil.reduce((x,y)=>{return x > y.length ? x : y.length;},0);

//check if one or more continents have the most big countries
let continentsWithBigCountries = countriesWith50Mil.filter((continent)=>{return continent.length === amountOfBigCountries;});

continentsWithBigCountries.forEach((continent)=>{console.log("Continent with the most countries above 50m: ",continent[0].continent);});


//======================================================
// uppg 11:

//List population by continent
var populationPerContinent = [];
var indexCountry=0;
world.forEach((continent)=>{
    if(continent.length !== 0){
        populationPerContinent.push(continent.reduce((x,y) => {return x += y.population;},0));
    }});

//find least population
var leastInhabitedContinent = populationPerContinent.reduce((x,y)=>{
    return x < y ? x : y;});

//find index of least populated continent
populationPerContinent.find((x)=>{
    if(x === leastInhabitedContinent){
        return x; 
    }
    indexCountry++;
});

//Find biggest country
let biggestCountry = world[indexCountry].reduce((x,y)=>{
    return x.population < y.population ? y : x; });

console.log("Biggest country in the continent with the least inhabitants: ",biggestCountry.name);

