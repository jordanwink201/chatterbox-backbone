var RoomListView = Backbone.View.extend({

  el : '#roomlist',

  tagName : 'ul',

  className : 'nav nav-tabs',

  initialize : function(){
    this.render();
  },

  render : function(){
    console.log('rendering room list');
    this.$el.append(
      this.collection.map(function(model){
        return new RoomView({model : model}).render();
      })
    );
  }

  // that.$el.append(new TodoView({model: model.toJSON()}).render().el);

});