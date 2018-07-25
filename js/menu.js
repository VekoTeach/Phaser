var menuState = {
  create: function() {
    // HERE FOR YOU TO USE
    var openingLabel = game.add.text(game.world.width/2,game.world.height/2, 'NUE',
                                                    {font: '25px Arial', fill: '#ffffff'});
    var beginLabel = game.add.text(game.world.width/2,game.world.height/2 - 80, 'PRESS "W" to begin.',
                                                    {font: '25px Arial', fill: '#ffffff'});
    var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wKey.onDown.addOnce(this.start,this);
  },

  start: function() {
    game.state.start('play');
  }
}
