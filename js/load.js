var loadState = {

  preload: function() {
    //LOAD YOUR ASSETS HERE (JSON MAP, PLAYER PNG, etc...)
    game.load.image('player', 'assets/player.png');
    game.load.tilemap('world', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/retro.png')
    game.load.image('sky','assets/sky.png');
  },



  create: function() {
    game.state.start('menu');
  }
}
