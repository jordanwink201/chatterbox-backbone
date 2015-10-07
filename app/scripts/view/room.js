var RoomTabView = Backbone.View.extend({

  tagName : 'li',

  className : '',

  template : _.template( $('#roomTab').html() ),

  initialize : function(){
    this.render();
  },

  render : function(){
    return this.$el.html( this.template( this.model.attributes ) );
  }

});