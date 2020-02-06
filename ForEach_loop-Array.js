
//In this example i am going to program the following to choose a
//age over 21 that can drink, if i added 10 to the: if (ages[i] >= 10)
//SO if i added 10, it s going to choose all the ages over 10 that exist inside the array
// this below has to do with the next example

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 45, 25, 64, 32];

let canDrink = [];
for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 10) {
    //>= ... greater or equal than 21
    canDrink.push(ages[i]);
  }
}
console.log(canDrink);

//--------------FOR EACH - LOOP - ETC-----------------------------------



const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  { name: "Company ten", category: "Retail", start: 1982, end: 1959 }
];

//FOR EACH
//is a better way to loop through an ARRAY, than using like a "for loop..."
/*it doesnt RETURN anything back to you, like something of the other ones DO,
 but it s a much WISER and ELEGANT way to look at data*/

//1 create a STANDARD LOOP to compare between this and the second loop:

//AS long as i is < less than companies,which is the array above...
/*for (let i = 0; i < companies.length; i++) {
  //As long it s less THAN the number of companies in that ARRAY...companies.length;
  //I want to increment by one to each iteration...i++
  //Now console.log each companie
  //****important***  console.log(companies);
  //without the i console.log(companies); the result will be ...
  //a repetition of 10 times the whole block of companies, 10 because there are ten lines of companies
  //if i added 11 etc it will show me that amount, now ADD the i to stop that from appearing
  //as i only want to see the ten lines and not ten blocks with ten lines each.
  console.log(companies[i]);
}*/
/*The other way
In the first line of the forEACH, i can also add:
companies.forEach(function(company, index, companies)

*/
companies.forEach(function(company, index) {
  console.log(company.category);
});

/*RESULT

{ name: 'Company One', category: 'Finance', start: 1981, end: 2003 }
{ name: 'Company Two', category: 'Retail', start: 1992, end: 2008 }
{ name: 'Company Three', category: 'Auto', start: 1999, end: 2007 }
{ name: 'Company Four', category: 'Retail', start: 1989, end: 2010 }
{
  name: 'Company Five',
  category: 'Technology',
  start: 2009,
  end: 2014
}
{ name: 'Company Six', category: 'Finance', start: 1987, end: 2010 }
{ name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 }
{
  name: 'Company Eight',
  category: 'Technology',
  start: 2011,
  end: 2016
}
{ name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 }
{ name: 'Company ten', category: 'Retail', start: 1982, end: 1959 }


*/

