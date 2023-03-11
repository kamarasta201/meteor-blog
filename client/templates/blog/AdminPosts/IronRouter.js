Router.route('/admin/posts', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('AdminPosts');
    } else {
        Router.go('/');
    }
});

Router.route('/admin/posts/:_id', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('EditPost', {
            data: function() {
                return Posts.findOne({_id: this.params._id});
            }
        });
    } else {
        Router.go('/');
    }
});

Router.route('admin/createpost', function() {
    if(Roles.userIsInRole(Meteor.user(), 'admin')) {
        this.render('AdminCreatePost');
    } else {
        Router.go('/');
    }
});