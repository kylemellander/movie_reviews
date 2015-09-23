import Ember from 'ember';

export default Ember.Component.extend({
  updatePost: false,
  actions: {
    showUpdatePost() {
      this.set('updatePost', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        text: this.get('text'),
        img: this.get('img'),
        author: this.get('author'),
      };
      this.set('updatePost', false);
      this.sendAction('update', post, params);
    },
    deletePost(post) {
      this.sendAction('deletePost', post);
    }
  }
});
