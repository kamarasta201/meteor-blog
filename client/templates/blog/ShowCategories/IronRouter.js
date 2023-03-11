Router.route('/category/:category', function() {
    findcategory = this.params.category
    this.render('ShowCategories', {
        data: function() {
            return Posts.find({category: findcategory}).fetch();
        }
    });
});