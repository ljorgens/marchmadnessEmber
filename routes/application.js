MarchMadness.ApplicationRoute = Ember.Route.extend({
  beforeModel: function() {
      this.store.push('team', {
        id: 1,
        teamName: "Terrapins",
        region: "East",
        seed: 1
      });
      this.store.push('team', {
        id: 2,
        teamName: "Blue Devils",
        region: "East",
        seed: 16
      });
  }

});
