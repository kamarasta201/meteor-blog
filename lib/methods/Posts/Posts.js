Meteor.methods({
    'post.insert': function(item) {
		Posts.insert(item);
	},
    'post.remove': function(id) {
		if(!this.userId) return;
		Posts.remove({_id:id});
	},
    'post.edit': function(item) {		
		Posts.update({_id: item.id}, {
            $set: {
                id: item.id,
                title: item.title,
                category: item.category,
                slug: item.slug,
                thumbnail: item.thumbnail,
                date: item.date,
                summary: item.summary,
                content: item.content,
                updated_at:Date.now()
            }
         });
	},
});
