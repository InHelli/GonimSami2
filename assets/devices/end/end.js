end = function(game,x,y){
    Main_device.call(this, game, x, y);
}

end.prototype = Object.create(Main_device.prototype);
end.prototype.constructor = end;

end.prototype.update = function() {
	Main_device.prototype.update();
}; 

end.prototype.timeIsUp = function(value) {
 
    this.game.score += this.value;
    this.value = 0;
    console.log(this.game.score);
}