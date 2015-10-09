// this model has access to both collections
var AppModel = Backbone.Model.extend({

  initialize : function(){

    this.username = 'Jordan';

    // Modal
    this.modal = new Modal();

    // Room Collection
    var rooms = [ { roomname : 'Maker Square',}, { roomname : 'Hack Reactor',}, { roomname : 'App Academy', } ];
    this.roomList = new RoomsList(rooms);

    // Friend Collection
    this.friendList = new FriendList();

    // Message Collection
    this.messageList = new Messages();

    // Modal Listeners
    this.modal.on('enterRoom', function(modal){
      // find the room 
      var room = modal.get('selectedRoom');

      // call the getRoomMessages function and pass the room name      
      this.roomList.trigger('getRoomMessages', room);
      $('#roomModal').modal('hide');
    }, this);
    
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

      // Set the h1 tag to be the room name as well
      $('#roomTitle').text(room);

    }, this);

  }

});