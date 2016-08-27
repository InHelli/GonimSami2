/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */



var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
var devices = ['dist'];


function preload() {

    game.stage.backgroundColor = '#85b5e1';
	game.load.json('gameData','/levels/level.json');

	devices.forEach(loadDevice);

}


function create() {
	devices.forEach(function(item){
		eval(game.cache.getText(item));
	});
	
    new dist(game, 100, 100);
     
    var phaserJSON = game.cache.getJSON('gameData');
     console.log(phaserJSON.level[0]);


}

function update () {
 
    
}

function render () {

}

function loadDevice(name){
	game.load.text(name, '/assets/devices/' + name + '/' + name + '.js');
    game.load.image(name, 'assets/devices/' + name + '/' + name + '.png');
}
