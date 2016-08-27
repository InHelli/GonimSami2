Main_device = function(game,x,y){
	this.game = game;
    this.value = 0;
    this.maxTime = 120;
    this.currentTimer = 2;
    this.links = [];
    Phaser.Sprite.call(this, game, x, y);

    this.over = function (item){
    	this.resfreshGraphics(0xFF0000);
    }
    this.out = function(item){
    	this.resfreshGraphics(0xFFFFFF);
    }

    this.resfreshGraphics = function (color){
    	this.graphics.clear();
    	this.graphics.beginFill(0x888888);
		this.graphics.lineStyle(2, color, 1);
    	this.graphics.drawRect(0, 0, 100, 100);
    	this.graphics.endFill();
    }

    this.setValue = function(value){
        this.value = value;
    }
    this.update_timer = function(){
        
        if(this.currentTimer > 1){
            this.currentTimer =  this.currentTimer - 1;
            this.myProgressBar.setPercent((this.currentTimer / this.maxTime) * 100);
        }else if(this.currentTimer ==  1 && this.value > 0){
            this.timeIsUp();
        }
        
    }

    this.update = function(){
        this.update_timer();
    }
    this.custom_init = function(){

    }
 	// this.minusButton = this.game.add.button(100, 300, 'button', onMinusClick, this, 1, 1, 1, 1);
  //   this.plusButton = this.game.add.button(150, 300, 'button', onPlusClick, this, 0);
    //this.addChild(myHealthBar);
}

Main_device.prototype = Object.create(Phaser.Sprite.prototype);
Main_device.prototype.constructor = Main_device;


Main_device.prototype.update = function() {
    this.update();
}; 

Main_device.prototype.init = function() {
    
    this.currentTimer = 2;
    this.graphics = this.game.add.graphics();
    this.image = game.make.sprite(0,0,this.constructor.name);
    this.addChild(this.graphics);
    this.image.width = 100;
    this.image.height = 100;
    this.addChild(this.image);
    this.events.onInputOver.add(this.over, this);
    this.events.onInputOut.add(this.out, this);
    this.healthValue = 100;
    this.myProgressBar = new HealthBar(this.game, {x: 25, y: 53, height: 10, width: 100, bar: {color: '#11FF11'}});

    this.inputEnabled = true;
    this.addChild(this.myProgressBar);
    this.resfreshGraphics(0xFFFFFF);
    this.game.add.existing(this);
    this.custom_init();
}; 

Main_device.prototype.setLink = function(link) {
    this.links.push(link);
}

Main_device.prototype.start = function(value) {
    this.value = clone(value);
    this.currentTimer = this.maxTime;
}

Main_device.prototype.timeIsUp = function(value) {
    var sending_value = this.value;
    this.links.forEach(function(item){
        if(item.currentTimer ==  1){
            item.start(sending_value);
        }
        });
        this.value = 0;
}