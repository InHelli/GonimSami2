/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */



var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
var devices = ['dist', 'filter'];


function preload() {

    game.stage.backgroundColor = '#85b5e1';
	game.load.json('level','./assets/levels/level.json');

	devices.forEach(loadDevice);

	this.game.load.spritesheet('button', 'assets/pics/plus_minus.png', 31, 31);

}


function create() {
	devices.forEach(function(item){
		eval(game.cache.getText(item));
	});

	var phaserJSON = game.cache.getJSON('level');
    phaserJSON.level.forEach(function(item){
    	var fn_item = window[item.type];
    	if(typeof fn_item === 'function') {
    		t_items = new fn_item(game, item.x, item.y);
    		t_items.init();
    	}
    });

}

function update () {
 
    
}

function render () {

}

function loadDevice(name){
	game.load.text(name, '/assets/devices/' + name + '/' + name + '.js');
    game.load.image(name, 'assets/devices/' + name + '/' + name + '.png');
}



