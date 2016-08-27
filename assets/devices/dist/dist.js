dist = function(game,x,y){
	
    Main_device.call(this, game, x, y);
    this.prototype.over = function(item){};
}

dist.prototype = Object.create(Main_device.prototype);
dist.prototype.constructor = dist;

dist.prototype.update = function() {

    //  Automatically called by World.update
    // this.angle += 1;


}; 
