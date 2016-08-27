Main_device = function(game,x,y){
	
    this.over = function (item){
    	this.resfreshGraphics(0xFF0000);
    }
    this.out = function(item){
    	this.resfreshGraphics(0xFFFFFF);
    }

    this.resfreshGraphics = function (color){
    	graphics.clear();
    	graphics.beginFill(0x888888);
		graphics.lineStyle(2, color, 1);
    	graphics.drawRect(0, 0, 100, 100);
    	graphics.endFill();
    }


    Phaser.Sprite.call(this, game, x, y);
	var graphics = game.add.graphics();
	this.resfreshGraphics(0xFFFFFF);

	this.addChild(graphics);
    var image = game.make.sprite(0,0,this.constructor.name);
    image.width = 100;
    image.height = 100;
	this.addChild(image);
    game.add.existing(this);
    

    this.inputEnabled = true;
    this.events.onInputOver.add(this.over, this);
    this.events.onInputOut.add(this.out, this);

    this.healthValue = 100;
    this.myHealthBar = new HealthBar(this.game, {x: 25, y: 53, height: 10, width: 100});

 	this.addChild(this.myHealthBar);
 	// this.minusButton = this.game.add.button(100, 300, 'button', onMinusClick, this, 1, 1, 1, 1);
  //   this.plusButton = this.game.add.button(150, 300, 'button', onPlusClick, this, 0);
    //this.addChild(myHealthBar);
}

Main_device.prototype = Object.create(Phaser.Sprite.prototype);
Main_device.prototype.constructor = Main_device;

Main_device.prototype.update = function() {

    //  Automatically called by World.update
    // this.angle += 1;


}; 

// function onPlusClick(){
//       this.healthValue = this.healthValue + 10;
//       if(this.healthValue > 100) this.healthValue = 100;
//       this.myHealthBar.setPercent(this.healthValue);
// }

// function onMinusClick(){
//       this.healthValue = this.healthValue - 10;
//       if(this.healthValue < 0) this.healthValue = 0;
//       this.myHealthBar.setPercent(this.healthValue);
// }