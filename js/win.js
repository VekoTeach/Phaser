var winState = {
  create: function() {
    //HERE FOR YOU TO USE
    var endLabel = game.add.text(game.world.width/2,game.world.height/2, 'GOOD JOB',
                                                    {font: '25px Arial', fill: '#ffffff'});
    var wonLabel = game.add.text(game.world.width/2,game.world.height/2 - 80, 'PRESS "W" to restart.',
                                                    {font: '25px Arial', fill: '#ffffff'});


    var wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wKey.onDown.addOnce(this.restart,this);

  },

  restart: function() {
    game.state.start('menu');
}
}
