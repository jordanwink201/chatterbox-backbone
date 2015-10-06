var AppView = Backbone.View.extend({

  initialize : function(){

    console.log('model  :', this.model);

    // // Friend View And List View
    this.friendListView = new FriendListView({ collection : this.model.friendList });

    // Message View and List View
    this.messageListView = new MessageListView({collection : this.model.messageList});

    $('#messageList').append(this.messageListView);

    // Form View
    // give it access to the collection so it can add a new message to the collection
    this.form = new MessageFormView({collection : this.model.messageList});
  }

});