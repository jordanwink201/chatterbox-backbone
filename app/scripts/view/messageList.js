var MessageListView = Backbone.View.extend({

  el : '#messageList',

  initialize : function(){
    this.collection.on('sync', this.render, this);
  },

  render : function(){

    console.log('collection : ', this.collection);
    this.$el.children().detach();

    this.$el.html('<tr><th>TIME</th><th>USER NAME</th><th>TEXT</th><th></th><th></th></tr>').append(
      this.collection.map(function(model){
        return new MessageView({model : model}).render();
      })
    );
  }

});