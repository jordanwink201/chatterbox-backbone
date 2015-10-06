var AppView = Backbone.View.extend({

  initialize : function(){

    // Friend Collection View
    this.friendListView = new FriendListView({ collection : this.model.friendList });

    // Message Collection View
    this.messageListView = new MessageListView({collection : this.model.messageList});
    $('#messageList').append(this.messageListView);

    // Form View
    this.form = new MessageFormView({collection : this.model.messageList});
  }

});