MarchMadness.NewBracketController = Ember.Controller.extend({
  actions:{
    save:function(){
      var NewBracket = this.store.createRecord('bracket',{
        bracketName: this.get('newBracketName'),
        rounds: [{
          id: 1,
          roundNumber: 1,
          roundName: "Round of 64"
        },
        {
          id: 2,
          roundNumber: 2,
          roundName: "Round of 32"
        },
        {
          id: 3,
          roundNumber: 3,
          roundName: "Sweet 16"
        }]
      });
      NewBracket.save();
      this.set('newBracketName', null),
      this.transitionToRoute('brackets');
    }
  }
});
