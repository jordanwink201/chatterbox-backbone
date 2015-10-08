var ModalView = Backbone.View.extend({

  template : _.template( $('#modalTemplate').html() ),

  initialize : function(){
    this.render();
  },

  render : function(){
    console.log('this model attributes : ', this.model.attributes);
    return this.$el.html( this.template(this.model.attributes) );
  }

});