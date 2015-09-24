import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('edit-post', {path: '/admin/post/:post_id'});
  this.route('about');
  this.route('contact');
  this.route('view-post', {path: '/review/:post_id'});
});

export default Router;
