dist = function(game,x,y){
	

	Phaser.Sprite.call(this, game, x, y);
	var graphics = game.add.graphics();
	graphics.beginFill(0xFFFFFF);
	graphics.lineStyle(2, 0x0000FF, 1);
    graphics.drawRect(0, 0, 100, 100);
	this.addChild(graphics);
	this.addChild(game.make.sprite(0,0,this.constructor.name));
    game.add.existing(this);
    this.anchor.set(0.5);
    

    over = function (item){
    	graphics.graphicsData[0].fillColor = 0xFF0000;
    	console.log(graphics);
    }
    out = function(item){
    	graphics.graphicsData[0].fillColor = 0x5B5B5B;
    	console.log(graphics);
    }
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
