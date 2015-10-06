// this model has access to both collections
var AppModel = Backbone.Model.extend({

  initialize : function(){
    // Friend Collection
    this.friendList = new FriendList();

    // Message Collection
    this.messageList = new Messages();
    this.messageList.loadMessages();

    // Room Collection
    var rooms = [
      {
        roomname : 'Room Number 1',
      },
      {
        roomname : 'Room Number 2',
      },
      {
        roomname : 'Room Number 3',
      }
    ];
    this.roomList = new RoomsList(rooms);




    // Listeners
    this.messageList.on('addFriend', function(message){
      this.friendList.add(message);
    }, this);

    this.messageList.on('removeMessage', function(message){
      this.messageList.remove(message);
    }, this);

  }

});