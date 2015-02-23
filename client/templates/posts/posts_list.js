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

  	// latestPosts = Posts.find({}, {sort: {createdAt: -1}, limit: 2});

  	postCount = Posts.find().count();

  	console.log(postCount);

  	switch(true)
  	{
  		case (postCount > 4):
  			return "#7DBD7D";
  			break;
  		case (postCount > 2):
  			return "#FFDE59";
  			break;
  		case (postCount > 0):
  			return "#FFAD5C";
  			break;
  		default:
  			return "#D14719";
  			break;
  	}

  },

  numPosts: function(){
    return Posts.find().count();
  }

});
