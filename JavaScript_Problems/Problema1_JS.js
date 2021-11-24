

 // after review
const makeUser = function () {
  const activities=[] //array to hold the activities -moved inside and renamed
  return {
    jump: function() { 
        activities.push('jumping');
          return this;
    },
    speak: function() { 
        activities.push('speaking');
          return this;
    },
    run: function() { 
       activities.push('running');
          return this;
    },
    swim: function() { 
     activities.push('swimming');
          return this;
    },
    sleep: function() { 
      activities.push('sleeping');
          return this;
    },
    exec: function() { 

          console.log(activities.join()); //used join instead of for loop:)
          
    }
  }
}

// Testing the example
const user = new makeUser()
user.sleep().swim().speak().jump().swim().sleep().run().run().exec()
