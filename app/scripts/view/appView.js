var AppView = Backbone.View.extend({

  initialize : function(){

    // Friend Collection View
    this.friendListView = new FriendListView({ collection : this.model.friendList });
    $('#friendList').append(this.friendListView.el);

    // Room Tab View
    this.RoomListTabView = new RoomListTabView({ collection : this.model.roomList });
    $('#roomTabs').append(this.RoomListTabView.el);

    // Room Collection
    this.RoomListTabView.collection.map(function(model){
        var view = new RoomListView({ model : model });
        $('#roomContents').append(view.el);
    });

    // Message Collection View
    this.messageListView = new MessageListView({collection : this.model.messageList});
    $('#messageList').append(this.messageListView);

    // Form View
    this.form = new MessageFormView({collection : this.model.messageList});
  }

});