/*-------------------
let x = 333.333333455;
console.log(x.toFixed(4));
//Boolean inversion with!

let old, nice, crazy;
old = true;
nice = false;
crazy = true;

crazy = 3 <= 3;
console.log(crazy);
console.log(old !== nice);

console.log(crazy ? "Yeah" : "nope");

//ANSWER: 333.3333  ,true , true, yeah



----------------*/

//Boolean expressions: comparison operators ()
//console.log(1 == 4);  //false

//console.log(1 >= 4); //false

//VARIABLE-----------
//let x = 3;
//let y = 3;
//console.log(x + y); //result = 6
//-----------------

//let x = 3;
//let y = 3;
//let str = "this is test";
//let c = true;
//let t = "3";
//var newVar = 0;
//typeof
//console.log(typeof c);   //with "str " so words is boolean, with 3 is "numbers", with letters "c" boolean
//let result = 0;

//-----------
//let kid = 15;
//define variable call

//(kid>16)?console.log('Party'):console.log('Saty Home')
//if kid is greater than 16 he can go to party, if not he will stay home
//HE STAY AT HOME because he is minor ,he is 15
//-----------

//can he drive? nope because he is four/4

//let drive = 4;
//(drive>18)?console.log('drive'):console.log('nope sorry');

//----------- STRING TEST ...HADI is a string of 4 characters

//let name = 'Hadi';
//console.log(typeof name);

//let name = 'Hadi and hi';
//console.log(typeof name);
//console.log(name.length);
//ITS WILL CALCULATE how many charaters the word/or sentence Hady has spaces

//let name = 'Hadi and hi';
//console.log(typeof name);
//console.log(name.length);
//let lastName = "Nsraa";
//console.log(lastName.length); //here it tells me i have 11 characters in the first and 4 in the last let

//SUBSTRING will separate
//let email = "xxxx@gmail.com";
//console.log(email[11]);
//lastName[0] === "N" ? console.log("cool") : console.log("Not cool");

//SUBSTRINGS----------
//let restOfStr = lastName.substring(5);
//console.log(restOfString);

/*

HELLO JUST LIKE CSS this way is to hide MULTIPLE lines 

control+shit+7 = //

*/

/*
//---NO DEFINED----------NULL declaration----------------------
let var1 = 0;
let var2 = null; //if i declare null, its a variable with emptiness/no value, its a box with nothing inside, its not anymore "undefined"
console.log(var1);
console.log(var2); //BECAUSE I DIDNT DEFINE var2, it will show undefined in the terminal, because i dint declare the value
*/

/*
//---------------BOOLEAN------------- 
let firstName = 'hadi';
//.includes
let text = firstName.includes('ho');
//if this string includes H, true/false : its false because theres no HO in hadi
console.log(text);

*/

/*

//take the first character and duplicate it at the end
let text111 = 'Door';
let firstChr1 = text111[0];

//the firstCharackter of txt111 qui est Door, starting from the 0 of the word

console.log(firstChr1+text111+firstChr1);

/*will take the first charackter , then the word doors, then the first character again, 
it means that it will take the first charakter 
of the word Door, then it will add "D"  at the beginning and at the end,like this = DDoorD  */

/*

*/

/*
let firstName = "Hadi";
let lastName = "i dont see";
let address = "xxxx, 12222 Berlin";
let niceText =  `Hi $(firstime1) and i live(address), my door has bla`;  //its a useful way without using plus or commas
console.log(niceText);
//resultado : Hi $(firstime) and i live(address), my door has bla  */

//global is what i have in the whole page
//local is only available in one part

//--------------
/*
let num1 = 1;
console.log(num1);
num1 = num1 + 1;
console.log(num1);

num1 += 4;

//result 1 , 2
*/

/*
let num1 = 1;
console.log(num1);
num1 = num1 + 1;
console.log(num1);

num1 *= 4;
let i = 0;
console.log(i);
*/

//-------------------*/

/*--------ERROR-------------
//put the first character at the end and the last in front

let newString = "hi this is long text and i do know";
let firstChr =  newString[0];
let lastChar = newString[newString.length - 1];
let shortStr3 = newString.substring(1, newString,length - 1);
console.log(shortStr3);
console.log(lastChar + shortStr3 + firstChr);
*/

/*greattttttttttttttttt
let myName = "Hadi"; 
let myAge  = 38;
let myCity  = "Berlin";

console.log(`Hey I am ${myName}, i am ${myAge}, i live in ${myCity}whatever`);

*/
/*---------------------------
function localScope() {
  console.log(logThis);
  var logThis = "Hello";
}
---------------------------*/

/*
let x = 333.333333455;
console.log(x.toFixed(4));
//Boolean inversion with!

*/
