Router.configure({
    layoutTemplate: 'AppLayout'
});

Router.route('/userpanel', function() {
    if(Meteor.userId()) {
        this.render('UserPanel');
    } else {
        Router.go('/');
    }
});
