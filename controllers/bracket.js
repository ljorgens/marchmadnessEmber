MarchMadness.BracketController = Ember.ObjectController.extend({
  actions:{
    advance: function(round, team, game) {
      team.previousGameId = game.id;
      var nextRound = round.roundNumber;
      var nextRoundGames = this.model._data.rounds[nextRound].games;
      var nextGame = null;
      var indexOfNextGame = nextRoundGames.forEach(function(thisGame) {
        if ((thisGame.id === game.nextGameId) && (game.teams[0].previousGameId !== game.teams[1].previousGameId)) {
          nextGame = thisGame;
            if (game.id % 2 === 0) {
              nextGame.teams[1] = (team);
            } else {
              nextGame.teams[0] = (team);
            }
        }
      });
      // nextGame.teams.addObject(team);
      this.model.save();
    }
  }
});
