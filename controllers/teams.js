MarchMadness.TeamsController = Ember.Controller.extend({
  var controller = this;
  this.get('model').forEach(function(team, i) {
    controller.set('team' + i, team)
  });
});
