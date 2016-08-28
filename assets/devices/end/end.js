end = function(game,x,y){
    Main_device.call(this, game, x, y);
}

end.prototype = Object.create(Main_device.prototype);
end.prototype.constructor = end;

end.prototype.update = function() {
	Main_device.prototype.update();
}; 

end.prototype.timeIsUp = function() {
    this.game.score += this.value;
    console.log("Градус вашего напитка: " + this.value);
    console.log("Общий градус: " + this.game.score);
    this.value = 0;
}