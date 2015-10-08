var RoomTabView = Backbone.View.extend({

  tagName : 'li',

  className : '',

  template : _.template('<a href="#<% roomname %>" role="tab" data-toggle="tab"> \
    <i class="icon-budicon-40"></i><%= roomname %></a>'),

  initialize : function(){
    this.render();
  },

  render : function(){
    return this.$el.html( this.template( this.model.attributes ) );
  }

});