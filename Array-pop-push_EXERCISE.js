//--------------EXERCISES----------------

/*
*Declare a variable named “euroCities” and assign 
an array to the variable e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
* Declare another variable and 
assign the second item of the array as a value.


*/

const euroCities = ["Paris", "London", "Valleta", "Prague", "Rome"];
let euroCity = euroCities[1];

//2_Change the first item in the array to “Berlin”.

euroCities[0] = "Berlin";
console.log(euroCities);
//result
//see... Paris is not longer the first but Berlin
//[ 'Berlin', 'London', 'Valleta', 'Prague', 'Rome' ]

//3_Print the length of the array “euroCities”.
console.log(euroCities.length);
//result: 5

//4_-----------------
//Remove the last item of the array “euroCities”.
euroCities.pop();
console.log(euroCities);
//result
//rome is not longer there
//[ 'Berlin', 'London', 'Valleta', 'Prague' ]

//5_-----------------
//Use an array method to add “Budapest” to the euroCities array.

euroCities.push("Budapest");
console.log(euroCities);
//result
//Budapest is added
//[ 'Berlin', 'London', 'Valleta', 'Prague', 'Budapest' ]

//6_-----------------
//Create another variable named asianCities and assign
//an array of at least 5 cities to the variable.

const asianCities = ["Hong Kong", "Tokyo", "Taiwan", "Manila", "Dubai"];
//      //               //0         //1     //2       //3       //4

//7-----------------
// Use an array method to select items 2-4 from the array of
//asianCities and store this in another variable.

let newArray = asianCities.splice(1, 3);
console.log(newArray);
//ALWAYS create a new variable array to do this
//result
//[ 'Tokyo', 'Taiwan', 'Manila' ]
//it takes the first and the end.

//---new---***------------------------------

//ARRAY.JOIN------------------------------------
//split to separate
//join to join

/*
const arraySting = ["This", "is", "array", "was", "string"];
let stringToarr = arraySting.join();
console.log(stringToarr);
//result
//This,is,array,was,string
//it will put all together without spaces
*/

/*

const arraySting = ["This", "is", "array", "was", "string"];
let stringToarr = arraySting.join(" ");
//if i add an space between the comillas,it will make an space between words
console.log(stringToarr);

*/
//result
//This is array was string
//----------------------------------------------



/*-------------------2EXERCISE--------------------------------------------
//1_
//sumOfNumbers. Create a program that adds up the numbers
// in an array (of at least 3 numbers). Bonus: Print to screen both the
//sum and the product of these numbers.

let intArr = [2, 4, 5, 7];
let result = 0;
let product = 1;
for (let i = 0; i < intArr.length; i++) {
  result += intArr[i]; // 2+4+5+4= 18
  product *= intArr[i]; //2x4=8x5=40x7= 280.
}
console.log(
  `The sum for your Array is ${result}, The product for your Array is ${product}.`
);
//

//result
//The sum for your Array is 18, The product for your Array is 280.
-----------------------------------------------------------------*/

/*---------------------------------------------------------------
//2__
// Hello Frien Create an array filled with your friends’ and family’s names. 
//Loop over the array and greet each friend e.g. Hello Maria! Hello Mike! etc. 
//Bonus: Print the indexes of each item in the array. Expected output example: 
//Mike is at index 1 of my friends array.
const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++) {
  console.log(`Hello ${names2[i]}, and he is index ${i} of Names array`);
}


const names2 = ["Hadi", "Ali", "Olga", "Nancy"];
for (let i = 0; i < names2.length; i++) {
  console.log(`Hello ${names2[i]}, and he is index ${i} of Names array`);
}
*/
//result
/*-----first option
Hello Hadi, and he is index 0 of Names array
Hello Ali, and he is index 1 of Names array
Hello Olga, and he is index 2 of Names array
Hello Nancy, and he is index 3 of Names array

*/
/*-----secondoption-
const namu = ["Helo", "hala", "hihi", "fooo"];
for (let vo = 1; vo < namu.length; vo++) {
  console.log(`Hi ${namu[2]}, and jump index ${vo} of roses`);
}
//result

 // ${namu[2]} tells the element inside the array i want to show
 //  for (let vo = 1; ---- tells from where i want it to be started, 0 1 2 or 3
  but i can change that adding a 1 for example 



Hi hihi, and jump index 0 of roses
Hi hihi, and jump index 1 of roses
Hi hihi, and jump index 2 of roses
Hi hihi, and jump index 3 of roses

-------------------------------------------------------------------*/

//

// City Names. Create an array of city names. Loop through the
//array and add the city names to a string. Example of expected
//output: Berlin, Paris, Prague, Rome.
/*
const cityNames = ["Berlin", "Paris", "London", "Dubai"];
let cityNamesStr = ""; //empty string for empty space
//

for (let i = 0; i < cityNames.length; i++) {
  //now i want to grab each and every individual index
  // from that array and add it to my string.
  //my string name is cityNamesStr
  cityNamesStr += cityNames[i];
  if (i == cityNames.length - 1) {
    //the -1 means it will start from cero
    cityNamesStr += ".";
    //means, only if you reach the last caracter add a 'dot'
  } else {
    //if it dont reach the last character add a coma, this is why you have comas in between
    cityNamesStr += ", ";
  }
}
console.log(cityNamesStr);
------------------
--------------------second try
const cityParadises = ["Berlin", "Paris", "London", "Dubai"];
let cityParadisesStr = "";

for (let i = 0; i < cityParadises.length; i++) {
  cityParadisesStr += cityParadises[i];

  //
  if (i == cityParadises.length - 1) {
    cityParadisesStr += ".";
  } else {
    cityParadisesStr += ", ";
  }
}
console.log(cityParadisesStr);

*/

//------3
//-------------------------------------------------------
// Odds and Evens. Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:[3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
/*
let numArr = [2, 3, 1, 4, 5]; // result => 1,4,2,3,6
let newNumArr = [];
let int = 0;
for (let i = 0; i < numArr.length; i++) {
  int = numArr[i];
  if (int % 2 !== 0) {
    //if the number divided by 2 and the remainder was 0
    int++;
    //increase and then pushed to the array
    newNumArr.push(int);
  } else {
    int--;
    //decrease and then pushed to the array
    newNumArr.push(int);
  }
}
console.log(numArr);
----------------------------------------------------------*/
//---------------------------------------------------------

/*

//------------------CAPITALIZE--------------
// Capitalize. Create a program that capitalises the first letter of each element in an array of names. Examples:
// [“matt”, “sArA”, “lara”] ➞ [“Matt”, “Sara”, “Lara”]
// [“samuel”, “MARIA”, “luke”, “mary”] ➞ [“Samuel”, “Maria”, “Luke”, “Mary”]
// [“Cynthia”, “Karen”, “Jane”, “Carrie”] ➞ [“Cynthia”, “Karen”, “Jane”, “Carrie”]
const arrNames = ["sara", "ali", "naNCy"];
for (let i = 0; i < arrNames.length; i++) {
  arrNames[i] = // sara
    arrNames[i][0].toUpperCase() + arrNames[i].substr(1).toLowerCase();
}
console.log(arrNames);
---------------------------------------------------------------*/

//----------------------CALEB CURRY YOUTUBE--------------------
//the things inside the array are called elements
//every single elemt get an index
//the first item has an index of cero even if it says 1 ,
//the second will be 1 even if it two etc etc
//EXAMPLE
// 0   1   2
//[ 12, 34, 15 ]
//here you can see how it works.

//If i wanted to take number 15, i can just put [2] and will
//be getting the number 15.

//-----------------------
//ARRAY.LENGTH
//length is a property, this property is going to tell us
//how longs the array is.

//in this situation its going to tell us its 3:
//[ 12, 34, 15 ]

/*you have to keep in mind that the index is always 
one number less than the number of elements


the length in this case is 3 but the highest index is 2
// 0   1   2
//[ 12, 34, 15 ]
So make sure you are not going i = 3 but you are 
going to stop at i = 2

so you can always use .length -1
so if you use ages.length - 1, its going to use the last 
elemnent in this case 2
// 0   1    2
//[ 12, 34, 15 ]


You can assign a value to an index that doesnt exist
so if i added a variable with the following value:

ages.length = 101 //incrementation
ages[100] = "Hey" //variable

the length of this is going to increment by 1 but
why 1 ?Because the length is always going to be at least 1 more 
than the highest INDEX in this case ages[100]



//USING ARRAYS
let grades = [12, 43, 432];
console.log([]);


//
when you use arrays inside the
 console log and inside parentheses,
 its actually there to grab some element
  inside the array
  
  for example , if i want to grab the 
  second element i should add 1:
let grades = [22, 43, 432];
console.log([1]);

**IT doesnt havee to be just numbers, 
, you can put a string, an object, function
for example:


it dont work but the result is : Hello
{
  let grades = [
    22,
    "gh",
    {},
    function() {
      console.log("hello");
    }
  ];
  grades[3](); //you call it using the brackets to the side of the 3
}
}


  */
