MarchMadness.NewBracketController = Ember.Controller.extend({
  actions:{
    save:function(){
      var NewBracket = this.store.createRecord('bracket',{
        bracketName: this.get('newBracketName'),
        rounds: [{
          id: 1,
          roundNumber: 1,
          roundName: "Round of 64",
          teams: [{ id: 1,
                    school: "Terrapins",
                    region: "East",
                    seed: 1
                  }, {
                    id: 2,
                    school: "Blue Devils",
                    region: "East",
                    seed: 16
                  }, {
                    id: 3,
                    school: "Bears",
                    region: "East",
                    seed: 8
                  }, {
                    id: 4,
                    school: "Greens",
                    region: "East",
                    seed: 9
                  }, {
                    id: 5,
                    school: "Clever turtles",
                    region: "East",
                    seed: 5
                  }, {
                    id: 6,
                    school: "Devils",
                    region: "East",
                    seed: 12
                  }, {
                    id: 7,
                    school: "throw pillows",
                    region: "East",
                    seed: 4
                  }, {
                    id: 8,
                    school: "throw pillows",
                    region: "East",
                    seed: 13
                  }, {
                    id: 9,
                    school: "throw pillows",
                    region: "East",
                    seed: 6
                  }, {
                    id: 10,
                    school: "throw pillows",
                    region: "East",
                    seed: 11
                  }, {
                    id: 11,
                    school: "throw pillows",
                    region: "East",
                    seed: 3
                  }, {
                    id: 12,
                    school: "throw pillows",
                    region: "East",
                    seed: 14
                  }, {
                    id: 13,
                    school: "throw pillows",
                    region: "East",
                    seed: 7
                  }, {
                    id: 14,
                    school: "throw pillows",
                    region: "East",
                    seed: 10
                  }, {
                    id: 15,
                    school: "throw pillows",
                    region: "East",
                    seed: 2
                  }, {
                    id: 16,
                    school: "throw pillows",
                    region: "East",
                    seed: 15
                }]
        },
        {
          id: 2,
          roundNumber: 2,
          roundName: "Round of 32",
          teams: []
        },
        {
          id: 3,
          roundNumber: 3,
          roundName: "Sweet 16",
          teams: []
        },
        {
          id: 4,
          roundNumber: 4,
          roundName: "Elite 8",
          teams: []
        }]
      });
      NewBracket.save();
      this.set('newBracketName', null),
      this.transitionToRoute('brackets');
    }
  }
});
