/* Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person’s age is less than 13. If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”. If none of these conditions apply, print “firstName is a adult”. */
const firstName = "Ali";

const age = 22;

if (age < 13) {
  console.log(`${firstName} is a child`);
} else if (age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age < 30) {
  console.log(`${firstName} is a young adult`);
} else if (age >= 30) {
  console.log(`${firstName} is an adult`);
} else {
  console.log("Oi, put in a valid numeric age!");
}

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI */

//Q1 Store Mark's and John's mass and height in variables.

const elisaHeight = 1.65;
const elisaMass = 850;

//Q2 Calculate both their BMIs and store their BMIs in variables.

const valeriaHeight = 1.9;
const valeriaMass = 70;

//Calculate both their BMI's
//and store them in variables.

const elisaBMI = elisaMass / (elisaHeight * elisaHeight);
//divide elisaMass then multiplica elisaHeighs for elisaHeights
const valeriaBMI = valeriaMass / (valeriaHeight * valeriaHeight);

//Create a Boolean variable containing
//information about whether
//elisa has a bigger BMI than valeria.

const elisapizzaeater = elisaBMI > valeriaBMI; //because of the > or < whatever i **********
//choose here, it will decide who is fatter than the other*************w.

console.log(elisapizzaeater);

//result: its says false' and thats because the BMI of elisa is less than
//the one of valeria but it doesn't means its good, as it all depends
//one the height but of course here we are just asking the logic
//elisamass is 85 / valeria mass is 120.

//Q4
//Print a string to the console containing the variable
//from step 3 using string
//interpolation. (e.g. "Is Mark's BMI higher than
//John's? Why yes, it's [boolean], it is").

if (elisapizzaeater) {
  console.log(`Elisa's BMI is higher than valeria's`);
} else {
  console.log(`Valeria enjoy summer`);
}

//Q5 Create an *if* statement which prints the name
//and BMI of the person with the highest BMI.

if (elisapizzaeater) {
  console.log(`elisa ${elisaBMI}`);
} else {
  console.log(`Valeria ${valeriaBMI}`);
}
