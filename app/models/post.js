import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  text: DS.attr(),
  author: DS.attr(),
  img: DS.attr(),
  timestamp: DS.attr()
});
