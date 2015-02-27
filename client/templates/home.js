Template.home.helpers({ 



  getHighestPost: function(){

    latestPost = Posts.find({}, {sort: {votes: -1, submitted: -1, _id: -1}, limit: 1}).fetch();

    return latestPost[0].url;

  },

  testFunction: function(){
    console.log("yo");
    return "Hi whats up";
  }

});
