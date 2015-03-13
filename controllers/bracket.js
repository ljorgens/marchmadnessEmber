MarchMadness.BracketController = Ember.ObjectController.extend({
  actions:{
    advance:function(round, team, game){
      team.previousGameId = game.id;
      var nextRound = round.roundNumber;
      var nextRoundGames = this.model._data.rounds[nextRound].games;
      var nextGame = null;
      var indexOfNextGame = nextRoundGames.forEach(function(thisGame) {
        if ((thisGame.id === game.nextGameId) && (thisGame.teams.length < 2) && (game.teams[0].previousGameId !== game.teams[1].previousGameId)) {
          nextGame = thisGame;
        }
      });
      nextGame.teams.addObject(team);
      this.model.save();
    }
  }
});
