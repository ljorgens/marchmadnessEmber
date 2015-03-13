MarchMadness.NewBracketController = Ember.Controller.extend({
  actions:{
    save:function(){
      var NewBracket = this.store.createRecord('bracket',{
        bracketName: this.get('newBracketName'),
        rounds: [{
          id: 1,
          roundNumber: 1,
          roundName: "Round of 64",
          games: [{ id: 1,
                    nextGameId: 9,
                    teams: [{ id: 1,
                      school: "Terrapins",
                      region: "East",
                      seed: 1,
                      previousGameId: 10},
                      {
                      id: 2,
                      school: "Blue Devils",
                      region: "East",
                      seed: 16,
                      previousGameId: 20}] },
                      {
                    id: 2,
                    nextGameId: 9,
                    teams: [{ id: 3,
                      school: "Bears",
                      region: "East",
                      seed: 8,
                      previousGameId: 3},
                      {
                      id: 4,
                      school: "Greens",
                      region: "East",
                      seed: 9,
                      previousGameId: 4}] },
                      {
                    id: 3,
                    nextGameId: 10,
                    teams: [{ id: 5,
                      school: "Clever Turtles",
                      region: "East",
                      seed: 5,
                      previousGameId: 5},
                      {
                      id: 6,
                      school: "Devils",
                      region: "East",
                      seed: 12,
                      previousGameId: 6}] },
                      {
                    id: 4,
                    nextGameId: 10,
                    teams: [{ id: 7,
                      school: "Clever Turtles",
                      region: "East",
                      seed: 4,
                      previousGameId: 7},
                      {
                      id: 8,
                      school: "Devils",
                      region: "East",
                      seed: 13,
                      previousGameId: 8}] },
                      {
                    id: 5,
                    nextGameId: 11,
                    teams: [{ id: 9,
                      school: "Clever Turtles",
                      region: "East",
                      seed: 6,
                      previousGameId: 9},
                      {
                      id: 10,
                      school: "Devils",
                      region: "East",
                      seed: 11,
                      previousGameId: 10}] },
                      {
                    id: 6,
                    nextGameId: 11,
                    teams: [{ id: 11,
                      school: "Clever Turtles",
                      region: "East",
                      seed: 3,
                      previousGameId: 11},
                      {
                      id: 12,
                      school: "Devils",
                      region: "East",
                      seed: 14,
                      previousGameId: 12}] },
                      {
                    id: 7,
                    nextGameId: 12,
                    teams: [{ id: 13,
                      school: "Clever Turtles",
                      region: "East",
                      seed: 7,
                      previousGameId: 13},
                      {
                      id: 14,
                      school: "Devils",
                      region: "East",
                      seed: 10,
                      previousGameId: 14}] },
                      {
                    id: 8,
                    nextGameId: 12,
                    teams: [{ id: 15,
                      school: "Clever Turtles",
                      region: "East",
                      seed: 2,
                      previousGameId: 15},
                      {
                      id: 16,
                      school: "Devils",
                      region: "East",
                      seed: 15,
                      previousGameId: 16}] }
                    ]},
          {
          id: 2,
          roundNumber: 2,
          roundName: "Round of 32",
          games: [{
            id: 9, nextGameId: 13, teams: []},
          {id: 10, nextGameId: 13, teams: []},
                {id: 11, nextGameId: 14, teams: []},
                {id: 12, nextGameId: 14, teams: []}
          ],
        },
        {
          id: 3,
          roundNumber: 3,
          roundName: "Sweet 16",
          games: [{id: 13, nextGameId: 15, teams: []},
                  {id: 14, nextGameId: 15, teams: []}
                  ],
        },
        {
          id: 4,
          roundNumber: 4,
          roundName: "Elite 8",
          games: [{id: 15, nextGameId: null, teams: []}
          ],
        }]
      });
      NewBracket.save();
      this.set('newBracketName', null),
      this.transitionToRoute('brackets');
    }
  }
});
