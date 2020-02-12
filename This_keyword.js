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
