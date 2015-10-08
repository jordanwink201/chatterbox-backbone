var Messages = Backbone.Collection.extend({
  
  model : Message,

  url : 'https://api.parse.com/1/classes/chatterbox',

  loadMessages : function(){
    this.fetch({data : { order: '-createdAt' }});
  },

  parse : function(response){
    console.log('loading messages...');
    var results = [];
    var rooms = [];
    for (var i = response.results.length - 1; i >= 80; i--) {
      results.push(response.results[i]);

      // Get the List of Rooms
      if (response.results[i].room && rooms.indexOf(response.results[i].room) === -1) {
        rooms.push(response.results[i].room);
      }

    }

    return results;
  },

  doSomething: function(rooms){

  }


});