/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.stage.backgroundColor = '#85b5e1';

    game.load.baseURL = 'http://examples.phaser.io/assets/';
    game.load.crossOrigin = 'anonymous';

    game.load.image('player', 'sprites/phaser-dude.png');
    game.load.image('platform', 'sprites/platform.png');

}

var player;
var platforms;
var cursors;
var jumpButton;
var lastInputvelocity;

function create() {

    player = game.add.sprite(100, 200, 'player');

    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    platforms = game.add.physicsGroup();

    platforms.create(500, 150, 'platform');
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');

    platforms.setAll('body.immovable', true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update () {

    game.physics.arcade.collide(player, platforms);

    //player.body.velocity.x = 0;
    player.body.acceleration.x = 0;
    if((player.body.onFloor() || player.body.touching.down)){
        if (cursors.left.isDown )
        {   
            lastInputvelocity 
            player.body.acceleration.x = -200;
        }
        else if (cursors.right.isDown)
        {
            player.body.acceleration.x = 200;
        }
        else if( Math.abs (player.body.velocity.x) > 20){
            player.body.velocity.x = player.body.acceleration.x -= player.body.acceleration.x *0.1;
        }else{
            player.body.velocity.x = 0;
        }
    }
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
    {
        player.body.velocity.y = -400;
    }
    
}

function render () {

}
