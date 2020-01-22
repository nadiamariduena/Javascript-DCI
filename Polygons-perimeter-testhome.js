//---------------------------------------
/*
1. Calculate the perimeter of a square. Assume each side is 4.75cm.
2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.

*/

function areaSquare(a, b) {
  console.log(a * b); //The area of square is: w*h
  console.log(2 * (a + b)); //The perimeter of square is: 2 * (w + h)
}

areaSquare(5, 5);
//Output
//25
//20

//

//---------------------------------------

/*ANOTHER OPTION for next exercises in the future
function getArea(a, b, c) {
  // This is a triangle.
  var sideA = 3;
  var sideB = 4;
  var sideC = 5;

  // Return the area of a triangle using Heron's formula

  var semiperimeter = (a + b + c) / 2;
  var calculation = semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c);
  //
  return Math.sqrt(calculation);
}

getArea(sideA, sideB, sideC);
*/
