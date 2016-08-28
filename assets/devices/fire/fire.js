fire = function(game,x,y){
    Main_device.call(this, game, x, y);
    
    this.update =  function(){

    }
    this.click = function(){
        this.value = 1;
        this.links.forEach(function(item){
            if(item.__proto__.constructor.name === 'dist' && item.value > 0){
                var max = item.maxTime * 0.8;
                var min = item.maxTime * 0.3;
                var power = parseInt(Math.random() * (max - min) + min);
                item.currentTimer += power;
            }
        }, this);
    }
    this.custom_init = function(){
        this.events.onInputDown.add(this.click, this);
    }
};

fire.prototype = Object.create(Main_device.prototype);
fire.prototype.constructor = fire;

fire.prototype.update = function() {
	Main_device.prototype.update();
}; 
