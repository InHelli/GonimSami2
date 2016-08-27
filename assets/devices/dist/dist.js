dist = function(game,x,y){
	
    over = function (item){
    	resfreshGraphics(0xFF0000);
    }
    out = function(item){
    	resfreshGraphics(0xFFFFFF);
    }

    resfreshGraphics = function (color){
    	graphics.clear();
    	graphics.beginFill(0x888888);
		graphics.lineStyle(2, color, 1);
    	graphics.drawRect(0, 0, 100, 100);
    	graphics.endFill();
    }


    Phaser.Sprite.call(this, game, x, y);
	var graphics = game.add.graphics();
	resfreshGraphics(0xFFFFFF);

	this.addChild(graphics);
	this.addChild(game.make.sprite(0,0,this.constructor.name));
    game.add.existing(this);
    this.anchor.setTo(0.5, 0.5);

    this.inputEnabled = true;
    this.events.onInputOver.add(over, this);
    this.events.onInputOut.add(out, this);
}

dist.prototype = Object.create(Phaser.Sprite.prototype);
dist.prototype.constructor = dist;

dist.prototype.update = function() {

    //  Automatically called by World.update
    this.angle += 1;


}; 
