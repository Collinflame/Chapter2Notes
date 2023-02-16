const readLine = require('readline-sync');

//Question 1
console.log ("Give me two numbers and I'll give you the sum");
let firstnumber = Number(readLine.question("Say Your First Number:"));
let secondnumber = Number(readLine.question("Say Your Second Number:"));
let sum = firstnumber + secondnumber;
console.log(`Your Sum: ${sum}`);

//Question 2
console.log ("Give me two numbers and I'll give you the difference");
let firstnumber2 = Number(readLine.question("Say Your First Number:"));
let secondnumber2 = Number(readLine.question("Say Your Second Number:"));
let difference = firstnumber2 - secondnumber2;
console.log(`Your Difference: ${difference}`);

//Question 3
console.log ("Give me two numbers and I'll give you the product");
let firstnumber3 = Number(readLine.question("Say Your First Number:"));
let secondnumber3 = Number(readLine.question("Say Your Second Number:"));
let product = firstnumber3 * secondnumber3;
console.log(`Your Product: ${product}`);

//Question 4
console.log ("Give me two numbers and I'll give you the quotient");
let firstnumber4 = Number(readLine.question("Say Your First Number:"));
let secondnumber4 = Number(readLine.question("Say Your Second Number:"));
let quotient = firstnumber4 / secondnumber4;
console.log(`Your Quotient: ${quotient}`);

//Question 5
console.log ("Give me two numbers and I'll give you the remainder");
let firstnumber5 = Number(readLine.question("Say Your First Number:"));
let secondnumber5 = Number(readLine.question("Say Your Second Number:"));
let remainder = firstnumber5 % secondnumber5;
console.log(`Your Remainder: ${remainder}`);

//Question 6
let firstname = readLine.question("What is your first name?: ");
let lastname = readLine.question("What is your last name?: ");
console.log(`Greeting ${lastname},${firstname}!`);

//Question 7
let title = readLine.question("What is your title?: ");
let lastname1 = readLine.question("What is your last name?: ");
let suffix = readLine.question("What is your suffix?: ");
console.log(`Welcome ${title} ${lastname1}, ${suffix}.`);

//Question 8
let streetnumber = readLine.question("What is your street number?: ");
let streetname = readLine.question("What is your street name?: ");
let streettype = readLine.question("What is your street type?: ");
let city = readLine.question("What is your city?: ");
let state = readLine.question("What is your state?: ");
let zipcode = readLine.question("What is your zip code?: ");
console.log(`This is your mailing label: ${streetnumber} ${streetname} ${streettype}, ${city}, ${state} ${zipcode}.`);

//Question 9
console.log ("Give me two numbers and I'll give you the quotient & it's remainder: ");
let firstnumber6 = Number(readLine.question("Say Your First Number: "));
let secondnumber6 = Number(readLine.question("Say Your First Number: "));
let quotient1 = firstnumber6 / secondnumber6;
let remainder2 = firstnumber6 % secondnumber6;
console.log(`${firstnumber6} divided by ${secondnumber6} equals ${quotient1} remainder ${remainder2}`);

//Question 10
console.log ("Give me two numbers and I'll tell you which is larger");
let firstnumber10 = Number(readLine.question("Say Your First Number:"));
let secondnumber10 = Number(readLine.question("Say Your Second Number:"));
if (firstnumber10 > secondnumber10){
    console.log(`${firstnumber10} is greater than ${secondnumber10}`);
}
if (secondnumber10 > firstnumber10){
    console.log(`${secondnumber10} is greater than ${firstnumber10}`);
}
if (secondnumber10 == firstnumber10){
    console.log(`${firstnumber10} is equal to ${secondnumber10}`);
}

//Question 11
console.log ("Give me two numbers and I'll tell you which is smaller");
let firstnumber11 = Number(readLine.question("Say Your First Number:"));
let secondnumber11 = Number(readLine.question("Say Your Second Number:"));
if (firstnumber11 < secondnumber11){
    console.log(`${firstnumber11} is smaller than ${secondnumber11}`);
}
if (secondnumber11 < firstnumber11){
    console.log(`${secondnumber11} is smaller than ${firstnumber11}`);
}
if (secondnumber10 == firstnumber11){
    console.log(`${firstnumber11} is equal to ${secondnumber11}`);
}

//Question 12
console.log ("Give me two numbers and I'll give you the quotient");
let firstnumber7 = Number(readLine.question("Say Your First Number:"));
let secondnumber7 = Number(readLine.question("Say Your Second Number:"));
let decimalplaces = Number(readLine.question("How many decimal places would you like your awnser rounded to?: "));
let quotient2 = firstnumber7 / secondnumber7;
let round = (quotient2).toFixed(decimalplaces);
console.log(Math.round(round));