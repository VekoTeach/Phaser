playState = {
  create: function() {
    // SET UP ALL YOUR LAYERS, PHYSICS
    game.add.image(0,0,'sky');
    this.keyboard = game.input.keyboard;
    this.player = game.add.sprite(0,0, 'player');
    game.physics.enable(this.player, Phaser.Physics.ARCADE);
    this.player.body.gravity.y = 800;
    this.player.body.collideWorldBounds = false;
    this.map = game.add.tilemap('world');
    this.map.addTilesetImage('retro', 'tiles');
    this.layer = this.map.createLayer('background');
    this.collisionLayer = this.map.createLayer('collision');
    this.collisionLayer.resizeWorld();
    this.map.setCollisionBetween(1,10000,true,this.collisionLayer);
    game.camera.follow(this.player);





  },
  update: function() {
    // GAME LOOP
    game.physics.arcade.collide(this.player,this.collisionLayer);
    if(this.keyboard.isDown(Phaser.Keyboard.A)) {
      this.player.body.velocity.x = -350;

    } else if(this.keyboard.isDown(Phaser.Keyboard.D)) {
      this.player.body.velocity.x = 350;
    }
    else {
      this.player.body.velocity.x = 0;
    }
    if(this.keyboard.isDown(Phaser.Keyboard.W) && this.player.body.blocked.down == true) {
      this.player.body.velocity.y = -400;
    }
  },
  won: function() {
    game.state.start('win');
  }
}
