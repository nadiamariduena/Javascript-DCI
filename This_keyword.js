//--------------------------------------
//--------------------------------------
//--------------THIS--------------------

//Check the note book for detailed explanation.

// method -> obj
// function -> global (window, global)
//--------------(1)--------------------

const video = {
  linear: "a",
  play() {
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
};

video.stop();

//-------------------------------------
//function -> GLOBAL (window, global)
//--------------(2)--------------------
//global
/*
const video = {
  linear: "a",
  play() {
    console.log(this);
  }
};

function playVideo() {
  console.log(this);
}

playVideo();

//result
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(util.promisify.custom)]: [Function (anonymous)]
  },
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(util.promisify.custom)]: [Function (anonymous)]
  }
}

*/
//-------------------------------------
//function -> GLOBAL (window, global)
//--------------(3)--------------------


const video = {
  title: "music",
  tags: ["metal", "rock", "jazz"],
  videoTags() {
    this.tags.forEach(function(tag) {
      console.log(tag);
    });
  }
};

video.videoTags();
//result : metal rock jazz



//-------------------------------------
//in progress
//--------------(3)--------------------
