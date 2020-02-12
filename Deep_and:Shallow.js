
//-------------------DEEP AND SHALLOW-------------------

//If you have an ARRAY or  an OBJECT within your Array,
// whenever you have an ARRAY or an Object in your ARRAY you
// need to do deep copying, Example:

var deepArray = [["freeCode"]];
var shallowCopy = deepArray.slice(0);

shallowCopy[0].push("is great");
//here i am going to push(introduce) whatever i want into the first array, starting from the index [0]zero, that is going to be placed inside the first array [["freeCode"]], the empty one.

console.log(deepArray[0], shallowCopy[0]);
//result
//[ 'freeCode', 'is great' ] [ 'freeCode', 'is great' ]
//---------------------------------------------------
//playing with copies
// var deepArray = [[["freeCode"]]];
// var shallowCopy1 = deepArray.slice(0);
// var shallowCopy2 = deepArray.slice(0);

// shallowCopy1[0].push("is great");
// shallowCopy2[0].push("and fantastic");

// console.log(deepArray[0], shallowCopy1[0]);
// console.log(deepArray[0], shallowCopy2[0]);

/*RESULT----------------------------------------
[ 'freeCode', 'is great' ] [ 'freeCode', 'is great' ]
[ [ 'freeCode' ], 'is great', 'and fantastic' ] [ [ 'freeCode' ], 'is great', 'and fantastic' ]
*/

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// const car1 = new Car("Eagle", "Talon TSi", 1993);

// console.log(car1.make, car1.model, car1.year);
// // expected output: Eagle Talon TSi 1993
