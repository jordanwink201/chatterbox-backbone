var FriendView = Backbone.View.extend({
  
  tagName : 'li',

  className : 'list-group-item',

  template: _.template('<img class="img-circle" src="images/profile.jpg" width="30%"> \
    <p class="name"><%= username %></p> \
  '),

  initialize : function(){

  },

  render : function(){

    return this.$el.html( this.template( this.model.attributes ) );

  }

});