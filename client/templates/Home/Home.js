//Helper
Template.Home.helpers({
    'data': function(){
        return Posts.find().fetch();
    },
    'formatDate': function(date){
        return moment(date).fromNow();
    },
    rooturl: Meteor.absoluteUrl(""),
});