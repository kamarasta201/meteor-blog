import { Mongo } from 'meteor/mongo'; 
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';
SimpleSchema.extendOptions(['autoform']);

SimpleSchema.debug = true; //uncomment to help when developing, comment when deploying
Schemas = {};
Meteor.isClient && Template.registerHelper('Schemas', Schemas);
Schemas.BlogCategorySchema = new SimpleSchema({
    category: {
      type: String
    },
    created_at: {
        type: Date,
        optional: true
    },
    updated_at: {
        type: Date,
        optional: true
    }
  });

Categories = new Mongo.Collection('category');
Categories.attachSchema(Schemas.BlogCategorySchema);

Schemas.PostsSchema = new SimpleSchema({
  title: {
      type: String
  },
  slug: {
      type: String,
      optional: true
  },
  thumbnail: {
      type: String,
      optional: true
  },
  category: {
      type: String,
      optional: true
  },
  summary: {
      type: String,
      optional: true
  },
  content: {
      type: String,
      optional: true
  },
  date: {
      type: Date,
      optional: true
  },
  created_at: {
      type: Date,
      optional: true
  },
  updated_at: {
      type: Date,
      optional: true
  }
});

Posts = new Mongo.Collection('post');
Posts.attachSchema(Schemas.PostsSchema);

Comments = new Mongo.Collection('comment');
