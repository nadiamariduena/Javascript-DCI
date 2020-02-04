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
