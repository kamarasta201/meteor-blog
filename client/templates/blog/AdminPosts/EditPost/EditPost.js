Template.EditPost.events({
    'submit': function (event) {
		event.preventDefault();
		const target = event.target;
		var user = Meteor.user();
		if(!user) Router.go('/');
        var data_summary = $('textarea#summary').val();
        var data_content = $('#summernote').summernote('code');
        var details = {
        id: target._id.value,
        title: target.title.value,
        category: target.category.value,
        slug: titleToSlug(target.title.value),
        thumbnail: target.thumbnail.value,
        date: target.date.value,
        summary: data_summary,
        content: data_content
    };
    Meteor.call('post.edit', details);
		Router.go('/admin/posts');
	},
});

Template.EditPost.onRendered(function() {
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
Template.EditPost.helpers({
    'categories': function(){
        return Categories.find().fetch();
    },
    'formatDate': function(date){
        return moment(date).format('YYYY-MM-DD');
    }
});
