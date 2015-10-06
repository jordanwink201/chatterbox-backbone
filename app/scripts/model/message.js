var Message = Backbone.Model.extend({

  defaults : {
    'username' : 'default',
    'room' : 'default',
    'text' : 'default'
  },

  url : 'https://api.parse.com/1/classes/chatterbox',

  addToFriendsList : function(message){
    console.log('addToFriendsList', message);
    this.trigger('addFriend', this);
  },

  removeMessage : function(message){
    console.log('remove message', message);
    this.trigger('removeMessage', this);
  }
  
});