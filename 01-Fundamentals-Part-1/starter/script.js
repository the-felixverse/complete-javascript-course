/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Felix');
console.log(41);

let firstName = "Mr Cat";
let first = 'Felix';
let firstNamePerson
let first_name_person

console.log(firstName);
console.log(firstName);
console.log(firstName);

// regarding what flies and what doesn't for functions
let years = 3;
let jonas_matilada = "JM";
let $function = 22;

let Person = 'Felix';
let PI = 3.1415;

// good, descriptive
let myFirstJob = "Painter";
let mySecondJob = "Writer";

// not great way to do it, too nondescriptive
let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)


true;
console.log(true);
let javaIsFun = true;
console.log(javaIsFun);
console.log(typeof javaIsFun);
console.log(typeof true);
// changing a value
javaIsFun = 'YES!';
console.log(typeof javaIsFun);
//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1230;

// wont work
birthYear = 1223;

const job;

var job = "artist"
job = "storyteller"
*/

/* Bad practice to make variable without declaring it
lastName = "Acme"
console.log(lastName)
*/

// Math Operators
/*
const currentYear = 2025;
const ageFelix = currentYear - 1984;
const ageSo = currentYear - 1983;

console.log(ageFelix * 2, ageSo / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Felix';
const lastName = 'Acme';
console.log(firstName + ' ' + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4 // x = x * 4 = 100
x++; // x = x+1
console.log(x);
*/

// // Comparison Operators

/*
console.log(ageFelix > ageSo); // >, <, >=, <=
console.log(ageFelix >= 18);

const isFullAge = ageFelix >= 18;

console.log(currentYear - 1991 > currentYear - 1984);

const now = 2025;
const ageFelix = now - 1984;
const ageSo = now - 1983;

console.log(now - 1991 > now - 2010);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, y = 10

console.log(x, y);

const averageAge = (ageFelix + ageSo) / 2
console.log(ageFelix, ageSo, averageAge);
*/

// STRINGS AND TEMPLATE LITERALS

/*
const firstName = 'Felix';
const job = 'Tarotlogist';
const birthYear = 1991;
const year = 2037;

const felix = "I'm " + firstName + ", a " + (year - birthYear) + ' year old ' + job + "!";
console.log(felix)

const jonasNew = ` I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);
console.log(`Just a regular string...`);

console.log(`String
multiple
lines`);
*/

//TAKING DECISIONS: if / else statements

/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Felix can start driving 🧨');
} else {
    const yearsLeft = 18 - age;
    console.log(`Felix is fucked for ${yearsLeft} years 🔨`);
}
*/

// // CONTROL STRUCTURE CODE
/*
if(){

} else {

}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
/*

//type conversion

/*
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Felix'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1 // become string '11'
n = n - 1; // string converts to number
console.log(n);
*/

// 5 falsy values: 0, ' ', undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = -1;
[
    function () { console.log(Math.min(0, money)) }
];
if (money) {
    console.log("Dont's spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('yay! height is defined!');
} else {
    console.log('Height is UNDEFINED');
}
*/

// === means exactly
/*
const age = '18'; // assignment
if (age === 18) console.log('you just became an adult! (strict)'); //strict operator

if (age == 18) console.log('you just became an adult! (loose)'); // avoid as much as possible

const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // 23 = 23
    console.log(`Cool! 23 is an amazing number`)
} else if (favorite === 7) {
    console.log('7 is also a cool number')
} else if (favorite === 9) {
    console.log("nine is also cool, kinda")
} else {
    console.log('number is not 23 or 7')
}

if (favorite !== 23) {
    console.log("23 is the answer")
} else if (favorite === 23) {
    console.log("correct!")
} else {
    console.log('whatever')
}
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

const hDL = hasDriversLicense;
const hGV = hasGoodVision;

console.log(hDL && hasGoodVision);
console.log(hDL || hasGoodVision);
console.log(!hDL);

const shouldDrive = (hDL && hGV);

if (shouldDrive) {
    console.log('Sarah is able to drive!')
} else {
    console.log('someone else shouldx drive')
}
// Proper version should be if (hDL && hGV);

const isTired = false; // C
console.log(hDL || hasGoodVision || isTired);

if (hDL && hGV && isTired) {
    console.log("Sarah can drive!");
} else {
    console.log('someone else should drive.')
}
*/
/*
const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday' if true, this code is executed>
        console.log('Plan course structure');
        console.log('Go to coding meetup.');
    break;
    case 'tuesday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend')
        break;
    default:
        console.log('Not a valid day!');
}

// harder to understand and looks weirder
const day = 'thursday';

if (day === 'monday') {
    console.log('Plan course structure');
} else if (day === 'tuesday') {
    console.log('Take dog for a walk');
} else if (day === 'wednesday' || 'thursday') {
    console.log('Take cat for a walk');
} else if (day === 'tuesday') {
    console.log('Take dog for a walk');
}

*/

if (23 > 10) {
    const str = '23 is bigger';
}

const age = 25;
age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);