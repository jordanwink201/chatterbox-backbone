var Modal = Backbone.Model.extend({

  defaults : {
    title : 'Pick a Room to Enter',
    roomList : ['room1', 'room2', 'room3']
  },

  enterRoom : function(){
    this.trigger('enterRoom', this);
  }

});