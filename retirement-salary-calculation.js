//--------------------------------------------------------------

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

//--------------------------------------------------------------
// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy’s age in human years. Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

function calcDogYears(humanYears) {
  const doggoYears = humanYears * 7;
  return `Your doggo is ${doggoYears} years old in dog years and is also the best doggy`;
}
console.log("calcDogYears");
console.log(calcDogYears(9));

// A Lifetime Supply... Create a function to calculate how much you’ll actually be getting for a lifetime supply of your favour snack. The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age. Bonus Accept floating point values for amount per day and round the result.
// i.e.
// calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

function calcLifetimeSupply(age, amount, snack) {
  const maxAge = 100;
  const supplyCalc = Math.ceil((maxAge - age) * 365 * amount);
  // Bonus: round the result of any floating values here
  return `You will need ${supplyCalc} pieces of that ${snack} that you like, (assuming you live until the ripe old age of ${maxAge}. Happy snacking!`;
}

console.log(calcLifetimeSupply(32, 3.58, "chocolate"));

//--------------------------------------------------------------

// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true

function isEqualPieSlices(totalSlices, numOfRecipients, slicesPerPerson) {
  const neededSlices = numOfRecipients * slicesPerPerson;
  return totalSlices >= neededSlices;
}
console.log("isEqualPieSlices");
console.log(isEqualPieSlices(4, 2, 3));
console.log(isEqualPieSlices(4, 2, 2));
console.log(isEqualPieSlices(4, 3, 1));
