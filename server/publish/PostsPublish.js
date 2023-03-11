ReactiveTable.publish('posttable', function () { return Posts; }, {});
Meteor.publish('posts', function() {
    return Posts.find();
});
