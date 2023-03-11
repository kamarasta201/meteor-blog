// Methods
Meteor.methods({
	'blogcategory.insert': function(item) {
		Categories.insert(item);
	},
	'blogcategory.remove': function(id) {
		if(!this.userId) return;
		Categories.remove({_id:id});
	},
	'blogcategory.edit': function(item) {		
		Categories.update({_id: item.id}, {
            $set: {
                category:item.category, 
                updated_at:Date.now()
            }
         });
	},
});