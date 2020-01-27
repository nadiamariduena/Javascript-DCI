//With the += you are able to keep the old value and add one more to it
//EXAMPLE:

let str = "Hi hello bye";
str += 2;
let stringToArray = str.split(" ");
console.log(stringToArray);

//Result: [ 'Hi', 'hello', 'bye2' ]
//Check at the 2, thats the result of the  str += 2;

let str1 = "tree, baum, arbre, arbol";
str1 += 25600;
let stringToArray = str1.split(" ");
console.log(stringToArray[2]);
//RESULT: [ 'tree,', 'baum,', 'arbre,', 'arbol25600' ]
//Check at the 'arbol25600', thats the result of the  str1 += 25600;
