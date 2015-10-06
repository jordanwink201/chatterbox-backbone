var Messages = Backbone.Collection.extend({
  
  model : Message,

  url : 'https://api.parse.com/1/classes/chatterbox',

  loadMessages : function(){
    this.fetch({data : { order: '-createdAt' }});
  },

  parse : function(response){
    console.log('parsing...');
    var results = [];
    for (var i = response.results.length - 1; i >= 50; i--) {
      // console.log('response.results[i] : ', response.results[i]);
      results.push(response.results[i]);
    }
    return results;
  }


});