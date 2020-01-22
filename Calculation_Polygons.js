//-------------------------CALCULATION---POLYGONS-------------------
//1. Calculate the perimeter of a square. Assume each side is 4.75cm.

const sqSideLength = 4.75;
const sqPerimeter = sqSideLength + sqSideLength + sqSideLength + sqSideLength;
console.log(`Perimeter of square = ${sqPerimeter}cm`);

//2. Calculate the perimeter of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
const triPerimeter = 5 + 6 + 7;
console.log(`Perimeter of triangle = ${triPerimeter}cm`);

//3. Calculate the area of a square. Each side is 5cm.
const sqArea = 5 * 5;
console.log(`Area of square = ${sqArea}cm²`);
//
//---------------------------
//4. Calculate the area of a triangle. Assume the length of the sides are 5cm, 6cm, 7cm.
// Heron's Formula
const triSideLength1 = 5;
const triSideLength2 = 6;
const triSideLength3 = 7;
const halfPerimeter = (triSideLength1 + triSideLength2 + triSideLength3) / 2;
const areaTriangle = Math.sqrt(
  halfPerimeter *
    (halfPerimeter - triSideLength1) *
    (halfPerimeter - triSideLength2) *
    (halfPerimeter - triSideLength3)
);
console.log(`Area of triangle = ${areaTriangle}cm²`);
//result
//Area of triangle = 14.696938456699069cm²
//--------------------------------------------------------------

//5. Calculate the volume of a cube. Length of each side is 9cm.
const cubeSideLength = 9;
const cubeVol = cubeSideLength * cubeSideLength * cubeSideLength;
console.log(`Volume of cube = ${cubeVol}cm³`);
//result
//Volume of cube = 729cm³
//--------------------------------------------------------------

//6. Calculate the three bills including tips:
//€22.35 + 10% tip
//€26.67 + 15% tip
//€35.92 + 20% tip
const billOne = 22.35;
const billTwo = 26.67;
const billThree = 35.92 + 35.92 * 0.2;
const tenPercentTip = 1.1;
const fifteenPercentTip = 1.15;
const twentyPercentTip = 1.2;
console.log(
  `Bill One: EUR${billOne * tenPercentTip}
Bill Two: EUR${billTwo * fifteenPercentTip}
Bill Three: EUR${billThree * twentyPercentTip}`
);
