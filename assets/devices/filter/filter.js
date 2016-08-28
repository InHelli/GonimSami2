filter = function(game,x,y){
	
    Main_device.call(this, game, x, y);
    this.maxTime = 300;
    this.cooldown = 180;
    var max = 120;
    var min = 100;
    this.update_timer = function(){
    	if(this.currentTimer >=  1){
            this.myProgressBar.setPercent((this.currentTimer / this.maxTime) * 100);
        }
        if(this.currentTimer > 1){
            this.currentTimer =  this.currentTimer - 1;
            if(this.cooldown > 0 && this.value > 0){
            		this.cooldown -= 1;
            	}
            if(this.cooldown <=  0){
            	console.log('shit!');
            	this.value *= 0.8;
            	this.cooldown = Math.random() * (max - min) + min;
            } 
            
        }else if(this.currentTimer ==  1 && this.value > 0){
            this.timeIsUp();
        }


        if(this.cooldown < 60 && this.value > 0){
            	this.boxColor = 0x882222;
            }else{
	           	this.boxColor = 0x888888;
            }
    	this.resfreshGraphics();
    }

    this.click = function(){
    	console.log(this.cooldown);
        this.cooldown = Math.random() * (max - min) + min;
    }
    this.custom_init = function(){
        this.events.onInputDown.add(this.click, this);
    }
    this.custom_start = function(){
    	this.cooldown = Math.random() * (max - min) + min;
    }
}

filter.prototype = Object.create(Main_device.prototype);
filter.prototype.constructor = filter;
