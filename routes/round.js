MarchMadness.RoundRoute = Ember.Route.extend({
  model: function(params) {
    this.store.find('round', params.id);
  }
});
