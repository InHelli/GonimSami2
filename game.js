/**
 * Generated from the Phaser Sandbox
 *
 * http://phaser.io/sandbox/pRNQlDmQ
 *
 * This source requires Phaser 2.6.1
 */



var theGame = function(game){
	this.lvl = game.lvl;
	this.lel = ['./assets/levels/level1.json','./assets/levels/level2.json','./assets/levels/level3.json'];
	this.devices_type = ['dist', 'filter','start','end', 'fire'];
    this.devices = [];
}



theGame.prototype = {

    preload:function() {

        this.stage.backgroundColor = '#85b5e1';
        //this.cache.removeJSON('level');
    	this.load.json('level',this.lel[this.game.lvl]);
    	var temp_load = this.load;
    	this.devices_type.forEach(function (name){
    	temp_load.text(name, '/assets/devices/' + name + '/' + name + '.js');
        temp_load.image(name, 'assets/devices/' + name + '/' + name + '.png');
    	});
},
    create:function () {
        this.game.score = 0;
    	this.graphics = this.add.graphics(100, 100);
    	this.devices_type.forEach(function(item){
    		eval(this.cache.getText(item));
    	}, this);


    	this.phaserJSON = this.cache.getJSON('level');
    	this.phaserJSON.level.forEach(function(item){
            var fn_item = window[item.type];
            if (typeof fn_item === 'function') {
                var t_items = new fn_item(this.game, item.x, item.y);
                t_items.init();
                this.devices.push(t_items);
            }
        }, this);


    	var indent = 50	;
        this.graphics.lineStyle(20, 0x33FF00);
        var indent = 50;
        for (var item_key in this.phaserJSON.level) {
            var item = this.phaserJSON.level[item_key];
            this.graphics.lineStyle(5, 0x33FF00);
            item.links.forEach(function(item_link) {
                this.graphics.moveTo(parseInt(item.x)-indent,parseInt(item.y)-indent);
                var link =this.phaserJSON.level[parseInt(item_link)];
                this.devices[item_key].setLink(this.devices[parseInt(item_link)]);
                this.graphics.lineTo(parseInt(link.x)-indent, parseInt(link.y)-indent);

            }, this);
        };

    }

}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

