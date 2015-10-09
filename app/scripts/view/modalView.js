var ModalView = Backbone.View.extend({

  template : _.template( $('#modalTemplate').html() ),

  events : {
    'click button.list-group-item' : 'toggleSelection',
    'click #submit' : 'enterRoom'
  },

  initialize : function(){
    this.render();
  },

  render : function(){
    return this.$el.html( this.template(this.model.attributes) );
  },

  toggleSelection : function(e){
    var item = e.target;
    this.model.set({ selectedRoom : $(item).text() });
    $(item).toggleClass('active');
  },

  enterRoom : function(e){
    // Set the Username
    var item = this.$el.find('input');    
    this.model.set({ user : $(item).val() });

    // trigger a function
    this.model.enterRoom();
  } 

});