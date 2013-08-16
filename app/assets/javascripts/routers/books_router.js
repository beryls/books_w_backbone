BooksWBackbone.Routers.Books = Backbone.Router.extend({
  routes: {
    '':'index'
  },
  initialize: function() {
    this.collection = new BooksWBackbone.Collections.Books();
    this.collection.fetch({reset: true});
  },
  index: function() {
    var view = new BooksWBackbone.Views.BooksIndex({collection: this.collection});
    $('#container').html(view.render().el);
  }
});
