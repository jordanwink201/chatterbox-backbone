var RoomListView = Backbone.View.extend({

  template : _.template($('#roomItem').html()),

  initialize : function(){
    this.render();
  },

  render : function(){
    this.$el.html( this.template( this.model.attributes ));
    return this.el;
  }

});