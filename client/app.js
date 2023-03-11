import { Template } from 'meteor/templating';
Meteor.subscribe('posts');
Meteor.subscribe('comments');
Meteor.subscribe('categories');
disqus = new Disqus('kamarasta');
Template.registerHelper("checkedIf",function(value){
    return value?"checked":"";
});

Template.registerHelper("selectedIfEquals",function(left,right){    
    return left==right?"selected":"";
});