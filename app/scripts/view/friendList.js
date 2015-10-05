var FriendListView = Backbone.View.extend({
  
  el : '#friendList',

  tagName : 'div',

  // className : 'list-group',

  initialize : function(){
    this.render();
  },

  render : function(){

    this.$el.children().detach();

    this.$el.html('').append(
      this.collection.map(function(model){
        return new FriendView({model : model}).render();
      })
    );

    var position = $('.tab-content').position();
    this.$el.css('margin-top', position.top);

  }

});