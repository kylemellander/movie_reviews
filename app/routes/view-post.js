import Ember from 'ember';

export default Ember.Route.extend({
  model(post) {
    var foo = Ember.RSVP.hash({
      post: this.store.findRecord('post', post.post_id),
      comments: this.store.find('comment', {post: post})
    });
    return foo;
  },
  // afterModel: function(model, transition) {
  //   if (model.get('length') === 2) {
  //     this.transitionTo('view-post', model.post);
  //   }
  // },

  actions: {
    saveComment(params) {
      var newComment = this.store.createRecord('comment', params);
      newComment.save();
      params.post.save();
      this.transitionTo('view-post');
      window.location.reload();
    },
    updateComment(comment, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          comment.set(key,params[key]);
        }
      });
      comment.save()
      comment.post.save()
      this.transitionTo('view-post', post);
    },
    deleteComment(comment) {
      comment.destroyRecord();
      this.transitionTo('view-post', post);
    }
  }

});
