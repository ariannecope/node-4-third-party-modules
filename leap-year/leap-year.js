/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */
// import moment node module
import moment from "moment";

// Accepts a year as user input from the command line with `process.argv` 
let year = Number(process.argv[2]);

// Outputs a friendly message with the result
if (moment([year]).isLeapYear() === true) {
console.log(`yay, Phil gets a birthday next year in ${year}`)
} else {
console.log(`boo, Phil does not get a birthday next year in ${year}`)
}