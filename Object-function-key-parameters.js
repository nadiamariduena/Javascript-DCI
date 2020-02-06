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
