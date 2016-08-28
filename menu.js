var Menu = {

    preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
        game.load.image('menu', './assets/pics/menu.jpg');
    },

    create: function () {

        // Add menu screen.
        // It will act as a button to start the game.
        this.add.button(100, 100, 'menu', this.startGame, this.startGame.bind(this));

    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('game');

    }

};