Template.votelist.helpers({
  'songs': function() {
    return ["blaat","blaat","blaat","blaat","blaat","blaat","blaat","blaat","blaat","blaat"];
  },
  'title': function() {
    return "Awesome playlist";
  }
});

Template.votesong.helpers({
  'voters': function() { //bogus function to return a dummy voter
      return Meteor.users.findOne({});
  },
  'votes': function() { //bogus function generting random votes
      return Math.floor(Math.random()*10).toString();
  }
});

Template.votesong.events({
  'click .voteBtn':function(e) {
    console.log("vote!");
    $(e.currentTarget).toggleClass('voted');
  }

})
