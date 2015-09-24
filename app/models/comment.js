import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  body: DS.attr(),
  timestamp: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
