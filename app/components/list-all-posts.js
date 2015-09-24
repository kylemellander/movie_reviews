import Ember from 'ember';

export default Ember.Component.extend({
  sortedPostsOrder: ['timestamp:desc'],
  sortedPosts: Ember.computed.sort('post', 'sortedPostsOrder')
});
