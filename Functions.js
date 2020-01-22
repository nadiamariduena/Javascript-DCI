/*
What is exactly a FUNCTION?
//
A function is basically a section of code, that can be called or invoked.
Example:

function square (x) {

return  x * x;      //  5*5=25 but we dont know yet, as you have to give a value in the argument section below!

            //THIS SECTION of THE FUNCTION
            is called PARAMETER


}
//ARGUMENT SECTION
let x = 5;  //value//if you dont assign a value to x its going to be UNDEFINED
square (x)        //this line is connected with the one on the top

----------------------------------------------------------------------------------*/

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
//----------------------------------FUNCTION-22--januar--2020-----------------
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
