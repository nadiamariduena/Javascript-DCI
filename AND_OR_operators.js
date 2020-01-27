// Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let number1 = 1;
let number2 = 7;
if (
  number1 % 7 == 0 ||
  number2 % 7 == 0 ||
  number1 % 11 == 0 ||
  number2 % 11 == 0
) {
  console.log(true);
}
//result :
//----------------------------------------------
// Check whether either one of two integers is 15
let int7 = 5;
let int8 = 10;
let intSum = int7 + int8;
console.log(intSum);
//
// Check if their sum is 15. If one of these is the case, print true.
if (int7 == 15 || int8 == 15 || intSum == 15) {
  console.log(true);
}
//----------------------------------------------------------
//this one here below will not be defined because we never declared it, just as the one on the top "let dd"
//console.log(superHero);
/*let dd = 9;

if (false || (1 < 55 && false)) {
  console.log("Yeah its true");
  console.log("Yeah");
}
*/
//

//-----------------
/*var score1 = 90;
var score2 = 100;

var highscore1 = 13;
var highscore2 = 10;

if (score1 && score2 > highscore1 && highscore2) {
  console.log("yes its");
} else {
  console.log("no its not bigger");
}
*/

//
/*-----------------
let a, b, c;
a = true;
b = false;
c = true;

//if (a == b) {  //if a is EQUAL to b then say nice
//if (a !== b) {  //if a is NOT-EQUAL to b then say nice

//if (a == b && c)
if (a == b || c) {
  console.log("Nice");
}

*/
//----------------------------------------

//---------------------EXERCISES-----------
//---------------------EXERCISES-----------
//---------------------EXERCISES-----------

//Declare two variables "a" with the value of true and "b" with the value of false.

const a = true;
b = false;

// 1 Check the result of:

// 1a

console.log(`Q1a: ${a && b}`);

// 1b

console.log(`Q1b: ${a || b}`);

// 1c

console.log(`Q1c: ${!(a && b)}`);
//not : ! ,  will print the oppsite answer

// 2 Declare three more variables "x", "y", "z". Give these variables number values.

const x = 5;
const y = 10;
const z = 2;

// 3 Check the result of whether:

// 3a x is greater than z AND x is greater than y.

console.log(`Q3a: ${x > z && x > y}`);

// 3b x is NOT equal to y.

console.log(`Q3b: ${x !== y}`);
//If i want to reverse the equals : !==

// 3c z is less than y OR z is greater than x.

console.log(`Q3c: ${z < y || z > x}`);

// 3d x is equal to z OR x is NOT equal to y.

console.log(`Q3d: ${x == z || x !== y}`);

// 3e x is greater than or equal to 10 AND y is less than or equal to 10.

console.log(`Q3e: ${x >= 10 && y <= 10}`);

// 3f x multiplied by z is less than 100 OR whether x multiplied by y is greater than 100.

console.log(`Q3f: ${x * z < 100 || x * y > 100}`);

//----------

//

/*
let a, b, c;
a = true;
b = false;
c = true;

if (a == b && c) {
  console.log("Nice");
} else {
  console.log("Not cool");
}

//ANSER: not cool
*/

/*--------
let a, b, c;
a = true;
b = false;
c = true;

if (a !== b && c) {
  console.log("Nice");
} else {
  console.log("Not cool");
}

//ANSwER: NICE

-----------*/
//

//----------

//

/*--------
let a, b, c;
a = true;
b = false;
c = true;

if (a !== b && c) {
  console.log("Nice");
} else {
  console.log("Not cool");
}

//ANSwER: NICE

-----------*/
//
/*----------
let a, b, c;
a = 1 === 4;
b = 20 < 100;
c = true;
let counter = 0;
let logIn = false;

if (a == c && b) {
  console.log("Nice");
  counter = 2;
  logIn = true;
} else {
  console.log("Not cool");
  counter = 3;
  logIn = false;
}

console.log(logIn, counter);

//RESULT: false 3



*/
//----------

//

/*---------EXERCISE------1--------------------


let moon, bola, cloud;
moon = false;
bola = true;
cloud = true;

if (moon == bola && cloud) {
  console.log("summer");
} else {
  console.log("winter");
}

result: winter because they arent the same
*/
//------------2------------------------------------

/*let moon, bola, cloud;
moon = false;
bola = true;
cloud = true;

if (moon !== bola && cloud) {
  console.log("summer");
} else {
  console.log("winter");
}
*/
//result: summer because its right, they arent the same!

/*-------------------------------------------------------
console.log("Abc");
let givenName, firstName, palmera;

givenName = "moon";
firstName = "Hadi";
palmera = "palo";
console.log(palmera || givenName || firstName || "Abc");

//JAVASCRIPT will take the first variables of the fila
//console.log(palmera || givenName || firstName || "Abc");
//if i changed palmera for firstName?

----------------------------------------------------------*/

//01234 01234 01234
/*
let counter = 0;
for (let i = 0; i <= 4; ) {
  console.log(i);
  if (i == 4 && counter < 2) {
    //if my i was equal to 4 and my counter less than 2...
    i = 0;
    //...IF SO, do 'i' one more time cero
    counter++;
    //then increase the counter by 1
  } else {
    //if the condition on top wasnt truthy, loop again
    i++;
  }
}
//result

01234 01234 01234
*/
