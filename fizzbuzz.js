const readline = require('readline-sync');

// for (let i = 1; i <= 100; i++){
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('Fizzbuzz')
//     }
//     else if (i % 3 == 0) {
//         console.log('Fizz')
//     }
//     else if (i % 5 == 0) {
//         console.log('Buzz')
//     }
//     else {
//         console.log(i)
//     }
// }

// Question 1
let g = Number(readline.question( 'Give me a positive integer and I will count from 1 to that number and give you a fizzbuzz response: '));
for (let i = 1; i <= g; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizzbuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}

// Question 2
let h = Number(readline.question( 'Give me a positive integer and I will start from that number to another number and give you a fizzbuzz response: '));
let g = Number(readline.question( 'Give me a positive integer and I will count from the first number to that number and give you a fizzbuzz response: '));
for ( let i = h; i <= g; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizzbuzz')
    }
    else if (i % 3 == 0) {
        console.log('Fizz')
    }
    else if (i % 5 == 0) {
        console.log('Buzz')
    }
    else {
        console.log(i)
    }
}