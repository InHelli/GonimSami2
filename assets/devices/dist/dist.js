dist = function(game,x,y){
	
	Phaser.Sprite.call(this, game, x, y, this.constructor.name);
    game.add.existing(this);

}

dist.prototype = Object.create(Phaser.Sprite.prototype);
dist.prototype.constructor = dist;

dist.prototype.update = function() {

    //  Automatically called by World.update
    // this.angle += 1;

}; 