/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */


<<<<<<< HEAD:game.js

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
var devices = ['dist'];
function preload() {

    game.stage.backgroundColor = '#85b5e1';
    devices.forEach(loadDevice);
=======


function preload() {
>>>>>>> refs/remotes/origin/Igor:pRNQlDmQ.js

    game.stage.backgroundColor = '#85b5e1';
    game.load.crossOrigin = "anonymous";

	// game.load.json('gameData','http://phaser.io/version.json');
	// game.cache.getJSON('gameData').
	game.load.image('einstein', './assets/pics/test.jpg');
	/*game.gameData = game.cache.getJSON('gameData');
     this.assets = this.game.gameData.assets;

     this.assets.forEach(function(item){
       switch (item.type) {
	case "image":
	     this.load.image(item.label, item.source);
	     break;	
	}	
},this);
*/
}


function create() {
<<<<<<< HEAD:game.js
	devices.forEach(function(item){
		eval(game.cache.getText(item));
	});
	
    new dist(game, 100, 100);
=======

     game.stage.backgroundColor = '#0072bc';

     

 	game.add.sprite(0, 0, 'einstein');


>>>>>>> refs/remotes/origin/Igor:pRNQlDmQ.js

}

function update () {

    
    
}

function render () {

}

function loadDevice(name){
	game.load.text(name, '/assets/devices/' + name + '/' + name + '.js');
    game.load.image(name, 'assets/devices/' + name + '/' + name + '.png');
}
