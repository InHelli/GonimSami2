filter = function(game,x,y){
	
    Main_device.call(this, game, x, y);
    
    console.log(this);
    this.update = function(){
    	this.update_timer();
    };
}

filter.prototype = Object.create(Main_device.prototype);
filter.prototype.constructor = filter;
