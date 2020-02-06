const circle = {
  //curly brackets refers to an object literal syntax
  //an object is a collection of KEY values
  //so inside the curly brackets you will add few Key values

  radius: 1,
  //location can be an object, thats why i open an other curly brackets
  //In this new OBJECT i can add more KEY values:
  location: {
    x: 1,
    y: 1
  },
  //NOW add another Key value, this time a FUNCTION:

  draw: function() {
    console.log("draw");
  }
};

//THIS CIRCLE has 3 members: RADIUS , Location and Draw,
//IF a member is a FUNCTION, i have to refer to it as a METHOD
//the other members are called PROPERTIES.

circle.draw();

//IF an object has 1 or More METHODS, i ...
//I say that that OBJECT has BEHAVIOR
//
//2 ------METHODS
//FACTORY functions-------******

//1--MOVE the previous code inside  a FUNCTION

function createCircle(radius) {
  //if the key and the value have the same name..
  //I can remove THE NOISE by simple adding RADIUS
  return {
    radius,
    draw: function() {
      console.log("beautiful");
    }
  };
}
//Now call the function by creating a new circle:
const circulo = createCircle(1); //pass 1 as a radius
circulo.draw();

//------------------------------
//CONSTRUCTOR functions-------******

function solano(radial) {
  this.radial = radial;
  this.lora = function() {
    console.log("Hello flowers");
  };
}
const another = new solano(1);
//result:     hello flowers

/*
  Every Object in JAVASCRIPT has a PROPERTY 
  call constructor and that reference
  a Function that was used to CONSTRUCT OR create that OBJECT

*/

var name = ["hello"];

function suma() {
  const car = 1;
  const velo = 2;

  return `${car + velo}`;
}
console.log(name);
console.log(suma());
/*----------
[ 'hello' ]
3
----------*/
//------------------------
//-----------------------
var name = ["wonderful"];

function maoson() {
  const father = [52];
  const mother = [52];
  return `${father + mother}`;
}

maoson();
console.log(maoson()); //result: 5252
console.log(name); //result:  [ 'wonderful' ]
//---------------------
//-------Now without squarebrackets---
function limbo() {
  const father = 52;
  const mother = 52;
  return `${father + mother}`;
}

limbo();
console.log(limbo()); //result: 104

//teacher------------------
//teacher------------------
//---------------------------------------
// Accessing properties with (dot notation)
const person = {
  firstName: "Melissa",
  lastName: "Murillo"
};

console.log(
  `My name is ${person.firstName} and my last name is ${person.lastName}`
);
//RESULT:  My name is Melissa and my last name is Murillo

//--------------------------------------
//--------------------------------------
//--------------------------------------
function looneyTunes() {
  const persona = {
    firstName: "Bugs",
    lastName: "Bunny",
    birthMonth: "Jun",
    birthYear: "1986",
    fullName() {
      return `My first Name is ${persona.firstName} and my family name is ${persona.lastName}, my birth month is ${persona.birthMonth}, and the year is ${persona.birthYear}.`;
    }
  };

  console.log(persona.fullName());
}
looneyTunes();

/*
RESULT: My first Name is Bugs and my family 
name is Bunny, my birth month is Jun, and the year is 1986.


*/
//--------------------------------TEACHER-lessons
let arr = [];

// Objects
// keys, properties : value
//Object Literal
const o = {
  1: "Hadi",
  2: "Ali",
  3: "Olga"
};
const obj = {
  name: "Nancy",
  lastName: "saaaa",
  age: 44,
  add: "xxx str"
};
// old school
let aliName = "Ali";
let aliAdd = "xxx str";
let aliAge = 22;
let aliLastName = "something";
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
const object = {
  color: "Red",
  size: "big",
  year: 1990,
  arr: [1, 3, 4, 5, 67]
};
// Accessing properties with (bracket notation)
const car = {};
console.log(car);
car["name"] = "Ford";
console.log(car);
car["year"] = 2020;
console.log(car);

// Accessing properties with (dot notation)
car.age = 22;
console.log(car);
car.age = 44;
car.fa = "hhh";
console.log(car.name);
console.log(car["name"]);
const save = new Object();
const arr1 = new Array();
console.log(save);
console.log(car.name);
console.log(car);
// cool for 😎
for (let prop in car) {
  console.log(`car.${prop} : ${car[prop]} `);
}
const person = {
  name: "Zain",
  age: 20,
  birthYear: 2000,
  gender: "Male",
  hight: "170",
  print: function() {
    console.log(` this user ${person.name} his born in ${person.birthYear} `);
  },
  old: () => {
    return 2020 - person.birthYear;
  }
};

// Object.keys
console.log(Object.keys(person));
// Object.values
console.log(Object.values(person));

// Object.entries()
for (let [key, value] of Object.entries(person)) {
  console.log(`${key} : ${value} `);
}
// Methods
person.print();
console.log(person.old());
// Object Person. Create an object named person. Loop through the object and print both the property and value of the object.
for (let prop in person) {
  console.log(`person.${prop} : ${person[prop]} `);
}

// Object.assign
const obj1 = { 1: 2, 2: 300 }; // kid
const obj2 = { 1: 4, 3: 3224 }; // parents
const totalObj = Object.assign({ name: "Nancy" }, obj1, obj2); // family
console.log(totalObj);
//Get Values. Create a function that returns an array of all values of an object’s properties.
const getValues = object => {
  return Object.values(object);
};
console.log(getValues(person));
console.log(getValues(car));
// Add A Method. Create an object and add a method to that object which prints the values of the objects in a string.
person.printOut = () => {
  return ` Hi ${person.name}, you are very short ${person.hight}, and also tooo old ${person.birthYear} `;
};
console.log(person.printOut());

//Object.defineProperty()
Object.defineProperty(person, "birthDay", {
  value: 20,
  writable: false
});
person.birthDay = 30;
console.log(person.birthDay);
//Object.defineProperties()
Object.defineProperties(person, {
  p1: {
    value: 33,
    writable: true
  },
  p2: {
    value: {},
    writable: false
  },
  p3: {
    value: "fffff",
    writable: false
  }
});
console.log(person.p3);
console.log(Object.keys(person));
// Create a function that returns an array of properties of a javascript object.
function arrSpliting(str) {
  let arr = str.split("");
  let countObject = {};
  function characterCount(word, character) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] === character) {
        count++;
      }
    }
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    countObject[currentChar] = characterCount(str, currentChar);
  }
  return countObject;
}
//console.log(arrSpliting("هادي"));

function countLetters(str) {
  let arr = str.split("");
  console.log(arr + "Chr Array ");
  let result = {};
  function countOccurrences(string, letter) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === letter) {
        // ABC == B
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; // B
    // the magic line 💪🏻
    result[currentChar] = countOccurrences(str, currentChar); // this is an inner function
  } // ABC , B
  // {
  //  A: 1
  //  B:
  // }

  return result;
}
console.log(countLetters("ABC"));
