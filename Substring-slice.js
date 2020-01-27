//-------------SLICE
/*
let shortStr2 = str44,slice(5);
console.log(shortStr2);
*/

/*

// Create a new string from a given string, taking the last 3 characters of 
//the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt.
//
let newStr = 'Javascript';
let strNew =  newStr.slice(newStr.length - 3);
console.log(strNew);  //result : ipt ,it s taking the last characters of the word

*/

/*let newVar1 = "hello woah";
let newVarUpper = newVar1.toUpperCase();
console.log(newVarUpper);

let javaCheck = newVarUpper.includes('java');
console.log(javaCheck);

/*
var str = "Hello world!";
console.log(str.substring(2, 9));
//resultat
llo wor
//
//it will take the two first letters out of the word Hello
//then
//it will count 9 letters from the beginning of the words HELLO WORLD :
//H es 1, e es 2, l es 3, l4 o5 space es 6 w7 o8 r es 9
-----------------------------------------------------------------*/
/*
var str = "Hello world!";
console.log(str.substring(4, 1));
//resultat
*/
/*
//Begin the extraction at position 2, and extract the rest of the string:
var str = "Hello world!";
console.log(str.substring(2));
*/
//result
//llo world!

/*
let longText = "JavaScript";
let subStr = longText.substring(2,4);
console.log(subStr);
*/

/*let longText = "JavaScript";
let subStr = longText.substring(3,6);
console.log(subStr);*/

/*
let longText = "nice shoes";
let subStr = longText.substring(1,2);
console.log(subStr);
*/

//Substractions of strings
/*
let str44 = "this is lone str";
let shortStr = str44.substring(str44.length - 3); //its going to take the 3 last charakters because of the "minus 3"
console.log(shortStr); //short for shortstring
*/
//resultado :str

//it will change the first letter of the first word
/*let dvd = "the quick brown fox";
let firstChr101 = dvd[0].toUpperCase();
let newUpdatedStr = dvd.slice(1);
console.log(firstChr101 + newUpdatedStr);

*/

/*-----------------
let longText = "this is long text";
let subStr = longText.substring(2);
console.log(subStr);
-------------------*/

/*
let longText = "I can walk in the park all day";
let subStr = longText.substring(6,10);
console.log(subStr);
*/

/*--------ERROR-------------
//put the first character at the end and the last in front

let newString = "hi this is long text and i do know";
let firstChr =  newString[0];
let lastChar = newString[newString.length - 1];
let shortStr3 = newString.substring(1, newString,length - 1);
console.log(shortStr3);
console.log(lastChar + shortStr3 + firstChr);
*/

/*------------------------------------------
let userName = "MeliSSa";
let firstChr = userName[0];
let restOfNameChr = userName.substring(1).toLocaleLowerCase();
console.log(firstChr + restOfNameChr);
---------------------------------------------

*/
/*
let shortStr2 = str44,slice(5);
console.log(shortStr2);
*/
// .substring (num,num)
/*
let longText = "this is long text";
let subStr = longText.substring(2, 4);
console.log(subStr);
*/
/*
let name = 'Earthlings';  
console.log(typeof name);
let sar1 = name.toLowerCase();
console.log(sar1);

*/

/*

// 1. Declare a variable with the value of “I can walk in the park all day!“. Print the word “park” to the console.
let longText1 = "I can walk in the park all day!";
let str22 = longText1.substring(18, 22);
console.log(str22);
// 2. Declare a variable with the value of “Hello World”. Covert the value to upper case and print the converted value to the console.
let text222 = "Hallo World";
let textUp = text222.toUpperCase();
console.log(textUp);
// 3. Declare another variable with the value of “Earthlings”. Convert the value to lower case and print the converted value to the console.
let text333 = "Hallo World";
let textLow = text333.toLowerCase();
console.log(textLow);
// 4. Declare a variable with the value “JavaScript”. Print the the characters “aSc” to the console using the substring() method.
let js = "JavaScript";
let smallText = js.substring(3, 6);
console.log(smallText);
// 5. Check if the sentence “nice shoes” contains the letter l.
let text232 = "nice shoes";
let textCheck = text232.includes("L");
console.log(textCheck);
// 6. Create a new string from a given string with the first character of the given string added at the front and back. eg. of output: JavaScript => JJavaScriptJ.
let text111 = "Door";
let firstChr1 = text111[0];
console.log(firstChr1 + text111 + firstChr1);
//.length - num
let str44 = "this is longe str";
let shortStr = str44.substring(str44.length - 3);
console.log(shortStr);
// .slice
let shortStr2 = str44.slice(5);
console.log(shortStr2);
*/

/*
let atbox = "000000";
for (let i = 0; i <= 5; i++) {
  console.log(atbox.slice(i));
}
//result
000000
00000
0000
000
00
0
*/
