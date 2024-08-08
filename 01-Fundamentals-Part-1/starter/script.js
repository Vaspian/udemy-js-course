/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Gandalf";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varaible name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'Sauron';
let PI = 3.145;

let myFirstJob = 'Hobbit';
let myCurrentJob = 'Guard of the Citadel';

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); */

/* let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programer';
job = 'teacher';

lastName = 'Stormcrow';
console.log(lastName); */
/*
//Math operators
const now = 2037;
const ageSebas = now - 1993;
const ageSarah = now - 2018;
console.log(ageSebas, ageSarah);

console.log(ageSebas * 2, ageSebas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2.

const firstName = 'Sebastian';
const lastName = 'Rosales';
console.log(firstName + ' ' + lastName);

// Assigment operators
let x = 10 + 5; // x is 15 so far
x += 10; // x = x + 10, so x is now 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageSebas > ageSarah);  // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1993 > now - 2018);
*/

/* const now = 2037;
const ageSebas = now - 1993;
const ageSarah = now - 2018;
const averageAge = Math.round((ageSebas + ageSarah) / 2);
console.log(ageSebas, ageSarah, averageAge); 

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, because precedence. Substraction over Assignment operators. 
// console.log(x, y); */

// Challenge 1
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherBMI);
*/

/*const firstName = 'Sebastian';
const job = 'Onboarding Specialist';
const birthYear = 1993;
const year = 2037;
const sebas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(sebas);

const sebasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(sebasNew);

console.log(`Just a regular string...`);

console.log('String with\nmultiple\nlines');

console.log(`String
multi
line
element`);
*/

const age = 15;

if (age >= 18) {
  console.log('Sarah can drive! 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is not old enough to drive. 😭 Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Challenge 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
const error = true

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${Math.round(BMIMark)}) is higher than John's (${Math.round(BMIJohn)})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}