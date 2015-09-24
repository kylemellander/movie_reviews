import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

Ember.Handlebars.registerBoundHelper('dateString', function(string) {
  var date = new Date(string);
  var dateString = date.toLocaleDateString();
  dateString += " " + date.toLocaleTimeString();
  return dateString;
});

export default App;
