var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 

		this.game.load.image('gametitle', './assets/pics/menu.jpg');

	},
  	create: function(){
		this.game.state.start("GameTitle");
	}
}