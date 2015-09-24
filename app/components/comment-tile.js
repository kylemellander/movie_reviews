import Ember from 'ember';

export default Ember.Component.extend({
  showForm: false,
  actions: {
    saveComment() {
      var params = {
        name: this.get('name'),
        body: this.get('body'),
        post: this.get('post'),
        timestamp: new Date()
      };
      this.sendAction('saveComment', params);
    },
    showUpdateForm() {
      this.set('showForm', true);
    },
    updateComment(comment) {
      var params = {
        name: this.get('update-name'),
        body: this.get('update-body')
      };
      this.set('showForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
