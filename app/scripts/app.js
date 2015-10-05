$(function(){

  var messageList = new Messages();

  messageList.loadMessages();

  console.log('messageList : ', messageList);

  var messageListView = new MessageListView({collection : messageList});

  $('#messageList').append(messageListView);

});