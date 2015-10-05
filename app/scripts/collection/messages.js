var Messages = Backbone.Collection.extend({
  
  model : Message,

  url : 'https://api.parse.com/1/classes/chatterbox',

  loadMessages : function(){
    this.fetch();
  },

  parse : function(results){
    return results.results;
  }


});