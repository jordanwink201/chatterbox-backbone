// this model has access to both collections
var AppModel = Backbone.Model.extend({

  initialize : function(){
    // Friend Collection
    this.friendList = new FriendList();

    // Message Collection
    this.messageList = new Messages();
    this.messageList.loadMessages();

    this.messageList.on('addFriend', function(message){
      this.friendList.add(message);
    }, this);

    this.messageList.on('removeMessage', function(message){
      this.messageList.remove(message);
    }, this);

  }

});