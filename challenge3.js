//Coding Challenge 3 - my solution

/*
const scoreDolphins = ((96 + 108 + 89) / 3); // extra parentheses not necessary
const scoreKoalas = ((88 + 91 + 110) / 3);

const sD = scoreDolphins; // flashy addition!
const sK = scoreKoalas;

console.log(`Dolphin's average is ${sD}. Koala's average is ${sK}.`);

if (sD > sK) {
    console.log('Dolphins win the trophy!');
} else if (sK > sD) {
    console.log("Koalas win this beast!")
} else if (sK === sD) {
    console.log("it's a tie!")
} else {
    console.log("I'm tired of console log")
}

// BONUS 1 (had to look at solution for the math operator greater-than...I'm weak on the math operators)
if (sD > sK && sD > 100) {
    console.log('Dolphins win the trophy!');
} else if (sK > sD && sK > 100) {
    console.log("Koalas win this beast!")
} else if (sK === sD && sK >= 100 && sD >= 100) {
    console.log("it's a tie!")
} else {
    console.log("I'm tired of console log")
}

*/

// TEACHER SOLUTION
/*
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphins win the trophy 🏆.');
} else if (scoreKoalas > scoreDolphins) {
    console.log('Koalas win the trophy 🏆.');
} else if (scoreKoalas === scoreDolphins) {
    console.log('Both win the trophy 🏆.');
}
*/

// BONUS 1
/*
const scoreDolphins = (80 + 108 + 106) / 3;
const scoreKoalas = (109 + 80 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆.');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆.');
} else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy 🏆.');
} else {
    console.log('no one wins the trophy 😭')
}
*/