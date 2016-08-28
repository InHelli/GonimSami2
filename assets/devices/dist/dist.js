dist = function(game,x,y){
    Main_device.call(this, game, x, y);
}

dist.prototype = Object.create(Main_device.prototype);
dist.prototype.constructor = dist;

dist.prototype.update = function() {
	Main_device.prototype.update();
}; 
