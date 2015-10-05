var MessageFormView = Backbone.View.extend({

  el : '#messageInputForm',

  events : {
    'click .submit' : 'submitMessage'
  },

  initialize : function(){
    this.render();
  },

  render : function(){
    var template = _.template( $('#messageForm').html(), {} );
    this.$el.html( template() );
  },

  submitMessage : function(){
    var message = {};
    var userNameArr = window.location.search.split('=');
    message.username = userNameArr[1];
    message.text = this.$el.find('input#message').val();
    message.room = this.$el.find('input#roomName').val();

    this.collection.create(message);
  }

});