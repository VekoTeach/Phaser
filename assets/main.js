var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update , render:render });

function preload() {

    game.load.image('sky', 'assets/sky.png');
    game.load.tilemap('world', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/retro.png')

    game.load.spritesheet('playa', 'assets/player_sheet.png', 32, 32);

}

var player;
var platforms;
var cursors;
var map;
var tileset;
var layer;
var collision;

function create() {

    //  We're going to be using physics, so enable the Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    //  A simple background for our game

    map = game.add.tilemap('world');
    // needs to match name in JSON file under tileset!
    map.addTilesetImage('retro','tiles');
    layer = map.createLayer('background');
    layer.resizeWorld();
    collision = map.createLayer('collision');
    collision.resizeWorld();
    map.setCollisionBetween(1,1000,true,collision);
    // The player and its settings
    player = game.add.sprite(32, game.world.height - 300, 'playa');
    player.animations.add('walk', [1,2,3,4], 8, true);
    player.anchor.setTo(0.5,0.5);
    game.camera.follow(player);
    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 600;
    player.body.collideWorldBounds = true;
    player.frame = 0;


    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    game.physics.arcade.collide(player,collision);
    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;
    if (cursors.left.isDown)
    {
        //  Move to the left
        if (player.scale.x > 0){
          player.scale.x *= -1;
        }

        player.body.velocity.x = -150;

        player.animations.play('walk');


    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        if (player.scale.x < 0){
          player.scale.x *= -1;
        }
        player.body.velocity.x = 150;
        player.animations.play('walk');
    }
    else {
      player.animations.stop();
      player.frame = 0;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.blocked.down)
    {
        player.body.velocity.y = -350;
    }

}
function render() {
  game.debug.body(player);
  game.debug.body(collision);
}
