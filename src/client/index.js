import 'regenerator-runtime/runtime'
import Phaser from 'phaser'
import MainScreen from './scenes/MainScreen'

const config = {
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    scene: [MainScreen],
    physics: {
        default: 'arcade',
        arcade: {
            gravity : {y: 210},
            debug: true
        }
    }
}

const game = new Phaser.Game(config);