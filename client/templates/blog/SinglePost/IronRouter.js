Router.route('/read/:_id/:slug', function() {
    _id = this.params._id
    slug = this.params.slug
    this.render('SinglePost', {
        data: function() {
            return Posts.findOne({
                "$and": [{
                "_id" :  _id
              },{ "slug" :  slug
                }]
             });
        }
    });
});