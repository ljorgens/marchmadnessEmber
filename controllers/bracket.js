MarchMadness.BracketController = Ember.Controller.extend({
  actions:{
    advance:function(){
      this.store.push('round');
    }
  }
});
