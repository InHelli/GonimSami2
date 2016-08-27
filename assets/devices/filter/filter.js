filter = function(game,x,y){
	
    Main_device.call(this, game, x, y);
}

filter.prototype = Object.create(Main_device.prototype);
filter.prototype.constructor = filter;

filter.prototype.update = function() {

    //  Automatically called by World.update
    // this.angle += 1;


}; 
