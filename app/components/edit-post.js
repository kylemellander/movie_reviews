import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    showUpdatePost() {
      this.set('updatePost', true);
    },
    update(post) {
      var params = {
        title: this.get('update-title'),
        text: this.get('update-text'),
        img: this.get('update-img'),
        author: this.get('update-author'),
      };
      this.set('updatePost', false);
      this.sendAction('update', post, params);
    },
    deletePost(post) {
      this.sendAction('deletePost', post);
    }
  }
});
