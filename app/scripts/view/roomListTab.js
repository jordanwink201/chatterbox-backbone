var RoomListTabView = Backbone.View.extend({

  tagName : 'ul',

  className : 'nav nav-tabs',

  initialize : function(){
    this.render();
  },

  render : function(){
    this.$el.append(
      this.collection.map(function(model){
        var view = new RoomTabView({model : model});
        return view.el;
      })
    );
  }

});