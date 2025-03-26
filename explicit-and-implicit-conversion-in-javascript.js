/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; //Correct:*This Covers implicit conversion cause JavaScript converts the string to a number for you.*/
console.log("The result is: " + result);

let isValid = Boolean("false"); //Correct:*This is an edge case because non empty strings in java script are always true so even though it says false it is valid.*/
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); //Incorrect:*Wrapping this string with a number conversions so that on line 31 the types are the same. This would also be an explicit conversion.*/
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

*/ Examples /*

let runs = "4";      // runs is a string
let outs = 2;        // outs is a number

let inningUpdate = runs - outs;
console.log("Inning Update: " + inningUpdate); 
__________________________________________________________
let errors = null;
let totalErrors = errors + 1; 
console.log("Total Errors: " + totalErrors);
__________________________________________________________

let battingAverageStr = "0.300";
let battingAverage = Number(battingAverageStr);

console.log("Batting Average: " + battingAverage);







  
