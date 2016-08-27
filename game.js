/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */




var theGame = function(game){
	
	this.devices = ['dist', 'filter'];
	
}
// var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update, render: render, });



theGame.prototype = {
 preload:function() {

    this.stage.backgroundColor = '#85b5e1';
	this.load.json('level','./assets/levels/level.json');
	var temp_load = this.load;
	this.devices.forEach(function (name){
	temp_load.text(name, '/assets/devices/' + name + '/' + name + '.js');
    temp_load.image(name, 'assets/devices/' + name + '/' + name + '.png');
	});

},


create:function () {

	this.graphics = this.add.graphics(100, 100);
	this.devices.forEach(function(item){
		eval(this.cache.getText(item));
	}, this);


	var phaserJSON = this.cache.getJSON('level');
	console.log(phaserJSON);
     phaserJSON.level.forEach(function(item){
    	 eval("new " + item.type + "(this, " + item.x + "," + item.y + ");");
     },this);


	var indent = 50	;
phaserJSON.level.forEach(function(item){
	this.graphics.lineStyle(5, 0x33FF00);
    	this.graphics.moveTo(parseInt(item.x)-indent,parseInt(item.y)-indent);
    	var link =phaserJSON.level[item.links[0]];
    	console.log(link);
    	this.graphics.lineTo(parseInt(link.x)-indent, parseInt(link.y)-indent);
     },this);


}
}


