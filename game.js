/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */



var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render });
var devices_type = ['dist', 'filter','start'];
var devices = [];

function preload() {

    game.stage.backgroundColor = '#85b5e1';
    this.cache.removeJSON('level');
	game.load.json('level','./assets/levels/level.json');

	devices_type.forEach(loadDevice);

	this.game.load.spritesheet('button', 'assets/pics/plus_minus.png', 31, 31);

}


function create() {
	devices = [];
	var graphics = game.add.graphics(100, 100);
	devices_type.forEach(function(item){
		eval(game.cache.getText(item));
	});
	
	var phaserJSON = game.cache.getJSON('level');
    phaserJSON.level.forEach(function(item){
    	var fn_item = window[item.type];
    	if(typeof fn_item === 'function') {
    		t_items = new fn_item(game, item.x, item.y);
    		t_items.init();
    		devices.push(t_items);
    	}
    });

	graphics.lineStyle(20, 0x33FF00);
	var indent = 50;
	for (var item_key in phaserJSON.level) {
        var item = phaserJSON.level[item_key];
	    graphics.lineStyle(5, 0x33FF00);
        item.links.forEach(function(item_link) {
            graphics.moveTo(parseInt(item.x)-indent,parseInt(item.y)-indent);
            var link =phaserJSON.level[parseInt(item_link)];
            devices[item_key].setLink(devices[parseInt(item_link)]);
            graphics.lineTo(parseInt(link.x)-indent, parseInt(link.y)-indent);

        });
    	

    };

}

function update () {
 
    
}

function render () {

}

function loadDevice(name){
	game.load.text(name, '/assets/devices/' + name + '/' + name + '.js');
    game.load.image(name, 'assets/devices/' + name + '/' + name + '.png');
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

