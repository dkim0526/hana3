Template.postsList.helpers({
  postsWithRank: function() {
    return this.posts.map(function(post, index, cursor) {
      post._rank = index;
      return post;
    });
  },

  ownPost: function() {
    return this.userId == Meteor.userId();
  },

  indexColor: function(){

    //The .fetch() is necessary to receive the array
    latestPost = Posts.find({userId: Meteor.userId()}, {sort: {submitted: -1}, limit: 1}).fetch();

    postCount = Posts.find({userId: Meteor.userId()}).count();

    console.log(latestPost[0].submitted.getTime());

    lastPostTime = latestPost[0].submitted.getTime();

    test = new Date();

    nowTime = test.getTime();

    difference = nowTime - lastPostTime;

    //Take the modulus which will allow us to compare times over 10 mins
    // 10 mins chosen for the demo-ing time
    difference = difference % 600000;

    console.log(difference);

    switch(true)
    {
      case (difference < 6000):
        return "#7DBD7D";
        break;
      case (difference < 12000):
        return "#FFDE59";
        break;
      case (difference < 18000):
        return "#FFAD5C";
        break;
      default:
        return "#D14719";
        break;
    }

  },

  numPosts: function(){
    // return Posts.find().count();
    return Posts.find({userId: Meteor.userId()}).count();
  }

});