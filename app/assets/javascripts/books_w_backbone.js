window.BooksWBackbone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BooksWBackbone.Routers.Books();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  BooksWBackbone.initialize();
});