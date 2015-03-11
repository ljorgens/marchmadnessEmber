MarchMadness.Team = DS.Model.extend({
  school: DS.attr(),
  region: DS.attr(),
  seed: DS.attr(),
  round: DS.belongsTo('round', {async: true})
});
