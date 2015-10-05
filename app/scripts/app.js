$(function(){

  // Friend View And List View
  var friendList = new FriendList();
  var friendListView = new FriendListView({ collection : friendList });

  // Message Collection
  var messageList = new Messages();
  messageList.loadMessages();

  // Message View and List View
  var messageListView = new MessageListView({collection : messageList});

  $('#messageList').append(messageListView);

  // Form View
  // give it access to the collection so it can add a new message to the collection
  var form = new MessageFormView({collection : messageList});


});