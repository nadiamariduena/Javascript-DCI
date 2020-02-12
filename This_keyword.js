//--------------------------------------
//--------------------------------------
//--------------THIS--------------------

//Check the note book for detailed explanation.

// method -> obj
// function -> global (window, global)
//--------------(1)--------------------

const video = {  //video is an OBJECT
  linear: "a",   //linear is a PROPERTY
  play() {       //play is a METHOD   
    console.log(this);
  }
};

video.stop = function() {
  console.log(this);
};

video.stop();

//-----------------


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

//If you check the console you will see that both methods (play and stop)
//will appear and thats due au fait que play and stop are METHODS in the video OBJECT.


/*--------playing-with it-but wrong------my test----------------*/
/*--------------------------------------------------------------

const videoClash = {
  linear: "a",
  play() {
    console.log(this);
  },
  linear2: "b",
  bur() {
    console.log(this);
  }
};

videoClash.stop = function() {
  console.log(this);
};

videoClash.stop();
videoClash.play();
{
  linear: 'a',
  play: [Function: play],
  linear2: 'b',
  bur: [Function: bur],
  stop: [Function (anonymous)]
}
{
  linear: 'a',
  play: [Function: play],
  linear2: 'b',
  bur: [Function: bur],
  stop: [Function (anonymous)]
}
*/
/*-----------------------------------------*/

//-------------------------------------
//function -> GLOBAL (window, global)
//--------------(2)--------------------



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
