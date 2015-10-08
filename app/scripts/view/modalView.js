var ModalView = Backbone.View.extend({

  template : _.template( $('#modalTemplate').html() ),

  events : {
    'click a' : 'getRoom'
  },

  initialize : function(){
    this.render();
  },

  render : function(){
    console.log('this model attributes : ', this.model.attributes);
    return this.$el.html( this.template(this.model.attributes) );
  },

  getRoom : function(){
    // close the modal
    console.log("this : ", this.model);
    // get the specified roomname
    console.log('get the room');
  }

});