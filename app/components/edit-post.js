import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        title: this.get('title'),
        text: this.get('text'),
        img: this.get('img'),
        author: this.get('author'),
        timestamp: new Date()
      };
      this.sendAction('update', post, params);
    },
    deletePost(post) {
      this.sendAction('deletePost', post);
    }
  }
});
