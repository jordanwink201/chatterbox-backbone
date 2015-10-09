var Modal = Backbone.Model.extend({

  defaults : {
    title : 'Pick a Room to Enter',
    rooms : 
    [ 
      { roomname : 'Maker Square'},
      { roomname : 'Hack Reactor'},
      { roomname : 'App Academy' }
    ]
  },

  enterRoom : function(){
    this.trigger('enterRoom', this);
  }

});