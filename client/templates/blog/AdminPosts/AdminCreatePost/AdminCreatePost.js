Template.AdminCreatePost.events({	
	'submit': function (event) {
		event.preventDefault();
		const target = event.target;
		var user = Meteor.user();
		if(!user) Router.go('/');
        var data_summary = $('textarea#summary').val();
        var data_content = $('#summernote').summernote('code');
        var details = {
        title: target.title.value,
        category: target.category.value,
        slug: titleToSlug(target.title.value),
        thumbnail: target.thumbnail.value,
        date: target.date.value,
        summary: data_summary,
        content: data_content,
        created_at: Date.now(),
        updated_at: Date.now()
    };
    Meteor.call('post.insert', details);
		Router.go('/admin/posts');
	},
});
// Everytime the template renders
Template.AdminCreatePost.onRendered(function() {
    $(function() {
        $('#summernote').summernote({popover: {
            image: [],
            link: [],
            air: []
          },});
        $('#date').datetimepicker({timepicker:false,format:'Y-m-d'});
    });
});

//Helper
Template.AdminCreatePost.helpers({
    'categories': function(){
        return Categories.find().fetch();
    }
});

titleToSlug = function(title) {
// XXX: this is a first approximation, needs:
//   - deal with non-latin chars
//   - check for overlap? (add a -1 or something?)
return title.trim().toLowerCase().replace(/\W+/g, '-');
}