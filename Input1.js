//Question 1
        const readLine = require('readline-sync');

        let answer = readLine.question("Would you like to hear a joke?\nYes or No: ");
        if (answer == "yes"){
            console.log(`Ok here it is\nGuess What?`);
        } else {
            console.log("Ima say it anyway\nGuess What?");
        }
        let answer2 = readLine.question("");
        if (answer2 == "what") {
            console.log ('chicken butt')
        } else {
            console.log("You're supposed to say what. but anyways the punchline was chicken butt ");
        }

//Question 2
        let number = readLine.question("Type in a number!\nI'll tell you if you can divide it by 2: ");
        if (number % 2 == 0){
            console.log("yep it's divisible by 2!")
        }
        else {
            console.log("nope, lolololol");
        }

//Question 3
        let number1 = readLine.question("Type in a number!\nI'll tell you if you can divide it by 2, 3, 4, 5, or 6: ");
        if (number1 % 2 == 0){    console.log("yep it's divisible by 2!");
        }
        else {    console.log("nope, not divisible by 2");
        }
        if(number1 % 3 == 0){    console.log("it's divisible by 3!");
        }
        else {    console.log("nope, not divisible by 3");
        }
        if (number1 % 4 == 0){    console.log("it's divisible by 4!");
        }
        else {    console.log("nope, not divisible by 4");
        }
        if(number1 % 5 == 0){    console.log("it's divisible by 5!");
        }
        else {    console.log("nope, not divisible by 5");
        }
        if(number1 % 6 == 0){    console.log("it's divisible by 6!");
        }
        else {    console.log("nope, not divisible by 6");
        }

//Question 4
        let number2 = 49;
        let guess = readLine.question("Guess my Secret Number:");
        if (guess == number2){
            console.log(`You Got It`);
        }
        if (number2 > guess) {
            console.log("Your number was too low");
        }
        if (number2 < guess) {
            console.log ("Your number was too high");
        }

//Question 5
        let cost = Number(readLine.question ( "What is your cost of meal?\nCost:"));
        tax = (cost * 0.08);
        cost = cost + tax;
        console.log ("your new cost after tax is:");
        console.log (cost);

//Question 6
        let cost2 = Number(readLine.question ( "What is your cost of meal?\nCost:"));
        if (cost2 <= 0) {
            console.log ("ERROR: ADD NUMBER GREATER THAN 0")
        }
        else {
            tax = (cost2 * 0.08);
            cost2 = cost2 + tax;
            console.log ("your new cost after tax is:");
            console.log (cost);
        }

//Question 7
        let currentPrice = Number(readLine.question("Enter the price of your meal: "));
        let service = readLine.question("How good was your service today? ");
        if (service == "great"){
            console.log("This is your tip amount!");
        } else if (service == "good") {
            console.log("This is your tip amount!");
            console.log(currentPrice * 0.15);
        } else if (service == "average"){
            console.log("This is your tip amount!");
            console.log(currentPrice * 0.1);
        }else{
            console.log("This is your tip amount!");
            console.log(currentPrice * 0.15);
        }
//Question 8
        let currentPrice1 = Number(readLine.question("Enter the price of your meal: "));
        let service2 = readLine.question("How good was your service today? ");
        tip1 = (currentPrice1 * 0.2);
        tip2 = (currentPrice1 * 0.15);
        tip3 = (currentPrice1 * 0.1);
        if (currentPrice1 <= 0) {
            console.log ("ERROR: ADD NUMBER GREATER THAN 0")
        }else if (service2 == "great"){
            console.log("This is your total today!");
            console.log(currentPrice1 + tip1);
        }else if (service2 == "good"){
            console.log("This is your total today!");
            console.log(currentPrice1 + tip2);
        }else if (service2 == "average"){
            console.log("This is your total today!");
            console.log(currentPrice1 + tip3);
        }