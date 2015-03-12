MarchMadness.BracketController = Ember.ObjectController.extend({
  actions:{
    advance:function(round, team){
      this.model._data.rounds[round.roundNumber].teams.addObject(team);
      this.model.save();
    }
  }
});
