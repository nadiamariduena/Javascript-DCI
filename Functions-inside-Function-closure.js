
//functions inside functions--------------------

//__a----------------------
//
function main(num, num2) {
    //outer function
    function second(n) {
      // inner function
      return n * n; //3x3 = 9
    } //9              //16
    return second(num) + second(num2);
  }
  console.log(main(3, 4));
  //3x3=9 //4x4=16  ... 9+16=25
  //result:25
  
  //if i wanted to call the private function outside
  //it will say that it s undefined*
  //----------------------------------------------
  //
  //NESTED SCOPES Accessing outer global variables
  //
  const outerFunction = (x, y) => {
    let big = true;
    //i declare a boolean variable
    console.log(big + "outerFunction");
    //then i created another function
  
    const innerFunction = num => {
      big = false;
      console.log(big + "innerFunction");
      return x + 10; //adds 10
    }; //.......3              //.....4
    return innerFunction(x) + innerFunction(y);
  };
  console.log(outerFunction(3, 4));
  //10+3=13 //10+4=14  ... 14+13=27
  //RESULT
  /*
  trueouterFunction
  falseinnerFunction
  falseinnerFunction
  26
  --------------------------------------*/
  //CLOSURE
  function fun() {
    var number = 10;
    return number + number;
  }
  console.log(fun());
  //---------------------
  /*UNSECURE 
  var counter = 0;
  function add() {
    counter += 1;
  }
  add(); //1
  add(); //2
  add(); //1
  counter = 5; //even if i called the function 3 times which 
  //the result is three, if a hacker decided to add this counter
  //here outside of the function, it will totally work , so..
  //that s why you add this inside the function. like in the 
  //following example
  console.log(counter);
  //-----------SECURE1
  function add() {
    var counter = 0;
    counter += 1;
    return counter;
  }
  add(); //1
  add(); //2
  add(); //1
  console.log(add());
  console.log(add());
  //result
  //1
  //1
  */
  function add() {
    var counter = 0;
  
    return () => {
      counter++;
      return counter;
    };
  }
  add(); //1
  add(); //2
  add(); //1
  console.log(add());
  console.log(add());
  //result
  //1
  //1

  //to be continued....
  //-----------------------------
  //--------------

var all = 3;

(() => {
  var all = "HI";
  console.log(all);
})();
console.log(all);
//--------------
*/
/*------------------
var all = 3;

(() => {
  var all = "HI";
  console.log(all);
})();
console.log(all);
---------------------*/

//This is a private function no one can access it !!


(function() {
    //You add brackets at the very beginning 
    //before the function and then at the end.

    console.log("Hi");

  })(); //here you are calling the function 
  //immediately after you closed
  //------another example

  const sum = ((x, y) => {
    return x + y;
  })(4, 5);
  console.log(sum);
  
  //array-------------------------------------
 
  
  //Write a function add that uses a closure that performs
  //addition on arguments in two separate function calls.-------
  
  function add2(a) {
    return function(b) {
      return a + b;
    };
  }
  console.log(add2(2)(3));
  




  //---------------------------
  /*Write a function that accepts several parameters and 
calculates the number of money that will have been saved 
as pension until a person retires. The function should be 
self invoked and should have the following parameters:

The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves 
each month // e.g. 10%


If the person has already retired then the message 
‘You’re already retired!’ should be printed. If not, 
then the program should calculate how many years remain
until the person retires, the monthly income and take a 
specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she 
earns $2000 per month and she saves the 5% of it. 

How much money will she have saved until she retires?
Output: $30000

*/



((currentAge, retirementAge, monthlyWage, percentage) => {
  if (currentAge >= retirementAge) {
    console.log("You are already Old");
  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log(yearsToSave + "years to go");
    let monthsToSave = yearsToSave * 12;
    console.log(monthsToSave + "months to go");

    let amountSaveByMonth = (monthlyWage * percentage) / 100;
    let totalSave = amountSaveByMonth * monthsToSave;
    console.log(
      `you will be old in ${yearsToSave} and you will have ${totalSave}
    in your bank`
    );
  }
})(30, 65, 2000, 50);
//30 of the age
//65 the age of the retirement
//2500 the amount of money to save every month
//5 to the porcentage of the savings every month


/*-----------------------------------------------------------------
// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

const salaryCalculator = (userName, salary, ...args) => {
  let thirtyPercent = 0.3;
  let twentyFivePercent = 0.25;
  let twentyPercent = 0.2;
  let fiftyFivePercent = 0.55;
  let finalSalary = 1;
  for (let i = 0; i < args.length; i++) {
    if (args.length == 0) {
      finalSalary = salary - salary * thirtyPercent;
    } else if (args.length == 1) {
      finalSalary = salary - salary * twentyFivePercent;
    } else if (args.length == 2) {
      finalSalary = salary - salary * twentyFivePercent;
    } else if (args.length > 2) {
      finalSalary = salary - salary * fiftyFivePercent;
    } else {
      finalSalary = "Sorry, something went wrong";
    }
  }
  return `${userName} has ${args.length} kids, so his/her salary after taxes ${finalSalary}€ `;
};
console.log("salaryCalculator");
console.log(salaryCalculator("Ali", 5000, "Zain", "Sandra"));
console.log(salaryCalculator("Olga", 4055, "Zain"));
*/


