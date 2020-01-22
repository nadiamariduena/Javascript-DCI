//Only declarations are hoisted

/*JavaScript only hoists declarations, not initializations. 
If a variable is declared and initialized after using it, 
the value will be undefined. For example: */

/*

/*
console.log(num); // Returns undefined 
var num;
num = 6;
// the result of this will be : UNDEFINED */

//If you declare the variable after it is used, but initialize it beforehand, it will return the value:
/*
num = 6;
console.log(num); // returns 6
var num;
//result : 6
//Below are more examples demonstrating hoisting. */

//let num = 1;
//console.log(num1);

/*
console.log(num1);
let num = 1;*/

/*let num1 = 1;
num1 = num1 + 1;
console.log(num1);

*/
/*
let num1 = 1;
let num2 = 2;
num1 = num1 + 1;
num1 = num1 + 1;
num2 = num2 + 2;
console.log(num1, num2);*/

//-------------------------------------------------------------

//var and let are looking the same but for hoisting it isnt, hoisting is just going to take Var

/*
let x = 3;
let y = 3;
let str = "this is test";
let c = true;
let t = "3";
var newVar = 0;
typeof 
console.log(typeof c);   //with "str "  words are boolean, with 3 is "numbers", with letters "c" boolean
let result = 0;

---------------------*/

/*
function sub() {
    let localVar = "this is local";
    console.log(globalVar);
    console.log(localVar);
    
    }

sum();
sub();
console.log(globalVar);

console.log(newHoisted);
var newHoisted = "text";

var newHoisted = "text";
var newHoisted = "fdds";
*/
