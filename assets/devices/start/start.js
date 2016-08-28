start = function(game,x,y){
	
    Main_device.call(this, game, x, y);
    
    this.update =  function(){

    }
    this.click = function(){
    	this.value = 20;
    	this.timeIsUp();
    }
    this.custom_init = function(){
    	this.events.onInputDown.add(this.click, this);
    	this.value = 20;
    }

}

start.prototype = Object.create(Main_device.prototype);
start.prototype.constructor = start;

