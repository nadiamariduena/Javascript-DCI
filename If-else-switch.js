/*Make a variable for firstName and age and give each variable values. 
Create an if/else statement to check whether the person’s age is less than 13. 
If so, print “firstName is a child”. If the age is equal to or more than 13 and 
less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 
and less than 30, then print “firstName is a young adult”. If none of these conditions 
apply, print “firstName is a adult”.*/
/*
var firstName2 = "John";
var age2 = "10";

if (age2 < 12) {
  ("is a child");
} else {
  ("is a teenager");
}
console.log(firstName2 + "" + age2);
*/
//--------
/*
var firstName3 = "Alex";
var age3 = "11";

if (age3 < 12) {
  ("is a child");
} else {
  ("is a teenager");
}

console.log(firstName3 + age3);
*/
/*
var firstName = "Sara";
var age = 15;

console.log(firstName) age < 50 ? "young" : "old";
//result: young

*/
//---------------------------------------
/*
var firstName = "Maria";
var age = 28;

if (age < 13) {
  console.log("${firstName} is a child");
  //
} else if (age >= 13 && age < 20) {
  console.log("${firstName} is a teenager");

  //
} else if (age >= 20 && age < 30) {
  console.log("${firstName} is a young adult");
  //
} else {
  console.log("${firstName} is a adult");
}
*/
//Output
//jonas is a young adult

//

//--------------------------------------
// Set the current grade of the student
//let grade = 87;

// Check if grade is an A, B, C, D, or F
/*if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}
*/
//Output
//B

//-----------------------
//const balance = 500;
//const phone = 600;

// Check if there is enough funds to purchase item
/*if (phone <= balance) {
    console.log("You have enough money to purchase the item!");
} else {
    console.log("You do not have enough money in your account to purchase this item.");
}
*/

/*
if (condition a) {
    // code that will execute if condition a is true
} else if (condition b) {
    // code that will execute if condition b is true
} else if (condition c) {
    // code that will execute if condition c is true
} else {
    // code that will execute if all above conditions are false
}
*/
//

//

//--------------SWITCH------------
//the next version is better to add different
// countries, its easier than
//else if for each code cou
//--------------------------
//i will use SWITCH when i have a concrete answer
//if you write a number of case for example 6,it will bring me to june
/*if i write 13, due to the fact there s no 13, 
it will go automatically to DEFAULT*/

/*
const month = 13;
switch (month) {
  case 1:
    console.log("Jan");
    break;

  case 2:
    console.log("Feb");
    break;

  case 3:
    console.log("Mar");
    break;

  case 4:
    console.log("April");
    break;
  case 5:
    console.log("Mach");
    break;

  case 6:
    console.log("Jun");
    break;

  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  //
  case 10:
    console.log("Oct");
    break;
  //
  case 11:
    console.log("Nov");
    break;
  //
  case 12:
    console.log("Dec");
    break;
  //
  default:
    console.log("This is not real");
}
*/

//-----------exercise----IF-ELSE-----SWITCH----------
/*
const num = 1;
if (num <= 10 && num >= 0) {
  console.log("its num in the range of 0-10");
  //
  //
  if (num == 1) {
    console.log(num);
  }
  if (num == 2) {
    console.log(num);
  }
  if (num == 3) {
    console.log(num);
  }

  //
} else {
  console.log("its not new num");
}

switch (num) {
  case 1:
    console.log(num);
    break;
  //
  case 2:
    console.log(num);
    break;
  //
  case 3:
    console.log(num);
    break;
  //
  case 4:
    console.log(num);
    break;

  default:
    console.log("thi si fun");
}
*/
/*
const color = "Black";
switch (color) {
  case "Pink":
    console.log("cool");
    break;

  case "black":
    console.log("nice");
    break;

  case "white":
    console.log("soo nice");
    break;

  default:
    console.log("nanananan");
}
*/
//

//

//---exercises------------------------------------
//---exercises------------------------------------
//---exercises------------------------------------

/* Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”. */

// else if (<boolean>){ ... }

//switch(<expression>){ ... }
const color = "Black";
switch (color) {
  case "Pink":
    console.log("cool");
    break;
  case "Black":
    console.log("Nice");
    break;
  case "white":
    console.log("sooo nice");
    break;
  default:
    console.log("Noooo that is crazy");
}

let month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("May");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("March");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("This is not real");
}

const x = 33;
switch (x) {
  case -1999.33:
    console.log("fine");
    break;
  case 22.22:
    console.log("this is wrong");
    break;
  case 100000000001:
    console.log("cool");
    break;
  default:
    console.log("So this is not fun or is it !!!");
}

//switch` vs. `else if`
const num = 1;
if (num <= 10 && num >= 0) {
  console.log("it is num in the range of 0-10");
  if (num == 1) {
    console.log(num);
  }
  if (num == 2) {
    console.log(num);
  }
  if (num == 3) {
    console.log(num);
  }
  if (num == 4) {
    console.log(num);
  }
} else {
  console.log("It is new num");
}
switch (num) {
  case 1:
    console.log(num);
    break;
  case 2:
    console.log(num);
    break;
  case 3:
    console.log(num);
    break;
  case 4:
    console.log(num);
    break;
  default:
    console.log("this is fun");
}
/* Let’s play mini FizzBuzz! For any given number, if the number is:
divisible by 3, print “Fizz”.
divisible by “5", print “Buzz”.
divisible by both 3 and 5, print “FizzBuzz”.
That is, if any of the above conditions apply, print the above words instead of the number.
Otherwise, just print the number.  */
const int = "";

if (int % 3 == 0 && int % 5 == 0) {
  console.log("FizzBuzz");
} else if (int % 3 == 0) {
  console.log("Fizz");
} else if (int % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(int);
}
