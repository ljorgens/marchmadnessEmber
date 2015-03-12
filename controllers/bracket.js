MarchMadness.BracketController = Ember.ObjectController.extend({
  actions:{
    advance:function(){
      var selectedSchool = this.model._data.rounds[0].teams[0];
      this.model._data.rounds[1].teams.addObject(selectedSchool);
      this.model.save();
    }
  }
});
