var MessageView = Backbone.View.extend({

  tagName : 'tr',

  template : _.template( $('#message').html(), {} ),

  events : {
    'click .icon-heart' : 'toggleFriend',
    'click .icon-budicon-32' : 'removeMessage'
  },

  render : function(){
    return this.$el.html( this.template( this.model.attributes ) );
  },

  toggleFriend : function(e){
    e.preventDefault();
    this.model.toggleFriend(this.model);
  },

  removeMessage : function(e){
    e.preventDefault();
    this.model.removeMessage(this.model);
  }

});