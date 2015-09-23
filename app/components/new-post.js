import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title'),
        text: this.get('text'),
        img: this.get('img'),
        author: this.get('author'),
        timestamp: new Date()
      };
      this.sendAction('savePost', params);
    }
  }
});
