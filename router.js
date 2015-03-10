MarchMadness.Router.map(function(){
  this.resource("home", {path: "/"});
  this.resource("brackets");
  this.resource("new-bracket");
  this.resource("bracket", {path: ":bracket_id"}, function() {
    this.resource("region1");
    this.resource("region2");
    this.resource("region3");
    this.resource("region4");
  });
});
