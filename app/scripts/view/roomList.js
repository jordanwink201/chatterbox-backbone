var RoomListView = Backbone.View.extend({

  template : _.template(' \
    <div role="tabpanel" class="tab-pane fade in active" id="<%= roomname %>"> \
      <div class="jumbotron"> \
        <div id="messageInputForm"></div> \
        <table id="messageList"></table> \
      </div> \
  '),

  initialize : function(){
    this.render();
  },

  render : function(){
    this.$el.html( this.template( this.model.attributes ));
    return this.el;
  }

});