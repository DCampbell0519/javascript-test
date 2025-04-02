// Thinking in javascript
// This is a comment, specifically a single line comment
/* 
*
* This is a multi-line comment
*/
// Rule of thumb, no comment over 80 columns.  (columns = characters)

// How to print to the console, the second most important thing to learn in any language.
console.log("Hello world!")

// Variables
// Declared, using very specific words.  

// let - a mutable variable, the value can be changed.  This may be reassigned.

// = is the assignment operator, this does not represent equality.
let myName = "Donovan" // String begins with ", ', ` and contains characters.  

// const - is an immutable variable, meaning it cannot be reassigned.  
const theSky = "is blue"

// var - is mutable, and is contained in the global scope.  
// It receives the super power of hoisting

// Primitive values, are the most generic values.  Types of data in their simplest form.
console.log(typeof myName, "<<<<<< This is me checking the variable myName")
console.log(" This is a >>", typeof 1);
console.log("This if a >>", typeof 12.5); 
// javascript does not distinguish between numbers and floats.  A float is any number with a decimal.
console.log("This is a >>", typeof true);
console.log("This is >>", typeof null); // this is the developer setting this value explicity.
console.log("This is >>", typeof undefined); // this is random.

// Everything in javascript is true, except
// "", 0, null, undefined, false, NaN - Not a Number