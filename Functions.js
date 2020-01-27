//What is exactly a FUNCTION?
//
//A function is basically a section of code, that can be called or invoked.

//
//functions name: sum
//functions parameter: (x, y), you can have functions without parameters.

function sum(x, y) {
  let z = x + y;
  /*You can declare a variable inside a function
                and this variable would be a local variable.
                They belong only for that function so I am not able
                to acces it outside that function.
                */
  return z;
  /*So if i want to get the results out i need to push
                           that outside to the outside world and the only way to do it
                           is return.
             
                           functions are scoop on their own and by that i mean everything
                           between the curly brackets {}
                             */
}

/*TO USE the function 
                           i need to call it and because I have two parameters
                           (x, y) ,SO I need to have two parameters on the 
                           bottom console.log(sum(2, 3));
                             */

console.log(sum(2, 3));
//result: 5

/*SO the calculation happens, everything happens but the 
             only way to see the results for now is 'consol-logging it'
             in the future i will do it using the document.
             

           - YOU DONT USE console log to create applications, its just for now!
           - YOU CAN CREATE  function without parameters and return, it can do
             everything on its own THE ONLY THING a function cant do is: CALL ITSELF alone!

example:

function fum(){

const num = 10;
const num2 = 20;
console.log(num + num2);


}
fum();
//RESULT: 30


-----------------------------------------------------------

function fum() {
  const num = 10;
  const num2 = 20;
  const num3 = 50;
  console.log("Hieee");
  return `Hello the sum is ${num + num2 + num3} \n I\'m  \" `;
}
fum();

console.log(fum());

//result
/*
Hieee
Hieee
Hello the sum is 80 
 I'm  " 

*/

/*----------------------------------------------------------------------------------*/

/*
var globalVar = 'this is global';
function sum() {
let localVar = "this is local";
console.log(localVar);
}

sum();
console.log(localVar);
----------------------------------------------------------------------------------*/

/*

var globalVar = 'this is global';
console.log(localVar);
globalVar = "this is global zzz";


function sum() {
let localVar = "this is local";
console.log(globalVar);
console.log(localVar);

}
---------------------------
function localScope() {
  console.log(logThis);
  var logThis = "Hello";
}
---------------------------

----------------------------------------------------------------------------------*/

/*----------------------------------------------------------------------------------


function catName(name) {
    console.log("My cat's name is " + name);
  } 
  catName("Tigger");  
  //
 The result of the code above is: "My cat's name is Tigger" 
----------------------------------------------------------------------------------*/

/*---------------------------------------------------------------------------------

catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
//
The result of the code above is: "My cat's name is Chloe"

*/

//----------------------------------------------------------------------------
//----------------------------------FUNCTIONS-22--januar--2020-----------------
/*
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);

  //100 dividido por 200, resultado 0,5 now sumale 2 = 2,5 now sumale 3 = 5,5
  //de donde saco el 2 y el 3 ? del ARGUMENT = yellow(2, 3);
}
yellow(2, 3);
//--------------
//---------------
const AliPets = ["Dyson", "Sofi"];

const pink = (name, array, age = 10) => {
  //10 is the value for age if the user did not give age
  console.log(
    `Hi ${name}, you are very young ${age}, you have nice pets ${array}`
  );
};
pink("Ali", AliPets, 20);
pink("Olga", ["Dyson", "Sofi"]);

//RESULT

//5.5
//Hi Ali, you are very young 20, you have nice pets Dyson,Sofi
//Hi Olga, you are very young 10, you have nice pets Dyson,Sofi



----------------------*/
/*
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);
  //100 dividido por 200, resultado 0,5 now sumale 2 = 2,5 now sumale 3 = 5,5
  //de donde saco el 2 y el 3 ? de Aqui yellow(2, 3);
}
yellow(2, 3);
//---------------


const AliPets = ["Dyson", "Sofi"];

const pink = (name, array, age = 10) => {
  //10 is the value for age if the user did not give age
  console.log(
    `Hi ${name}, you are very young ${age}, you have nice pets ${array}`
  );
};
pink("Ali", AliPets, 20);
pink("Olga", ["Dyson", "Sofi"]);

const greeting = (nam, add, age, pla) => {
  age += 20;
  nam += ",";
  pla += "DE";
  add += ",";
  return `Hey  ${nam} its very nice to live in ${add} you are getting older too fast ${age}, in your old ${pla}`;
};

console.log(greeting("Ali", "xx str", 10, "Berlin"));

//RESULT
5.5
Hi Ali, you are very young 20, you have nice pets Dyson,Sofi
Hi Olga, you are very young 10, you have nice pets Dyson,Sofi
Hey  Ali, its very nice to live in xx str, you are getting older too fast 30, in your old BerlinDE

------------*/

//------------------------today-------------------------------
//variables
/*

c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of 
the string. NB: for your program to work properly, the function should 
replace all 

’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.

Examples:
hackerSpeak(“javascript is cool”) ➞ “j4v45cr1pt 15 c00l”
hackerSpeak(“programming is fun”) ➞ “pr0gr4mm1ng 15 fun”
hackerSpeak(“become a coder”) ➞ “b3c0m3 4 c0d3r”

*/
/*
const hacking = str => {
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4; //ALL that has "a" will appear with 4
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3; //ALL that has "e" will appear with 3
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1; //ALL that has "i" will appear with 1
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0; //ALL that has "o" will appear with 0
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5; //ALL that has "s" will appear with 5
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]); // All the rest will have their original aspect ""
    }
  }
  let result = hackedArr.join("");
  return result;
};

let codeStr = "Hi i am nice aaa";
console.log(hacking(codeStr));

//RESULT
//h1 1 4m n1c3 444

*/

//RESULT
//h1 1 4m n1c3 444

//console.log("hAllo".split(""));

//-----------------------------------------RESULT GHASSAN----M uppercase---
/*
const hacking = str => {
  let hackedArr = [];
  let toSmall = str.toLowerCase();
  let letters = toSmall.split("");
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "a") {
      letters[i] = 4; //ALL that has "a" will appear with 4
      hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
      letters[i] = 3; //ALL that has "e" will appear with 3
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1; //ALL that has "i" will appear with 1
      hackedArr.push(letters[i]);
    } else if (letters[i] == "o") {
      letters[i] = 0; //ALL that has "o" will appear with 0
      hackedArr.push(letters[i]);
    } else if (letters[i] == "s") {
      letters[i] = 5; //ALL that has "s" will appear with 5
      hackedArr.push(letters[i]);
    } else if (letters[i] == "m") {
      // the mistake was here we should push the character to the main array

      letters[i] = letters[i].toUpperCase();
      hackedArr.push(letters[i]); //ALL that has "e" will appear with 3
    } else if (letters[i] == "c") {
      letters[i] = letters[i].toUpperCase();
      hackedArr.push(letters[i]);
    } else {
      hackedArr.push(letters[i]); // All the rest will have their original aspect "letters"
    }
  }
  let result = hackedArr.join("");
  return result;
};
let codeStr = "hi i am nice aaa";
console.log(hacking(codeStr));
---------------------------------------*/

/*
Is it Symmetrical? Create a function that takes a number as an argument and returns true 
or false depending on whether the number is symmetrical or not.
 NB(Nota Bene: used to mark something as particularly important): A number is symmetrical
 when it is the same as its reverse.


Examples:
isSymmetrical(7227) ➞ true
isSymmetrical(12567) ➞ false
isSymmetrical(44444444) ➞ true
isSymmetrical(9939) ➞ false
isSymmetrical(1112111) ➞ true
*/

/*---------------error
function isSymmetrical(num) {
  let numToStr = num.toString();
  let result = numToStr
    .split("")
    .reverse()
    .join("");
  if (numToStr == result) {
    return true;
  } else {
    return false;
  }
}

console.log(isSymmetrical(322333));
console.log(isSymmetrical(123456));
console.log(isSymmetrical(1));
//result
/*
false
false
true
*/

/*----------------------------------------------
snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
Examples:
toCamelCase(“hello_world”) ➞ “helloWorld”
toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”


*/
//-------------------------------------------------------

/*
const toCamelCase = str => {
  let splitStr = str.split("_");
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChar, restStr;
    if (splitStr[i] == splitStr[0]) {

      //is every character of my loop equal to the first one if so 
      //...then push that char to my new array
      
      camelArray.push(splitStr[0]);
      continue;
    } else {
      firstChar = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChar.toUpperCase() + restStr;
    camelArray.push(newWord);
  }
  let result = camelArray.join("");
  return result;
};

console.log(toCamelCase("snack_log_Girl"));
console.log(toCamelCase("snack_Boy"));
*/
//RESULT
//snackLogGirl
//snackBoy

//--------------------------------------------------------
/*

Pig Latin Translation. Create a function that takes a string of words and moves
the first letter of each word to the end of it, then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
Move the first letter of each word to the end of the word.
Add “ay” to the end of the word.
Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.


Extra Practice
Preserve proper capitalization as in the examples below.
Examples:
pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”
*/
/*
function pigLatin(str) {
  let translation = [];
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(" ");
  // this is without the vowel task
  //const vowels = ["a", "e", "o", "i", "u"];
  for (let i = 0; i < splitStr.length; i++) {
    // i = 1   splitStr = that
    let firstChr = splitStr[i][0]; // t
    let remainder = splitStr[i].slice(1, splitStr[i].length); //hat
    const newString = remainder + firstChr + "ay";
    // hat + z + ay
    translation.push(newString);
  }
  let result = translation.join(" ");
  return result;
}
const strPig = "higo that is fun";
console.log(pigLatin(strPig));

//igohay hattay siay unfay
*/

/*---------------------------------------------

function amp(num) {
  let result = [];
  let ampByTen = 0;

  for (let i = 1; i <= num; i++) {
    //due to the fact its 1 its going to be 40 at the end
    if (i % 4 == 0) {
      //if the remainder when i divided by 4 is cero,
      ampByTen = i * 10;
      //IF SO multiply that number by 10 and push it to my new array
      result.push(ampByTen);
      //IF NOT throw that whole number
    } else {
      result.push(i);
    }
  }
  return result;
}
//the function will start from 1 till 4
console.log(amp(4));

//result
//[ 0, 1, 2, 3, 40 ]


const amp = num => { 
  //its the same but in another way**********
  let result = [];
  let ampByTen = 0;

  for (let i = 1; i <= num; i++) {
    //due to the fact its 1 its going to be 40 at the end
    if (i % 4 == 0) {
      //if the remainder when i divided by 4 is cero,
      ampByTen = i * 10;
      //IF SO multiply that number by 10 and push it to my new array
      result.push(ampByTen);
      //IF NOT throw that whole number
    } else {
      result.push(i);
    }
  }
  return result;
};
//the function will start from 1 till 4
console.log(amp(4));

//result
//[ 0, 1, 2, 3, 40 ]

----------------------------------------*/
function unique(arr) {
  let currentValue = 0;
  let current = [];
  let remainder = [];

  for (let i = 0; i < arr.length; i++) {
    if (current.length === 0 || current[0] === arr[i]) {
      current.push(arr[i]);
      currentValue++;
    } else if (currentValue[0] !== arr[i]) {
      remainder.push(arr[i]);
    }
  }
  if (currentValue === 1) {
    return current[0];
  } else {
    return remainder[0];
  }
}

let ar = [1, 1, 2, 1, 3, 1];
console.log(unique(ar));
//result  2
