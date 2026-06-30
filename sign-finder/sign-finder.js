/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

// Your app should:

// * take **3 numbers** as user inputs: month, day, and year
//   (e.g., if a user's birthday is June 12, 1990, they would enter `6 12 1990`)
// * use the [horoscope](https://www.npmjs.com/package/horoscope) 3rd party module to determine:

//   * the **astrological sign** (e.g., Leo)
//   * the **zodiac sign** (e.g., Goat)

// You will practice:

// * Getting user inputs from the command line with `process.argv`
// * Installing and using a 3rd party npm module
// * Reading documentation to figure out how to work with functions from a library (`getSign()` and `getZodiac()`)

// ### Test Case 1

// Running `node sign-finder.js 1 1 1950` should output:

// ```bash
// Your astrological sign is Capricorn and your zodiac sign is Tiger
// ```

// ### Test Case 2

// Running `node sign-finder.js 8 12 1979` should output:

// ```bash
// Your astrological sign is Leo and your zodiac sign is Goat
// ```


// Understanding the documentation: getSign({month: 7, day: 25})
// Instead, there is one object inside the parentheses:

// {
//   month: 7,
//   day: 25
// }

import { getSign, getZodiac } from 'horoscope';


let month = Number(process.argv[2]);
let day = Number(process.argv[3]);
let year = Number(process.argv[4]);

let astroSign = getSign({
  month,
  day
});

let zodiacSign = getZodiac(year);

console.log(`Your astrological sign is ${astroSign} and your zodiac sign is ${zodiacSign}`);

// If the user runs:

// node sign-finder.js 8 12 1979

// Here's what happens step by step:

// process.argv reads the inputs.
// month becomes 8.
// day becomes 12.
// year becomes 1979.
// getSign({ month, day }) returns "Leo".
// getZodiac(year) returns "Goat".

// // So now your variables hold:

// // astroSign = "Leo";
// // zodiacSign = "Goat";

// When you run:

// node sign-finder.js 8 12 1979

// Node does this instantly:

// 1. Start program
// 2. Read command-line inputs
// process.argv = ["node", "sign-finder.js", "8", "12", "1979"]
// 3. Assign variables
// month = 8
// day = 12
// year = 1979
// 4. Call library functions
// getSign(...)
// getZodiac(...)
// 5. Print result
// console.log(...)

// Then program ends.