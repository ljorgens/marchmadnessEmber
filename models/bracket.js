MarchMadness.Bracket = DS.Model.extend({
  bracketName: DS.attr(),
  rounds: DS.hasMany('round', {async: true})
});
