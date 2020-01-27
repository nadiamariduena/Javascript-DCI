//GHASSAN HELPFUL TIP

"hallo world".split(" ")(2)[("hallo", "world")];
"hallo world".split("")(11)[
  ("h", "a", "l", "l", "o", " ", "w", "o", "r", "l", "d")
];
"hallo wo,rld".split(",")(2)[("hallo wo", "rld")];
"h/allo wo,rld".split("/")(2)[("h", "allo wo,rld")];

//More about it: https://standardjs.com/rules-en.html

const names = ["Ali", "Olga", "Nancy"];

// Array.includes()-----------------------------------
/*
The includes() method determines whether an array contains a specified element.
This method returns true if the array contains the element, and false if not.
*/
console.log(names.includes("Ali")); //true  // Array.includes()
// Array.indexOf(<item>)
console.log(names.indexOf("Ali")); //Ali is in the position 0

let name = "This is Long Text"; //string //contains 17 characters including spaces
console.log(names.length); // index of array
console.log(name.length);

//Array.slice()

console.log(names.slice(3)); //The slice() method extracts parts ...
//...of a string and returns the extracted parts in a new string.
//EXAMPLE:

/*var str = "Hello world!"; 
var res = str.slice(0, 5); 


Hello  //it will count from 0 so the beginning of the word and then when reaching the 5 
character 'which is the space ' it will stop there.
*/

console.log(names.splice(0, 2)); //The splice() method adds/removes items to/from an array, and returns the removed item(s).

//Array.split()
let stringToArray = name.split(" ");
console.log(stringToArray);

/*RESULT--------

true
0
3
17
[]
[ 'Ali', 'Olga' ]
[ 'This', 'is', 'Long', 'Text' ]


*/
//ARRAY---split()

//ARRAY SPLIT
//here i will tell a rule how i want to split this word :
//let name = "This is long text";
//split(" "); split will cut every empty space

/*
let stringToArray = name.split(" ");
console.log(stringToArray);
*/

//result:
//[ 'This', 'is', 'long', 'text' ]

//--other way---//
let name2 = `This is long text new line and line`;
let stringToArray = name2.split(" ");
console.log(stringToArray);
/*

[
  'This', 'is',
  'long', 'text',
  'new',  'line',
  'and',  'line'
]



*/
