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

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can drive! 🚗');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is not old enough to drive. 😭 Wait another ${yearsLeft} years.`);
// }

// const birthYear = 2012;

// let century

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// // Challenge 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // const massMark = 95;
// // const heightMark = 1.88;
// // const massJohn = 85;
// // const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 24
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);
// const error = true

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${Math.round(BMIMark)}) is higher than John's (${Math.round(BMIJohn)})!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// TYPE CONVERSION
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

/*
// TYPE COERCION
console.log('I am ' + 23 + ' years old'); // Same as console.log('I am ' + '23' + ' years old');
// Otherwise, I would have to do this
console.log('I am ' + String(23) + ' years old');
console.log('23' + '10' + 3);
console.log('23' / '2');

let n = '1' + 1; // Result is a string '11'
n = n - 1; // Now, '11' is converted to an integer because of the - operator, and a math operation is actioned 11 + 1
console.log(n);
*/

// Falsy values are 0, '', undefined, null and NaN - Anything else which is not among those values, then it's truthy
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sebas')); // If it was '' empty string, result would be false
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
} */

/*

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)'); // DON'T EVER USE THE DOUBLE == OPERATOR!

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) { // '23' == 23
//   console.log('Cool! 23 is an amazing number!');
// }

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
  console.log('7 is also a cool number!');
} else if (favourite === 9) {
  console.log('9 is also a cool number!');
} else {
  console.log(`Number is not 23 nor 7 or 9, so it's not cool :(`);
}

if (favourite !== 23) { // '!=' is the loose version. '!==' is strict preferred
  console.log('Why not 23?');
}

*/

/* const hasDriversLicense = true; // Variable A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
 */

/* if (hasDriversLicense && hasGoodVision) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
 */

/* // CHALLGENGE #3

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 100 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy 🏆");
} else {
  console.log("Both win the trophy 🤝");
} */

// BONUS 1

/* const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins == scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both win the trophy 🤝");
} else {
  console.log("No one wins the trophy 😭");
} */

/* const day = "Monday";

switch (day) {
  case "Monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend 😊");
    break;
  default:
    console.log("Not a valid day ❌");
} */

// With if statement syntax

/* if (day === 'Monday') {
  console.log('Plan course structure');
  console.log ('Go to coding meetup');
} else if (day === 'Tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'Wednesday' | 'Thursday') {
  console.log('Write code examples');
} else if (day === 'Friday') {
  console.log('Record videos');
} else if (day === 'Saturday' | 'Sunday') {
  console.log('Enjoy the weekend 😊');
} else {
  console.log('Not a valid day ❌');
} */

// STATEMENTS & EXPRESSIONS

// EXPRESSIONS - Line of code that produces a value

// Expression DO NOT REQUIRE a semicolon

/* 3 + 4;
1991;
true && false && !false;

// STATEMENT - Like a bigger piece of code which DOES NOT produces a value on itself, like noral spoken lang

if (23 > 10) {
  const str = "23 is bigger";
} // Does NOT produce a value, performs actions only versus 3 + 4

// Statements DO REQUIERE a semicolon at the end

// JavaScript expect statements and expressions in different places

// Template literals only support EXPRESSIONS

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}.`);
 */

// 28. CONDITIONAL OPERATOR or TERNARY OPERATOR, always produces a value. An OPERATOR is an EXPRESSION

/*

const age = 23;

// age >= 18
//   ? console.log("I like to drink wine 🍷")
//   : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// if statement version

let drink2; // Optional

if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

*/

// CHALLENGE #4

const bill = 430;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
