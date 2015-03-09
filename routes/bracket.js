MarchMadness.BracketRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('bracket', params.bracket_id);
  }
});
