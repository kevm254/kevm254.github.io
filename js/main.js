let game;
let score;
let soundOn = true;
let musicOn = true;

window.onload = function() {
    if (screen.width > 1500) {
        game = new Phaser.Game(640, 480, Phaser.AUTO, 'ph_game');
        Phaser.WebGL;
        Phaser.Canvas;
    } else {
        game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, 'ph_game');
    }

    game.state.add("StateTitle", StateTitle);
    game.state.add("StateInstruction", StateInstruction);
    game.state.add("StateOver", StateOver);
    game.state.add("StateMain", StateMain);
    game.state.start("StateTitle");
};