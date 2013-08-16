BooksWBackbone.Views.BooksIndex = Backbone.View.extend({

  template: HandlebarsTemplates['books/index'],
  initialize: function() {
    // this.collection = new BooksWBackbone.Collections.Books();
    // // debugger;
    // this.collection.fetch({reset: true});
    this.collection.on('reset', this.render, this);
  },
  render: function() {
    $(this.el).html(this.template({collection: this.collection}));
    // debugger;
    return this;
  }

});