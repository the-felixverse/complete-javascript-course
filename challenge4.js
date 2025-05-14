const bill = 300;
var tip = bill >= 300 && bill >= 50 ? (bill * .15) : (bill * .2);

console.log(`The bill is ${bill} and the tip is ${tip}. Thusly or therefore the total is $${bill + tip}.`);