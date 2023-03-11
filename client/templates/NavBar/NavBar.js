Template.NavBar.events({
    'click #logout': function() {
        Meteor.logout();
    }
});
//Helper
Template.NavBar.helpers({
    'categories': function(){
        return Categories.find().fetch();
    },
    rooturl: Meteor.absoluteUrl(""),
});
