//sort()...........act on a existing ARRAY
//reduce()...........SPECIAL case, it could make a new array but also reduce the array into a single one
//filter()...........MAKES A NEW ARRAY

//fill()...........act on a existing ARRAY
//map()...........MAKES A NEW ARRAY

//-------------------------------------------------------
//----------------------SORT-----------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

let insecto = [6, 4, 8, 7];
console.log(insecto);

//Adding this two lines will sort the content of the ARRAY in a numerical order, from lowest to highest.
//IT DIDNT MAKE A NEW ARRAY it just sortet it.

insecto.sort();
console.log(insecto);
//RESULT
/*
[ 6, 4, 8, 7 ]
[ 4, 6, 7, 8 ]
------------------------------------------------------*/

//it will sort it in Alphabetical order.
let cloud = ["a", "hello", "b", "goodBye"];
console.log(cloud);
cloud.sort();
console.log(cloud);
//IF you add capital letters, IT will POSITION them at first
/*
[ 'a', 'hello', 'b', 'goodBye' ]
[ 'a', 'b', 'goodBye', 'hello' ]

-------------------------------------------------------*/
let caramel = ["a", "2", "b", "6", "Hello"];
console.log(caramel);
caramel.sort();
console.log(caramel);
//result:  [ '2', '6', 'Hello', 'a', 'b' ]
//it takes the numbers then the capital and then the lowercase in alphabetical order

//-------------------------------------------------------
//----------------------FILTER---------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

//filter sentences

let s = "It was a dark and stormy night.";

let words = s.split(/\W+/).filter(word => word.length > 2);
//(/\W+/) anything that is not a WORD character
//...\W.. split by anything that isnt A-Z or 0-9
//check the video :https://www.youtube.com/watch?v=qmnH5MT_luk  -----min 8:59
//filter out all of the words ,'after i split up the text'...
//that have less than 3 characters thats why there s the 2.

console.log(words);
//result:  [ 'was', 'dark', 'and', 'stormy', 'night' ]
//-------------------------------------------------------------
let glow = "It was a dark and stormy night.";
let words1 = glow.split(/\W+/).filter(word => word.length > 4);
//the console.log is in SORT
//--------------------------------

//Array Functions: filter()
//https://www.youtube.com/watch?v=qmnH5MT_luk

let valo = [5, 4, 9, 5, 1];

function isEven(num) {
  //if I divide something by 2 and get a reminder of 'zero' its an EVEN number so..
  return num % 2 == 0;
  //if NUM modulus% 2, equals zero_0 then i want to return TRUE
}
valo = valo.filter(isEven);
console.log(valo);
//result in the browser console:  (2) [4, 2]

//-------------------------------------------------------------

//-------------------------------------------------------
//----------------------SORT-----------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

// let glow = "It was a dark and stormy night.";
// let words1 = glow.split(/\W+/).filter(word => word.length > 4);

words1.sort((a, b) => a.length - b.length);
//result:[ 'stormy', 'night' , check the position of the a and b when consol logging.

//It took the last words of the sentence that contains more then 4 characters
//if i changed this " b.length - a.length); " for example:
// a instead of b and b instead of a:
//result:
//b.length - a.length);
console.log(words1);

//----------------------------------------------------------
let bazinga = "Everything is possible but you must to work for it";
let words4 = bazinga.split(/\W+/).filter(word => word.length > 2);
words4.sort((ha1, ha2) => ha1.length - ha2.length);
console.log(words4);
//result : [ 'but', 'you', 'for', 'must', 'work', 'possible', 'Everything' ]

//-------------------------------------------------------------

//-------------------------------------------------------
//----------------------REDUCE---------------------------
//-------------------------------------------------------
//-------------------------------------------------------
//-------------------------------------------------------

//REDUCE is a function
/*

The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

Note: this method does not change the original array.

//---------------------------------------------------

The reducer function takes four arguments:

Accumulator (acc)
Current Value (cur)
Current Index (idx)
Source Array (src)


Your reducer function's returned value is assigned to the 
accumulator, whose value is remembered across each iteration 
throughout the array, and ultimately becomes the final, 
single resulting value.
*/

let valuee = [5, 4, 2, 1, 9];

function suma2(acc, val20) {
  console.log(acc);
  return acc + val20;
}
let answer = valuee.reduce(suma2);

console.log(answer);
/*RESULT of 5+4=9+2=11+1=12+9=21
5
9
11
12
21
*/
// REDUCE THE CODE ABOVE  to 3 lines

let valor = [10, 4, 2, 1, 9];
let answerr = valor.reduce((accumulator, val204) => accumulator + val204, 10); //the 10 argument will add 10* more to the content of the ARRAY, and the total will be 36
console.log(answerr);
