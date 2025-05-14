// MY WORK ON CHALLENGE 2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

// if/elsing that shit!
if (BMIMark > BMIJohn) {
    console.log(`Oh John you're crushing it!`)
} else {
    console.log(`Oh John you're losing the battle.`)
}

if (BMIMark < BMIJohn) {
    console.log(`Oh Mark your BMI (${BMIMark}) crushing John's at (${BMIJohn})!`)
} else {
    console.log(`Oh Mark your ${BMIMark} BMI is losing the battle. John's got you at (${BMIJohn}) .`)
}

// TEACHER SOLUTION


// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// let BMIMark = massMark / heightMark ** 2;
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log("john wins")
// } else {
//     console.log('mark wins')
// }