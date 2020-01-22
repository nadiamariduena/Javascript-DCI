let arrStr = ["hi", "hahaha", "text"];
console.log(arrStr);

//TO CREATE Array with num slots
arrInt = [];
console.log(arrInt);
arrInt[0] = 22;
arrInt[1] = 22;
console.log(arrInt);

//---another methode

let arrString = new Array();
let arrStr2 = Array("Hadi", "Ali");
console.log(arrStr2);

//last way-----------
//Array.of() creating array
let strArr = Array.of(3);
console.log(strArr);

//---I will assign a value to this array,
// this INT is ont top 'empty
arrInt[2] = 33;
arrInt[3] = 53;
console.log(arrInt);

//---plusieurs
arrInt.push(663);
arrInt.push(222);

//--

arrInt.unshift(322);
console.log(arrInt);
console.log(typeof arrInt);

//---

var firstNameArr = ["Ali", "Olga", "Hadi"];
console.log(firstNameArr.indexOf("Nancy"));
//Everytime you will look for a number or name that isnt inside
//the variable, javascript will tell you that its '-1'

//-------
//ARRAY can store everything
let funArray = ["😎", "💪🏻", "😊"];
console.log(funArray);
//-------

let arrStingName = [];
for (let i = 0; i <= 10; i++) {
  arrStingName[i] = `Hadi ${i}`; //arr[1] = 'Hadi 1'
}
console.log(arrStingName);

//never leave empty icons, like this : for (let i = 1...
//look at the one, instead of having cero you put a 1, now test it

//-------

//ARRAY can store everything---
let funArr = ["😎", "💪🏻", "😊"];
//POP is going to put one of the emojis out
funArr.pop();
//funArr.push();
funArr.shift();
//funArr.unshift();
console.log(funArr);

//----------Hackers,this is why it s
//always important to add const,its 99% sure
const lastName = ["Ali"];
lastName[0] = "Nasreeny";
lastName[1] = "Dany";
console.log(lastName);

//-------EXPLANATION--CONST-------------
/*
let x = 0;
//i use let to declare flexible variables
//var is the same but have some constraintes, it s more for global
//you  may see var in most of applications
x = 2 + 2;
console.log(x);

//const inthe other hand, is not possible to change

const x = 0;
//you can overwrite it ,like here: 
// x = 2 + 2;


--------------ARRAY-SLICE-------------------------*/
/*
let names = ["Hadi", "Ali", "Nancy", "Dany"];
let name = "jam";
console.log(names.length); //it will count how many names are inside the array
//result: 4
*/

let names = ["Hadi", "Ali", "Nancy", "Dany"];
let name = "This is long text";
console.log(names.length); //index of array
console.log(name.length); //result: 3

console.log(names.slice(3));

//---------splice--define the beginning and the end
console.log(names.splice(0, 2)); //result [ 'Hadi', 'Ali' ]

//
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
