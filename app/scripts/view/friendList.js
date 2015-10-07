var FriendListView = Backbone.View.extend({

  tagName : 'ul',

  className : 'list-group',

  template : _.template('<li class="list-group-item">You Have No Friends</li>'),

  initialize : function(){
    this.render();
    this.collection.on('add remove', this.render, this);
  },

  render : function(){

    if (this.collection.length === 0) {
      this.$el.html( this.template() );
    } else {
      this.$el.html('').append(
        this.collection.map(function(model){
          return new FriendView({model : model}).render();
        })
      );
    }

    var position = $('.tab-content').position();
    this.$el.css('margin-top', position.top);

  }

});