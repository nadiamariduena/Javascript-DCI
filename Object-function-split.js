// Create a function that returns an array of properties of a javascript object.


function arrSpliting(str) {
    let arr = str.split("");
    let countObject = {};
    function characterCount(word, character) {
      let count = 0;
      
      for (let i = 0; i < word.length; i++) {
        if (word[i] === character) {
          count++;
        }
      }
      return count;
    }
    for (let i = 0; i < arr.length; i++) {
      let currentChar = arr[i];
      countObject[currentChar] = characterCount(str, currentChar);
    }
    return countObject;
  }
  console.log(arrSpliting("hello beautiful cat"));
