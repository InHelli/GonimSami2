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
    game.load.crossOrigin = "anonymous";

	game.load.json('gameData','/levels/level.json');
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

     game.stage.backgroundColor = '#0072bc';
     
     var phaserJSON = game.cache.getJSON('gameData');
     console.log(phaserJSON);
 	game.add.sprite(0, 0, 'einstein');



}

function update () {

    
    
}

function render () {

}
