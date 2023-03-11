Router.route('/admin/categories', function() {
    this.render('AdminCategories');
});

Router.route('/admin/createcategory', function() {
    this.render('AdminCreateCategory');
});

Router.route('/admin/categories/:_id', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('EditCategory', {
            data: function() {
                return Categories.findOne({_id: this.params._id});
            }
        });
    } else {
        Router.go('/');
    }
});
