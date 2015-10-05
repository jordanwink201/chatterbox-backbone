var Message = Backbone.Model.extend({

  defaults : {
    'username' : 'default',
    'room' : 'default',
    'text' : 'default'
  },

  url : 'https://api.parse.com/1/classes/chatterbox',

  addToFriendsList : function(name){
    console.log('addToFriendsList', name);
    
  }
  
});