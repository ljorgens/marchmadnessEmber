MarchMadness.Round = DS.Model.extend({
  roundNumber: DS.attr(),
  roundName: DS.attr(),
  // teams: DS.hasMany('team', {async: true}),
  bracket: DS.belongsTo('bracket', {async: true})
});
