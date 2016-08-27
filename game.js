/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */



var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
var devices = ['dist', 'filter'];
var line1;

function preload() {

    game.stage.backgroundColor = '#85b5e1';
	game.load.json('level','./assets/levels/level.json');

	devices.forEach(loadDevice);

	this.game.load.spritesheet('button', 'assets/pics/plus_minus.png', 31, 31);

}


function create() {

	var graphics = game.add.graphics(100, 100);
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

	graphics.lineStyle(20, 0x33FF00);
	var indent = 50;
	phaserJSON.level.forEach(function(item){
	graphics.lineStyle(5, 0x33FF00);
    	graphics.moveTo(parseInt(item.x)-indent,parseInt(item.y)-indent);
    	var link =phaserJSON.level[item.links[0]];
    	console.log(link);
    	graphics.lineTo(parseInt(link.x)-indent, parseInt(link.y)-indent);
    });



var p = new Phaser.Point(phaserJSON.level[0].x, phaserJSON.level[0].y);
    line1 = new Phaser.Line(phaserJSON.level[0].x, phaserJSON.level[0].y, phaserJSON.level[1].x, phaserJSON.level[1].y);

}

function update () {
 
    
}

function render () {

}

function loadDevice(name){
	game.load.text(name, '/assets/devices/' + name + '/' + name + '.js');
    game.load.image(name, 'assets/devices/' + name + '/' + name + '.png');
}



