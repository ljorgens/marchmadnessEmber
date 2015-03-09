MarchMadness.BracketsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('bracket')
  }
});
