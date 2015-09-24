import Ember from 'ember';

export default Ember.Route.extend({
  model(post) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', post.post_id),
      comments: this.store.find('comment', {post: post})
    });
  },
  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('view-post', post.post_id);
    },
  }

});
