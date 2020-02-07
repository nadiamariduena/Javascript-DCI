function saturday(hello) {
  return {
    hello,
    junio: function() {
      console.log("Super tired");
    }
  };
}

const domingo = saturday(1);
domingo.junio();

//------------
//CLONE WITH THE SPREAD OPERATOR
//1

const circle = {
  radius: 1,
  drawing() {
    console.log("everything counts");
  }
};

/*------Object.assign
  copies the properties or methods from one 
  or more source OBJECTS into a target object _{}_
  and i can use that to clone an object or COMBINE
  multiple objects into a single OBJECT*/

const another = Object.assign({}, circle);

//SPREAD OPERATOR ...
/*
  The SPREAD OPERATOR is used to spread
  an OBJECT which basically means 
  getting all these properties and 
  methods and putting them into another 
   object
  //const another = { ...circle };
  */

console.log(another);
/*
  { ...circle }
  Basically What this operator does "..." is
  that it takes all the objects and methods
   of the block one, and put it inside 
   of the curly brackets  { ...circle }
   check it on the console in whatever browser
  
  */

/*
  // const another = {};
  // for (let key in circle)
  // another[key] = circle[key];
  
  //This line of code below is the equivalent of the 3 lines 
  const another = Object.assign({}, circle);
  */
