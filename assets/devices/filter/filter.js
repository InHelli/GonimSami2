filter = function(game,x,y){
	
    Main_device.call(this, game, x, y);
    this.update = function(){
    	this.update_timer();
    };
    this.maxTime = 300;
}

filter.prototype = Object.create(Main_device.prototype);
filter.prototype.constructor = filter;
