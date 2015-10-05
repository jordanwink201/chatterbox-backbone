$(function(){



  var messageList = new Messages();
  messageList.loadMessages();

  var messageListView = new MessageListView({collection : messageList});

  $('#messageList').append(messageListView);

  // give it access to the collection so it can add a new message to the collection
  var form = new MessageFormView({collection : messageList});

});