//first way
let arrStr = ["Hi", "Hello", "Bonjour"];
console.log(arrStr);
//result:   [ 'Hi', 'Hello', 'Bonjour' ]

//-----------
//second Way
let arrInt; //1_ I CREATE a variable
arrInt = []; //2_  INITIALIZE that variable
console.log(arrInt); //just to check what this does before the 3th step
//result : []
arrInt[0] = 22; //_3 I ASSIGN  a value
//Here i am assigning 22 to the very first element of the array, in this case [0].
//I CAN REPEAT it multiple times but changing the inxed of the elemnts
arrInt[1] = 22;
//Here i am assigning 22 to the second element of the array, in this case [1].
console.log(arrInt);
//result: [ 22, 22 ]

//3 Methode-------ARRAY with num slots/espacios--------

let arrString = new Array();
let arrStr2 = Array("Hadi", "haaa");
console.log(arrStr2);
//result:  [ 'Hadi', 'haaa' ]

//4 Methode-------Array.Of()
let strArr = Array.of(3); //Here i initialize the array with 3slots/espacios, for now they are empty
console.log(strArr);
//result [ 3 ]
arrInt[2] = 33;
arrInt[3] = 53;
//console.log(arrInt);

/*RESULT
[ 22, 22, 33, 53 ]

If you check all the arrInt from the top with the position of 
arrInt[0] = 22; and arrInt[1] = 22; ,they will all appear in one single array 
and that is because they have all the same name, so [ 22, 22, 33, 53 ] correspond to
these arrays together.

*/

arrInt.push(526); //526 will be added to the array
//result:  [ 22, 22, 33, 53, 526 ]
arrInt.push("hello"); //push will add the data ("hello"); at the end of the array
arrInt.unshift("5982"); //unshift will add the data ("5982") at the beginning of the array
//result  [ '5982', 22, 22, 33, 53, 526, 'hello' ]
console.log(arrInt);
console.log(typeof arrInt);

//Finding items:
//Array.indexOf(<items>)
//---
//-------------------------------------------------------______-1
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
var firstNameArr = ["Alo", "Olga", "Hadi"];
console.log(firstNameArr.indexOf("Olga"));
//RESULT: -1 , That is because Nancy dont exist inside the array
//EVERYTIME there is a -1 , it means nonexistent
//if i added .indexOf("Olga")); for example
//the result will be 1, because olga is position 1 in the index
/*----------------------------------------------
let funArr = ["😎", "💪🏻", "😊"];
console.log(funArr);
let arrStingName = [];
for (let i = 0; i < 10; i++) {
  arrStingName[i] = `Halloha ${i}`;
  //arr[1] = "BELAB 1";
}
console.log(arrStingName);
//result
[
  'Halloha 0', 'Halloha 1',
  'Halloha 2', 'Halloha 3',
  'Halloha 4', 'Halloha 5',
  'Halloha 6', 'Halloha 7',
  'Halloha 8', 'Halloha 9'
]
------------POP----SHIFT------UNSHIFT----------------------------*/
