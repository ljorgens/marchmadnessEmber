MarchMadness.NewBracketController = Ember.Controller.extend({
  actions:{
    save:function(){
      var NewBracket = this.store.createRecord('bracket',{
        bracketName: this.get('newBracketName'),
      });
      NewBracket.save();
      this.set('newBracketName', null),
      this.transitionToRoute('brackets');
    }
  }
});
