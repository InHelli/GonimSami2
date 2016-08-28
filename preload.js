var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 

		this.game.load.image('gametitle', './assets/pics/menu.jpg');
		this.game.load.image('play', './assets/pics/play.png');
		this.game.load.image('play1', './assets/pics/play1.png');
		this.game.load.image('play2', './assets/pics/play2.png');
		this.game.load.image('play3', './assets/pics/play3.png');

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}