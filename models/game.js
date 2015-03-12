MarchMadness.Game = DS.Model.extend({
  teams: DS.attr(),
  nextGameId: DS.attr(),
  game: DS.belongsTo('game', {async: true})
});
