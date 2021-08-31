// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum1 = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum1);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const sum2 = parseFloat( anotherNumberOne ) + parseFloat( anotherNumberTwo );
console.log(sum2.toFixed(2));


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const sum3 = ( one + two + three ) / 3.0;
console.log(sum3.toFixed(5));





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const letter = letters[2];
// const letter = letters[letters.indexOf('c')];
// const letter = letters.split("").find(l => l == "c");
// const letter = letters.match("c")[0];
console.log(letter);



// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const factCapitalized = fact.replace("j", "J");
console.log(factCapitalized);

// --------------------------------------



