// bmi calculator and comparison
// MY SOLUTION

// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const mass = (johnWeight);
// const height = (johnHeight);
// let BMI = mass / (height * height);
// console.log(johnWeight);
// console.log(johnHeight);
// console.log(mass);
// console.log(height);
// console.log(BMI);

// let BMIMark = markWeight / markHeight ** 2;
// let BMIJohn = johnWeight / johnHeight ** 2;
// console.log(BMIJohn);
// console.log(BMIMark);

// console.log(johnWeight, markWeight);
// console.log(johnHeight, markHeight);

// const markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// TEACHER SOLUTION

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / (heightJohn * heightJohn);

const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
