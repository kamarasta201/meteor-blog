//Event
Template.EditCategory.events({	
	'submit': function (event) {
		event.preventDefault();
        const target = event.target;

        var details = {
        category: target.category.value,
        updated_at: Date.now(),
        id: target._id.value
        };
        Meteor.call('blogcategory.edit', details);        
        Router.go('/admin/categories');
	}
});