var MessageFormView = Backbone.View.extend({

  el : '#messageInputForm',

  events : {
    'click .submit' : 'submitMessage'
  },

  initialize : function(){
    this.render();
  },

  render : function(){
    console.log(this.$el);
    var template = _.template( $('#messageForm').html(), {} );
    this.$el.html( template() );
  },

  submitMessage : function(){
    var objToSend = {};
    var userNameArr = window.location.search.split('=');
    objToSend.username = userNameArr[1];
    objToSend.text = this.$el.find('input#message').val();
    objToSend.room = this.$el.find('input#roomName').val();


    var newMessage = new Message(objToSend);
    console.log('newMessage : ', newMessage);
    newMessage.save();
  }

});