//Helper
Template.ShowCategories.helpers({
    category: function(){
        return Router.current().params.category
    },
    'formatDate': function(date){
        return moment(date).fromNow();
    },
    rooturl: Meteor.absoluteUrl(""),
});