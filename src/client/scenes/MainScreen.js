import Phaser from 'phaser'
import * as Colyseus from 'colyseus.js'

export default class MainScreen extends Phaser.Scene{
    
    constructor(){
        super("MainScene")
        this.client
    }

    init(){
        this.client = new Colyseus.Client('ws://localhost:2567')
    }

    preload(){

    }

    async create(){
        // We use joinOrCreate, if is the first to join
        const room = await this.client.joinOrCreate('my_room')
        console.log(room.name)
    }

    update(){


    }
}