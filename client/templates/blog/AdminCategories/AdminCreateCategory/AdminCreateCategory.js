// Events 
Template.AdminCreateCategory.events({
	
	'submit': function (event) {
		event.preventDefault();
		const target = event.target;
		var user = Meteor.user();
		if(!user) Router.go('/');
        var details = {
            category: target.category.value,
            created_at: Date.now(),
            updated_at: Date.now()
        };
        Meteor.call('blogcategory.insert', details);
            Router.go('/admin/categories');
	},
});