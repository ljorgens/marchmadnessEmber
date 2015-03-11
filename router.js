MarchMadness.Router.map(function(){
  this.resource("home", {path: "/"});
  this.resource("brackets");
  this.resource("new-bracket");
  this.resource("bracket", {path: ":bracket_id"}, function() {
    this.resource("round1");
  });
});
