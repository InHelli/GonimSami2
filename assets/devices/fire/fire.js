dist = function(game,x,y){
    Main_device.call(this, game, x, y);

    this.update_timer = function(){
        
        if(this.currentTimer > 1){
        	if(this.currentTimer % 10 ==  0){
        		this.value++; 
        	}
            this.currentTimer =  this.currentTimer - 1;
            this.myProgressBar.setPercent((this.currentTimer / this.maxTime) * 100);
        }else if(this.currentTimer ==  1 && this.value > 0){
            this.timeIsUp();
        }
        
    }
}

dist.prototype = Object.create(Main_device.prototype);
dist.prototype.constructor = dist;

dist.prototype.update = function() {
	Main_device.prototype.update();
}; 
