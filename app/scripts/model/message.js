var Message = Backbone.Model.extend({

  defaults : {
    'username' : 'default',
    'room' : 'default',
    'text' : 'default'
  },

  url : 'https://api.parse.com/1/classes/chatterbox',

  toggleFriend : function(message){
    this.trigger('toggleFriend', this);
  },

  removeMessage : function(message){
    this.trigger('removeMessage', this);
  }
  
});