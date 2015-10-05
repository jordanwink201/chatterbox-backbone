var MessageListView = Backbone.View.extend({

  el : '#messageList',

  tagName : 'tr',

  template : _.template('<tbody><th>TIME</th> \
    <th>USER NAME</th> \
    <th>TEXT</th> \
    <th></th> \
    <th></th> \
  </tbody>'),

  initialize : function(){
    this.collection.on('sync', this.render, this);
  },

  render : function(){

    this.$el.html( this.template() ).append(
      this.collection.map(function(model){
        return new MessageView({model : model}).render();
      })
    );
  }

});