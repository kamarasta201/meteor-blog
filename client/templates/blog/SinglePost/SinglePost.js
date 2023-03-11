Template.SinglePost.helpers({
    comments: function() {
        return Comments.find({PostId: this._id});
    }
});
Template.SinglePost.onRendered(function(){
    disqus.loadComments();
  });
