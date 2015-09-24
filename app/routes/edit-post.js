import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('edit-post', post);
    },
    deletePost(post) {
      post.get('comments').forEach(function(comment) {
        comment.destroyRecord();
      });
      debugger;
      post.destroyRecord();
      this.transitionTo('admin');
    }
  }

});
