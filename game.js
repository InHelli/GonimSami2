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

	this.game.load.spritesheet('button', 'assets/buttons/plus_minus.png', 31, 31);

}


function create() {
	devices.forEach(function(item){
		eval(game.cache.getText(item));
	});
	
    new dist(game, 100, 100);


// ----------------------------------------------

	var barre1_x = 300;
    var barre1_y = 300;
    this.healthValue = 100;
 	this.myHealthBar = new HealthBar(this.game, {x: barre1_x, y: barre1_y});
 	this.minusButton = this.game.add.button(barre1_x - 50, barre1_y + 30, 'button', onMinusClick, this, 1, 1, 1, 1);
    this.plusButton = this.game.add.button(barre1_x , barre1_y + 30, 'button', onPlusClick, this, 0);



// -----------------------------------------------

     
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

function onPlusClick(){
      this.healthValue = this.healthValue + 10;
      if(this.healthValue > 100) this.healthValue = 100;
      this.myHealthBar.setPercent(this.healthValue);
}

function onMinusClick(){
      this.healthValue = this.healthValue - 10;
      if(this.healthValue < 0) this.healthValue = 0;
      this.myHealthBar.setPercent(this.healthValue);
}

