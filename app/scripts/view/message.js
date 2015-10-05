var MessageView = Backbone.View.extend({

  tagName : 'tr',

  template : _.template('<td><%= createdAt %></td> \
    <td><%= (room ? room : "") %></td> \
    <td><%= (username ? username : "") %></td> \
    <td><%= (text ? text : "") %></td> \
    <td><a class="noDec" href=""><i class="icon-heart"></i></a></td> \
    <td><a class="noDec" href=""><i class="icon-budicon-32"></i></a></td> \
  '),

  events : {
    'click .icon-heart' : 'addFriend'
  },

  render : function(){
    return this.$el.html( this.template( this.model.attributes ) );
  },

  addFriend : function(e){
    e.preventDefault();
    var friend = this.model.attributes.username;

    this.model.addToFriendsList(friend);
    
  }

});