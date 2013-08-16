BooksWBackbone.Models.Book = Backbone.Model.extend({
  defaults: {
    title: "A Title",
    author: "An Author"
  },
  urlRoot: 'api/books'
});