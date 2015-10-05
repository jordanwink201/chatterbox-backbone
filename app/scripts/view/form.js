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
    console.log('collection : ', this.collection);
    // get the input 
    var message = this.$el.find('input').val();
    // add to the collection?
    // this.collection.add({
    //   title : 
    // })
  }

});