const readline = require('readline-sync');

// Question 11
// let answer11 = readline.question( "Enter y or n:");
// while (answer11 != "y" && answer11 != "n"){
//     console.log ("Invalid Answer");
//     answer11 = readline.question( "Enter y or n:");
// }

// Question 12
// let answer12 = readline.question( "Enter y or n:");
// while (answer12 != "y" && answer12 != "n" && answer12 != "Y" && answer12 != "N"){
//     console.log ("Invalid Answer");
//     answer12 = readline.question( "Enter y or n:");
// }

// Question 13
// let answer13 = readline.question( "Enter A, B, or C:");
// while (answer13 != "A" && answer13 != "B" && answer13 != "C"){
//     console.log ("Invalid Answer");
//     answer13 = readline.question( "Enter A, B, or C:");
// }

// Question 14
// let answer14 = Number(readline.question ( "Enter 1, 2, or 3:"));
// while (answer14 != 1 && answer14 != 2 && answer14 !=3){
//     console.log ("Invalid Answer");
//     answer14 = Number(readline.question ( "Enter 1, 2, or 3:"));
// }

// Question 15
// let answer15 = Number(readline.question ( "Enter A Number 0-10:"));
// while (answer15 !=0  && answer15 != 1 && answer15 != 2 && answer15 !=3  && answer15 != 4 && answer15 != 5 && answer15 != 6 && answer15 != 7 && answer15 != 8 && answer15 != 9 && answer15 != 10){
//     console.log ("Invalid Answer");
//     answer15 = Number(readline.question ( "Enter A Number 0-10:"));
// }

// Question 16
// let answer16 = Number(readline.question ( "Enter A Positive Number:"));
// while (answer16 < 0){
//     console.log ("Invalid Answer");
//     answer16 = Number(readline.question ( "Enter A Positive Number:"));
// }

// Question 17
// let answer17 = Number(readline.question ( "Enter A Negative Number:"));
// while (answer17 > -1){
//     console.log ("Invalid Answer");
//     answer17 = Number(readline.question ( "Enter A Negative Number:"));
// }

// Question 18
// let answer18 = Number(readline.question ( "Enter An Even Number:"));
// while (answer18 % 2 == 1){
//     console.log ("Invalid Answer");
//     answer18 = Number(readline.question ( "Enter An Even Number:"));
// }

//Question 19
// let answer19 = Number(readline.question ( "Enter A Number 0-10 or 10-30:"));
// while (answer19 < 0){
//     console.log ("Invalid Answer");
//     answer19 = Number(readline.question ( "Enter A Number 0-10 or 10-30:"));
// }
//
// while (answer19 > 10 && answer19 < 20 || answer19 > 30){
//     console.log ("Invalid Answer");
//     answer19 = Number(readline.question ( "Enter A Number 0-10 or 10-30:"));
// }

// Question 20
let answer20 = Number(readline.question ( "Enter A Number And I'll Tell You The Days Of That Month:"));
while (answer20 > 12){
    console.log ("Invalid Answer");
    answer20 = readline.question( "Enter A Number And I'll Tell You The Days Of That Month:");
}
while (answer20 < 1){
    console.log ("Invalid Answer");
    answer20 = readline.question( "Enter A Number And I'll Tell You The Days Of That Month:");
}
if (answer20 == 2){
    console.log ("28 Days");
}
if (answer20 == 4 || answer20 == 11 ||answer20 == 9 ||answer20 == 6 ){
    console.log ("30 Days");
}

if (answer20 == 1 || answer20 == 3 ||answer20 == 5 ||answer20 == 7 || answer20 == 8 ||answer20 == 10 ||answer20 == 12){
    console.log ("31 Days");
}