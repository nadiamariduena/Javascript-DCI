function monthCheck(string) {
  //BLOCK1
  let months = [
    "december",
    "january",
    "february",
    "march",
    "april",
    "may",
    "jun",
    "july",
    "august",
    "september",
    "october",
    "november"
  ];

  //BLOCK2-----------
  //declare the seasons
  let seasons = ["winter", "Spring", "Summer", "Autumn"];
  //strToArray = string....will convert all the data inside the strings"months" to...
  //lowercase, but this line is very important when doing...
  //the loop in block...4
  let strToArray = string.toLowerCase().split(" ");
  //declare result
  let result = "";
  //declare if theres not month so equal cero : message of not found
  let counter = 0;
  //----
  //declare the months in winter
  let winter = ["december", "january", "february"];
  let spring = ["march", "april", "may"];
  let summer = ["jun", "july", "august"];
  let autumn = ["september", "october", "november"];
  //---------

  //3 declare IF ELSE inside/FUNCTION------------
  const currentSeason = monthToLook => {
    //var mother of this section
    let seasonName = "";
    //-----CAREFUL--***

    if (winter.includes(monthToLook)) {
      seasonName = seasons[0];
    } else if (spring.includes(monthToLook)) {
      seasonName = seasons[1];
    } else if (summer.includes(monthToLook)) {
      seasonName = seasons[2];
    } else if (autumn.includes(monthToLook)) {
      seasonName = seasons[3];
    } else {
      seasonName = "not found";
    }

    return seasonName; //put the same of the variable before the' if'
  };
  //----------------------------------------------
  //BLOCK---4-------------------------------------

  for (let i = 0; i < strToArray.length; i++) {
    if (months.includes(strToArray[i])) {
      //important line
      let currentWord = strToArray[i];
      //current word is the month, if the word dont match
      //the season it will say something
      result += `You have entered ${currentWord}, 
      which is
       in ${currentSeason(currentWord)}.`;

      counter++;
    }
  }

  //-------------------block5
  if (counter == 0) {
    result = `Sorry i didnt find your text`;
  }
  return result;
}

//-----------------
//6
console.log("monthCheck"); //dont forget the strings otherwise you will get this: [Function: monthCheck]

console.log(monthCheck("hi is november"));
console.log(monthCheck("hi is jun"));

//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//-------------------------THYROID--food--calculator

function carbsCool(string) {
  let carbsAndNoCarbs = [
    "swordfish",
    "salmon",
    "tuna",
    "avocado oil",
    "olive oil",
    "coconut oil",
    "water",
    "coffee",
    "tea",
    "Turkey",
    "chicken",
    "duck",
    "pasta",
    "cereal",
    "beer",
    "rice",
    "bread",
    "grains"
  ];

  let list = ["fish", "seasoning", "beverages", "meat", "toAvoid"];
  let strToArray = string.toLowerCase().split(" ");
  let result = "";
  let counter = 0;

  let fish = ["swordfish", "salmon", "tuna"];
  let seasoning = ["avocado oil", "olive oil", "coconut oil"];
  let beverages = ["water", "coffee", "tea"];
  let meat = ["turkey", "chicken", "duck"];
  let toAvoid = ["pasta", "cereal", "beer", "rice", "bread", "grains"];

  //new function and if else...

  const currentFood = foodsearch => {
    let fooditem = "";

    if (fish.includes(foodsearch)) {
      fooditem = list[0];
    } else if (seasoning.includes(foodsearch)) {
      fooditem = list[1];
    } else if (beverages.includes(foodsearch)) {
      fooditem = list[2];
    } else if (meat.includes(foodsearch)) {
      fooditem = list[3];
    } else if (toAvoid.includes(foodsearch)) {
      fooditem = list[4];
    } else {
      fooditem = "unknown item";
    }

    return fooditem;
  };

  //---------------------------------
  for (let i = 0; i < strToArray.length; i++) {
    if (carbsAndNoCarbs.includes(strToArray[i])) {
      let currentFoodie = strToArray[i];
      result += `You have entered ${currentFoodie},
       which is ${currentFood(currentFoodie)}.`;

      counter++;
    }
  }

  if (counter == 0) {
    result = `Text not found`;
  }
  return result;
}
//-----------------------
console.log("foodsearch");
console.log(carbsCool("this is salmon"));
console.log(carbsCool("this is grains"));
