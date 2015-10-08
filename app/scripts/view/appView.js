var AppView = Backbone.View.extend({

  initialize : function(){

    // Friend Collection View
    this.friendListView = new FriendListView({ collection : this.model.friendList });
    $('#friendList').append(this.friendListView.el);
    
    // Message Collection View
    this.messageListView = new MessageListView({collection : this.model.messageList});
    $('#messageList').append(this.messageListView);

    // Room Collection View
    this.RoomListTabView = new RoomListTabView({ collection : this.model.roomList });
    $('#roomlist').append(this.RoomListTabView.el);

    // Form View
    this.form = new MessageFormView({collection : this.model.messageList});
  }

});