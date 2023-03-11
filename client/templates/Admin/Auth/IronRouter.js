Router.route('/pengelola', function() {
    this.layout('BlankLayout');
    this.render('Auth');
    $('body').addClass('login');
});