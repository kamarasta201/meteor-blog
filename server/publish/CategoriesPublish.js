ReactiveTable.publish('categorytable', function () { return Categories; }, {});
Meteor.publish('categories', function() {
    return Categories.find();
});
