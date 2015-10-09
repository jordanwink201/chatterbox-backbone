var RoomTabView = Backbone.View.extend({

  tagName : 'li',

  template : _.template('<a href="#<%= roomname %>" role="tab" data-toggle="tab"> \
    <i class="icon-budicon-40"></i><%= roomname %></a>'),

  events : {
    'click a' : 'getRoomMessages'
  },

  initialize : function(){
    this.render();
  },

  render : function(){
    console.log('')
    return this.$el.html( this.template( this.model.attributes ) );
  },

  getRoomMessages : function(e){
    e.preventDefault();
    var roomname = this.model.attributes.roomname;
    this.model.getRoomMessages(roomname);
  }

});