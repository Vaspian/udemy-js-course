const country = 'Colombia';
const continent = 'South America';
const language = 'Spanish';
let isIsland = false;
let population = 51;
const finlandPopulation = 6;
const averageCountryPopulation = 33;

const description = country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language + '.';

/* console.log(country);
console.log(continent);
console.log(population); */

/* console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language); */

// language = 'English';

// BASIC OPERATORS ASSIGNMENT

// 1 Country split in half
console.log(population / 2);

// 2 Increase
population++
console.log(population);

// 3 Boolean compare
console.log(population > finlandPopulation);

// 4 Boolean compare average
console.log(population > averageCountryPopulation);

// 5 Create new variable description and print
console.log(description);