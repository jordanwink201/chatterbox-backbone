$(function(){

  var messageList = new Messages();
  messageList.loadMessages();

  var messageListView = new MessageListView({collection : messageList});

  $('#messageList').append(messageListView);

});