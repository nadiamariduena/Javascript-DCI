let scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];

//How to access the   { tile: "Z", score: 10 } ?
//i can access it using the DOT 'object key' and that is because the element i want to grab is a KEY inside an object EXAMPLE:
//console.log(scrabble[2].score);

function score(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    //arr.length ...arr stands for the parameter in the function.
    result += scrabble[i].score; //This score is connected with the one giving the score numbers on top
    //_+= this is going to remember the previous result while looping..check the notebook for further explanation.
    //_scrabble[i], with this i dont need to write 1,2,3 etc because [i] means it all.
  }
  return result;
}

//console plus call of the function
console.log(score(scrabble));
//--------------------------------------------



let flute = [
  { title: "do", output: 30 },
  { title: "re", output: 50 },
  { title: "mi", output: 40 },
  { title: "fa", output: 20 },
  { title: "so", output: 10 },
  { title: "la", output: 30 },
  { title: "si", output: 35 },
  { title: "do", output: 39 }
];

function music(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += flute[i].output;
  }
  return result;
}
console.log(music(flute));
