//EXPLANATION------------------first loop jeudi/16/01/2020
//to copy and paste from the terminal
/*
In the Terminal, Ctrl+C is the cancel command. Use these in the terminal instead:
To cut Ctrl + Shift + X.
To copy Ctrl + Shift + C.
To paste Ctrl + Shift + V.

----------
shift-strg+backtick = to open terminal in visual studio code

------
BACKTICK: shift+backtick ´ = ``
------

In the following example, the code in the loop will 
run, over and over again, as long as a variable (i) 
is less than 10:

while (i < 10) {
  text += "The number is " + i;
  i++;
}
If you forget to increase ++ the variable used in the
condition, the loop will never end. This will crash 
your browser.

*/

let x = 3;
if (x <= 10) {
  x += 1;
} else {
  x -= 1;
}
console.log(x);
//result 4
//if it looks like this in the second line <= , the result
//will  be 4,and that is because 4  es menos que 10.
//Debido a esto ese resultado,se sumara 'uno' al tres :'x += 1'.
//----**
//result 2
//if it looks like this in the second line >= , the result
//will  be 2,and that is because 3 no es bigger than 10, y que
//el else indica que si no es cierto se restara 3-1=2.

if (x <= 10) {
  x += 1;
}
/*The while loop loops through
 a block of code as long as a specified condition is true.
 
 WHAT IT DOES?
 it works a bit like if/else, but actually it says:
--- WHILE this (condition) is true, always execute this code!!.---
 while (condition) {

/*
So what is going to happen in the following example?
Due to the fact that the age of the boy is 5 plus the one
that is going to be added with the ++ ,
its going to check if the age is still under 10 ,if  6 is less than 10, run 
the following show 5 times "You re now less than 10", its going repeat the cheking
until it reaches the 10, once it reaches the 10, it will
show ("you are now over 10").

*/
//-------------------------
var age = 5;
while (age < 10) {
  console.log("You re now less than 10");
  age++;
}

console.log("you are now over 10");

//-------------------------

while (x <= 10) {
  //i am going inside of this loop, i will repeat whatever
  //written in that bracket nest, javascript
  //will continue repeating this until the
  //condition is faulty = 'false'
  //there s two important rules
  //the condition which obviously,will let you go inside the loop
  //till is not truthy and the increment = ++
  //if i do console log in the following way, it will be forever
  //CAREFUL some machines cant handle the amount of information.

  console.log(x);
  //TO PREVENT this kind of "out of control behavior"
  //i will increase my x by 1 by doings the following : x++
  x++;
}
//what  this will do, is check the first line on top : let x = 3;
//detect from where its going to start the loop, it says 3, so the loop
//will start from 4 until it reaches 10,like this:
/*
4
5
6
7
8
9
10
  */
//but why 10? because of this: if (x <= 10)
//ACTUALLY it goes until 11 but we dont see it. the x++ means the increment of a number.
//important, dont forget to declare a variable outside the loop and
//dont forget to add the ++ or -- increment or decrement,otherwise it will break*************IMPORTANT!!
//the machine with all the information

//NOW lets print a name 10 times-----------exercise

let mo = 1; //declare the variable and the value
while (mo <= 10) {
  //chose how many times you want it printed
  console.log("flower"); //chose what you want to print
  mo++;
}
//result:
/*
flower
flower
flower
flower
flower
flower
flower
flower
flower
flower
*/
//LOOK what happens if we start from 0

let pasa = 0; //declare the variable and the value
while (pasa <= 10) {
  //chose how many times you want it printed
  console.log("cloud"); //chose what you want to print
  pasa++;
}

/*
cloud
cloud
cloud
cloud
cloud
cloud
cloud
cloud
cloud
cloud
cloud

11 times 

*/

//++ INCREASE
//-- DECREASE

//
//---------------

let cow = 1;
while (cow <= 5) {
  //put what you want inside the scoop, the scoop is everything that goes inside the brackets
  console.log("muuuhhh"); //it will repeat 5 times muuuhhh
  cow++; //you mostly see the increment or decrement at the end of the process
}

/*-----------------------------------------------
let soleil = 1;
let result = 1;
while (soleil <= 10) {
  console.log(`${soleil} * 9 = ${result}`);
  soleil++;
}
*/
//RESULT
/*
1 * 9 = 1
2 * 9 = 1
3 * 9 = 1
4 * 9 = 1
5 * 9 = 1
6 * 9 = 1
7 * 9 = 1
8 * 9 = 1
9 * 9 = 1
10 * 9 = 1
---------------------------------------------------*/

//--------------------------------------------------
//------------MULTIPLICATION--table-----------------***
//beware of the backtick otherwise it wont work (`)

let mars = 1;
let result = 1; //this variable has comme purpose the equals of the result
while (mars <= 10) {
  result = mars * 9;
  console.log(`1 * 9 = ${result}`);
  mars++;
}
//result
/*
1 * 9 = 9
1 * 9 = 18
1 * 9 = 27
1 * 9 = 36
1 * 9 = 45
1 * 9 = 54
1 * 9 = 63
1 * 9 = 72
1 * 9 = 81
1 * 9 = 90
*/
//----IMPORTANT!!----
//WHAT HAPPENS if i move the increase operator on the top?

let neptuno = 1; //if i put 0, the tabla will start from 1 * 9, if i put 1, it will start from 2: 2 * 9 =
let output = 1; //this variable has comme purpose the equals of the result
while (neptuno <= 10) {
  neptuno++; //********i changed this, compare the previous version *******/
  output = neptuno * 9;
  console.log(`${neptuno} * 9 = ${output}`); //********i changed this, compare the previous version -**/
}
//RESULTADO
/*
//if you notice the change, it started with two instead of one even if both variables have 1 for values, 
//that is because i added the increment ***mars++;** before the calculation, due to this result it s adviced
//to add the increment at the end.

2 * 9 = 18
3 * 9 = 27
4 * 9 = 36
5 * 9 = 45
6 * 9 = 54
7 * 9 = 63
8 * 9 = 72
9 * 9 = 81
10 * 9 = 90
11 * 9 = 99
*/

/*---------this will show the tabla division del 20


let  = 1;
let result = 1;
while (y <= 10) {
  result = y / 20;
  console.log(`${y} / 20 = ${result}`);
  //console.log("1 * 9 = ${result}");
  y++;
}
*/

//beware of the backtick otherwise it wont work (`)
let rose = 1;
let resultado = 1;
//The while loop loops through
// a block of code as long as a specified condition is true.
while (rose <= 10) {
  resultado = rose / 20;
  console.log(`${rose} / 20 = ${resultado} `);
  rose++;
}

//------------------------------------------------------------//
//------------------------------------------------------------//
//-------------------TEST-SCHOOL--------------//

//------------------------------------------------------------//

/*

let x = 3;
if (x <= 10) {
  x += 1;
} else {
  x -= 1;
}
console.log(x);
//result 4



if (x <=) {
    x += 1;
}

while(x<= 10) {
    console.log('Hadi');
    x++;
}
*/

/*--------this will show the tabla division del 20


let y = 1;
let result = 1;
while (y <= 10) {
  result = y / 20;
  console.log(`${y} / 20 = ${result}`);
  //console.log("1 * 9 = ${result}");
  y++;
}
*/

/*-------2 LOOP---this is from the book--with advice from the teacher
important, dont forget to declare a variable outside the loop and
//dont forget to add the ++ or -- increment or decrement,otherwise it will break
//the machine with all the information


for (var i = 0; i < 10; i++) {
  console.log(i);
}
*/
/*
let count = 15;
while (count >= 0) {
  console.log("this num is ${count}");
  count--;
}*/

//-----
/*
let a = 100;
do {
  console.log(a);
  a++; // a = a + 1
} while (a <= 100);
*/

//------------
/*
let zara = 15;
do {
  console.log("there is ${zara} on the line");
  zara--;
} while (zara >= 0);
*/
//------------

///---------------
/*
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/
///the result will be :  0 , 2 , 4 , 6 , 8 , 10 -----------

//--------------------------
/*
let box = "";
for (let i = 0; i <= 4; i++) {
  box += "YYYY \n";
}
console.log(box);
*/
//result
// YYYY
// YYYY
// YYYY
// YYYY

//---------------------

/*---------------------

// var, let, const
let firstName = "Hadi";
let firstName1 = "Ali";
let firstName2 = "Olga";
let arrVar = [firstName, firstName1, firstName2];
let arr = ["Hadi", "Ali", "Olga", "Nancy"];
console.log(arr[2]);
let arrInt = [1, 2, 3, 4, 5, 6];
console.log(arrInt[3]);



//this isnt difficult, just count from cero to the position of the element you want for example:
//i would like  Ali to be shown, i tell the 'Arr' i want number 1 ,so i will execute the following:
//console.log(arr[1]); instead of console.log(arr[2]); the same with the other:
//console.log(arrInt[6]); instead console.log(arrInt[3]); 
//i reach the number i want by counting from zero so 6 is 5.


//---------------------
*/

/*
let arrNum = ["First", "2nd", "3rd", "4th"];
//console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}
//result
0 is the First
1 is the 2nd
2 is the 3rd
3 is the 4th
*/

//----------------------

/*
for (let index = 100; index <= 1000; ) {
  console.log(index);
  index += 100;
}

*/
//control+d + hover to selecte the item you want to change double,
//control+D: serves to change multiple variables at the same time
/*


for (let run = 100; run <= 1000; ) {
  console.log(index);
  index += 100;
}
*/
/*
for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    //if i was equal to 30
    break;
    //You can interrupt a for loop using break
//You can fast forward to the next iteration of a for loop using continue
  }
  console.log(i);
}
*/

/*
let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("that is it");
    break;
  }
  if (w == 20) {
    xx = true;
  }
}

//result: that is it

//
/*
let result2 = 0;
for (let i = 1; i <= 10; i++) {
  result2 = i * 3;
  console.log("${i} * 3 = ${result2}");
}
*/
//------NESTED LOOPS
/*
let result2 = 0;
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    result2 = i * j; // 2 * 1
    console.log("i ${i} * j ${j} = ${result2}");
  }
}
*/
/*
let str = "this is a long test";
for (let i = 0; i < str.length; i++) {
  console.log(`The ${i} letter is ${str[i]} `); //beware of the backtick otherwise it wont work (`)
}
*/

//result: this will show you the position of the letters, example:

//the 0 letter is t
//the 1 letter is h
//the 2 letter is e
//etc etc until the whole sentence is complet
//at the end it will show an undefined, this the teacher will asnwer in few weeks
//if i want to remove the undefine, i have to take away the = inside the line : for (let i = 0; i < str.length; i++)
//specially this: <= so instead of that ,just add < et voila, no ore undefined at the end.

/*




//-------------EXERCISES-------------------MIDI
//
//
Addition. Write a program to add up the numbers 1 to 20.

*/
/*
for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    //if it was equal to 30
    break;
  }
  console.log(i);
}

//result: it will count until 29, even if it says 30 

0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
*/
//----------------------EXERCISE--------------------------------------------
//_2_ There are i bottles of beer on the wall. Write a program that will output,
//“There is one bottle of beer on the wall.”
// “There are two bottles of beer on the wall” up until there are five bottles.

//beware of the backtick otherwise it wont work (`)

//some trouble with the backtick
/*
let = "of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i == 1) {
    console.log("There is ${i} bottle ${text}");
  } else {
    console.log(`There are ${i} bottles ${text}`);
  }
}
*/
//

//-----------------good

//The odd/even reporter. Write a program that will iterate from 0 to 20.
//For each iteration, it will check if the
// current number is even or odd, and report that to the screen (e.g. “2 is even”).
/*
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/
///the result will be :  0 , 2 , 4 , 6 , 8 , 10 , 12, 14 , 16 , 18 , 20-----------
/*
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else if (i % 2 == 1) {
    console.log(`${i} is odd`);
  }
}
console.log(`Thanks`);
*/
/*
//result:
0 is even 
1 is odd
and that until 20 and than say... thanks


//
//7tricks

//print name 10 times
for (let i = 0; i <= 10; i++) {
    console.log(`Hadi \n`.repeat(10)); //saying DOT repeat .repeat(10)
  }  //it will print 10 blocks of two lines of hadis name
  */

//2
/*
let counterSum = 0;
for (let i = 1; i <= 20; i++) {
  counterSum += i;
}
console.log(counterSum);
*/
//result: 210

//
/*
let box = "";
for (let i = 0; i <= 6; i++) {
  box += "YYYY \n";
}
console.log(box);
*/
//result it will print it 6 times the Y

//

//
//NEW EXERCISE-----------------

/*
// 1, 2, 4, 8... 128
// 0, 2, 4... 10
// 3, 6, 9 ... 15
// 9, 8, 7... 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/
//1-----------------
//result: it will count until 129, yes it says 128 but it will count until 129
/*
for (let i = 0; i <= 129; i++) {
  if (i == 129) {
    //if i was equal to 30
    break;
  }
  console.log(i);
}*/

//2----------- Even------
//*************** */
/*
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
*/
//----------- Odd------
/*
for (let i = 3; i <= 15; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}
*/

//*************** */

/*
// 1, 2, 4, 8... 128
// 0, 2, 4... 10
// 3, 6, 9 ... 15
// 9, 8, 7... 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/

//3-----------------
/*let box = "";
for (let i = 0; i <= 6; i++) {
  box += "YYYY \n";
}
console.log(box);
*/
//result it will print it 6 times the Y
/*-------------------DOT---REPEAT------------------------REPEAT
for (let i = 0; i <= 10; i++) {
  console.log(`Hadi \n`.repeat(2)); //saying DOT repeat .repeat(10)
  //it will print 10 blocks of two lines of hadis name
}
*/

/*let box = "";
for (let i = 0; i <= 6; i++) {
  box += "YYYY \n";
}
console.log(box);
*/
/*
for (let i = 0; i <= 10; i++) {
  if (i == 10) {
    //if i was equal to 30
    break;
  }
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i}`);
  } else if (i % 2 == 1) {
    console.log(`${i}`);
  }
}
*/
/*
//result:
0 is even 
1 is odd
and that jusque 20 and than say thank
*/

//this is how instagram neverending scroll or tinder works
/*
let arrNum = ["First", "2nd", "3th", "4th"];
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}
*/
//result
//0 is the First
//1 is the second

//--------------
/*
let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i; // arrSt[0] = 2 + 0
  console.log(arrSt);
}
*/
/*-------------------------------------
let neptuno = 1;//if i put 0, the tabla will start from 1 * 9, if i put 1, it will start from 2: 2 * 9 =
let output = 1; //this variable has comme purpose the equals of the result
while (neptuno <= 10) {
  neptuno++; //i changed this, compare the previous version/
  output = neptuno * 9;
  console.log(`${neptuno} * 9 = ${output}`); //i changed this, compare the previous version/
}*/
//RESULTADO
/*
//if you notice the change, it started with two instead of one even if both variables have 1 for values, 
//that is because i added the increment ***mars++;** before the calculation, due to this result it s adviced
//to add the increment at the end.

2 * 9 = 18
3 * 9 = 27
4 * 9 = 36
5 * 9 = 45
6 * 9 = 54
7 * 9 = 63
8 * 9 = 72
9 * 9 = 81
10 * 9 = 90
11 * 9 = 99
-----------------------------------------*/
/*
let count = 10;
while (count >= 0) {
  console.log(`this num is ${count} `);
  count--;
}
*/
//it will count on reverse like this:
/*
this num is 10 
this num is 9 
this num is 8 
this num is 7 
this num is 6 
this num is 5 
this num is 4 
this num is 3 
this num is 2 
this num is 1 
this num is 0 

*/
//-------------------------
/*
So what is going to happen in the following example?
Due to the fact that the age of the boy is 5 plus the one
that is going to be added with the ++ ,
its going to check if the age is still under 10 , so 6 is less than 10, run 
the following "You re now less than 10", its going repeat the cheking
until it reaches the 10, once it reaches the 10, it will
show ("you are now over 10")

*/

/*
var age = 5;
while (age < 10) {
  console.log("You re now less than 10");
  age++;
}

console.log("you are now over 10");
----------------------------------------*/
/*
let box = "";
for (let i = 0; i <= 6; i++) {
  box += "Y\nYY\nYYY\nYYYY\nYYYYY\nYYYYYY\nYYYYYYY";
 break;
}
console.log(box);
*/
/*--------------------------------------
/*
let box = "";
for (let d = 0; d <= 6; d++) {
  box += "YYYY \n aaaaaa";
  break;
}
console.log(box);
//result

YYYY 
 aaaaaa


*/
/*
for (let i = 0; i <= 40; i++) {
  if (i == 30) {
    //if i was equal to 30
    break;
  }
  console.log(i);
}
*/

//by pressing shift+backtick
/*
let result2 = 0;
for (let i = 1; i <= 10; i++) {
  //if i put 9 instead of 10,it will count the tables just 9 times
  for (let j = 1; j <= 10; j++) {
    //if i put 8 instead of ten it will count just from 1 until 8, like this:
    /*
     9 * 1 = 9
      9 * 2 = 18
      9 * 3 = 27
      9 * 4 = 36
      9 * 5 = 45
      9 * 6 = 54
      9 * 7 = 63
      9 * 8 = 72

    */
/*
    result2 = i * j; // 2 * 1
    console.log(` ${i} * ${j} = ${result2}`);
  }
}*/
/*---------------no a good way---------------------
let box = "";
for (let i = 0; i <= 2; i++) {
  box += "Y\nYYYY\nYYYYY\nYYYYYY\nYYYYYYYYY\nYYYYYYYYY\nYYYYYYYYYY";
}
console.log(box);
*/

//
/*
let arrNum = ["First", "2nd", "3rd", "4th"];
//console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}
//result
0 is the First
1 is the 2nd
2 is the 3rd
3 is the 4th
*/
/*------------------------*/

/*let str = "SSS\n is a long test";
for (let i = 0; i < str.length; i++) {
  console.log(`${str[i]}`); 
}
*/
//result: this will show you the position of the letters, example:

//the 0 letter is t
//the 1 letter is h
//the 2 letter is e
//etc etc until the whole sentence is complet
//at the end it will show an undefined, this the teacher will asnwer in few weeks
//if i want to remove the undefine, i have to take away the = inside the line : for (let i = 0; i < str.length; i++)
//specially this: <= so instead of that ,just add < et voila, no ore undefined at the end.

//------------------------------
/*
let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 22 + i; // arrSt[0] = 2 + 0
  console.log(arrSt);
}
*/

//result
/*
[ 2 ]
[ 2, 3 ]
[ 2, 3, 4 ]
[ 2, 3, 4, 5 ]
[ 2, 3, 4, 5, 6 ]
[ 2, 3, 4, 5, 6, 7 ]
[
  2, 3, 4, 5,
  6, 7, 8
]
[
  2, 3, 4, 5,
  6, 7, 8, 9
]
[
  2, 3, 4,  5, 6,
  7, 8, 9, 10
]
[
  2, 3, 4,  5,  6,
  7, 8, 9, 10, 11
]
[
   2, 3, 4,  5,  6,
   7, 8, 9, 10, 11,
  12
]


*/
/*
for (var i = 0; i <= 10; i++) {
  console.log("Y".repeat(i));
}
*/

/*
let box = "";
for (let i = 0; i <= 6; i++) {
  box += "Y\nYY\nYYY\nYYYY\nYYYYY\nYYYYYY\nYYYYYYY";
 break;
}
console.log(box);

//result
Y
YY
YYY
YYYY
YYYYY
YYYYYY
YYYYYYY
YYYYYYYY
YYYYYYYYY
YYYYYYYYYY
*/
/*
for (var i = 1; i <= 10; i++) {
  console.log("*".repeat(i));
}

*
**
***
****
*****
******
*******
********
*********
**********


*/

/*
let box = "";
for (let d = 0; d <= 6; d++) {
  box += "YYYY \n aaaaaa";
  break;
}
console.log(box);
//result

YYYY 
 aaaaaa


*/
//------------------------INTERNET----------------------------//
//------------------------INTERNET----------------------------//
//------------------------INTERNET----------------------------//

/*
for (var i = 1; i <= 10; i++) {
  //i value is 1, if i is less or equal than 10, than print *star 10 times..hence ++ increment
  console.log("*".repeat(i));
}
for (var k = 10; k >= 1; k--) {
  //K value is 10; if k is greater or equal to 1, than print J 10 times backwards due to the "decrement".
  console.log("j".repeat(k));
}

//again***********
for (var i = 1; i <= 10; i++) {
  console.log("*".repeat(i));
}
for (var k = 10; k >= 1; k--) {
  console.log("j".repeat(k));
}
//result

*
**
***
****
*****
******
*******
********
*********
**********
jjjjjjjjjj
jjjjjjjjj
jjjjjjjj
jjjjjjj
jjjjjj
jjjjj
jjjj
jjj
jj
j

*/

/*
for (let i = 0; i < 5; i++)
  console.log("    *********".substring(i, 5 + 2 * i)); 
  //i dont understand why the space inside the stars count,
//isn't there a mathematical way to sort this out?

for (let i = 5; i > 0; i--)
  console.log("     **********".substring(i - 1, 5 + 2 * i - 3));

//result


    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
    
*/
//------------------------INTERNET----------------------------//
//------------------------INTERNET----------------------------//
//------------------------INTERNET----------------------------//

/*
for (i = 0; i < 5; i++) {
  console.log("Hello World");
}
//result

Hello World
Hello World
Hello World
Hello World
Hello World
------------

for (let r = 1; r <= 27; r++) {
  if (r % 2 !== 0) console.log(r);
}
//result
1
3
5
7
9
11
13
15
17
19
21
23
25
27
odd numbers

------------

for (let g = 5; g >= 1; g--) {
  if (g % 2 !== 0) console.log(g);
}
//result
5
3
1
odd numbers a l envers

-------------------
var numbers = [10, 20, 30, 40, 50];
for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
//result

10
20
30
40
50

*/

for (let jj = 0; jj < 10; jj++) {
  for (let mm = 0; mm < 10; mm++) {
    console.log(jj, mm);
  }
}

/*
each index goes from 0 til 10 then start the second round theres
10 times 0 ,ten times 1 etc etc

0 0
0 1
0 2
0 3
0 4
0 5
0 6
0 7
0 8
0 9
1 0
1 1
1 2
1 3
1 4
1 5
1 6
1 7
1 8
1 9
2 0
2 1
2 2
2 3
2 4
2 5
2 6
2 7
2 8
2 9
3 0
3 1
3 2
3 3
3 4
3 5
3 6
3 7
3 8
3 9
4 0
4 1
4 2
4 3
4 4
4 5
4 6
4 7
4 8
4 9
5 0
5 1
5 2
5 3
5 4
5 5
5 6
5 7
5 8
5 9
6 0
6 1
6 2
6 3
6 4
6 5
6 6
6 7
6 8
6 9
7 0
7 1
7 2
7 3
7 4
7 5
7 6
7 7
7 8
7 9
8 0
8 1
8 2
8 3
8 4
8 5
8 6
8 7
8 8
8 9
9 0
9 1
9 2
9 3
9 4
9 5
9 6
9 7
9 8
9 9

*/
