var gameTitle = function(game){}
 
gameTitle.prototype = {
  	create: function(){
		var gameTitle = this.game.add.sprite(100,100,"gametitle");
		// gameTitle.anchor.setTo(0.5,0.5);
		// var playButton = this.game.add.button(300,400,"play",this.playTheGame(),this);

		var playButton1 = this.game.add.button(300,350,"play",this.playTheGame.bind(this),this);
		playButton1.lvl = 0;
		var playButton1 = this.game.add.button(200,425,"play1",this.playTheGame.bind(this),this);
		playButton1.lvl = 0;
		var playButton2 = this.game.add.button(350,425,"play2",this.playTheGame.bind(this),this);
		playButton2.lvl = 1;
		var playButton3 = this.game.add.button(500,425,"play3",this.playTheGame.bind(this),this);
		playButton3.lvl = 2;
		/*var playButton2 = this.game.add.button(300,500,"play2",this.playTheGame,this);
		var playButton3 = this.game.add.button(400,500,"play3",this.playTheGame,this);

		var gameTitle1 = this.game.add.sprite(100,100,"play");
		// playButton.anchor.setTo(0.5,0.5);*/
	},
	playTheGame: function(num){
		
		this.game.lvl =  num.lvl;
		this.game.state.start("TheGame");
	}

}