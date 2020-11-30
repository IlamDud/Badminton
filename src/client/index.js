import Phaser from "phaser"

const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    scene: [],
    physics: {
        default: 'arcade',
        arcade: {
            gravity : {y: 210},
            debug: true
        }
    }
}

const game = new Phaser.Game(config);