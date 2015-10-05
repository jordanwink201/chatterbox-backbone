var FriendListView = Backbone.View.extend({
  
  el : '#friendList',

  tagName : 'ul',

  className : 'list-group',

  initialize : function(){
    this.render();
  },

  render : function(){

    this.$el.append(
      this.collection.map(function(model){
        return new FriendView({model : model}).render();
      })
    );


  }

});