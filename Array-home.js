/*let grades = [];
grades[0] = 12;
grades[1] = 43;
grades[40] = 2;
console.log(grades);

//RESULT

[ 12, 43, <38 empty items>, 2 ]


LOOK AT the space between the 40 and the 2, in the
console it indicates you have 38 empty spaces, and that
is because you are adding a big number inside the index
that breaks the order from 0 1 ...etc

compare:
-----------

let grades = [];
grades[0] = 12;
grades[1] = 43;
grades[40] = 2; //40
console.log(grades);

-----------

grades[0] = 12;
grades[1] = 43;
grades[2] = 2;  //2
------------------
*/

//---------complet--------
/*
let grades = [];
grades[0] = 12;
grades[1] = 43;
grades[40] = 2; //40
console.log(grades);

for (let i = 0; i < grades.length; i++) {
  console.log(grades[i]);
}
*/ //RESULT
/*

12
43
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
undefined
2

*/

//Once you add the for and the console log,you can really see
//WHAT I MEAN
//now change it to 2 again
/*
let grados = [];
grados[0] = 12;
grados[1] = 43;
grados[2] = 2; //40
console.log(grados);

for (let j = 0; j < grados.length; j++) {
  console.log(grados[j]);
}
*/
/*//result

[ 12, 43, 2 ]
12
43
2

*/

//In the follwing you can see how
//the arr.length is going to keep only the first
//3 characters of the list of arrays
let arr = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43];

arr.length = 30;
arr[34] = 40; // is just a value that will be annonced as the rest
//of the numbers inside the array, but the 34 is the difference ,
//if you look at the array content , you have 10 characters now count from ten until
//34, its 24
console.log(arr);

//result:
//[ 15, 4, 4, 66, 7, 9, 33, 4, 6, 43, <24 empty items>, 40 ]

/*------------------undefined
//TO TAKE AWAY those 24 undefined characters
we will do the following
*/
/*
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== undefined) {
    console.log(arr[i]);
  }
}
*/
//result
/*
theres not anymore these 24 undefined character
15
4
4
66
7
9
33
4
6
43
40 //correspond to: arr[34] = 40;


*/
//FIND OUT the biggest in this array
/*
let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43];
grades.length = 30;
grades[34] = 40;

let largest = grades[0];
for (let i = 0; i < grades.length; i++) {
  if (grades[i] > largest) {
    largest = grades[i];
  }
}
console.log(largest);
//result 66
*/
