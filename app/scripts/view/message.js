var MessageView = Backbone.View.extend({

  tagName : 'tr',

  template : _.template('<td><%= createdAt %></td> \
    <td>username</td> \
    <td><%= (text ? text : "") %></td> \
    <td><a href=""><i class="icon-budicon-44"></i></a></td> \
    <td><a href=""><i class="icon-budicon-32"></i></a></td> \
  '),


  // <td><%= (username ? username : "") %></td>

  render : function(){
    return this.$el.html( this.template( this.model.attributes ) );
  }

});