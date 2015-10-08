var Room = Backbone.Model.extend({

  defaults : {
    
  },

  getRoomMessages : function(room){
    this.trigger('getRoomMessages', room);
  }

});