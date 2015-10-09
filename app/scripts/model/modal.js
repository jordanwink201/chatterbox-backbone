var Modal = Backbone.Model.extend({

  defaults : {
    title : 'Pick a Room to Enter',
    roomList : ['Maker Square', 'Hack Reactor', 'App Academy']
  },

  enterRoom : function(){
    this.trigger('enterRoom', this);
  }

});