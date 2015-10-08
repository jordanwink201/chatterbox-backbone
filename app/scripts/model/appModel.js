// this model has access to both collections
var AppModel = Backbone.Model.extend({

  initialize : function(){

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

    // Friend Collection
    this.friendList = new FriendList();

    // Message Collection
    this.messageList = new Messages();
    

    // Message List Listeners
    this.messageList.on('toggleFriend', function(message){
      if(!this.friendList.contains(message)){
        this.friendList.add(message);
      } else {
        this.friendList.remove(message);
      }      
    }, this);

    this.messageList.on('removeMessage', function(message){
      this.messageList.remove(message);
    }, this);

    // Room List Listeners
    this.roomList.on('getRoomMessages', function(room){
      console.log('get room messages for room : ', room);
      // Load the messages
      this.messageList.loadMessages();

    }, this);

  }

});