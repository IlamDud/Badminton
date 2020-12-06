import Phaser from 'phaser'
import * as Colyseus from 'colyseus.js'

export default class MainScreen extends Phaser.Scene{
    
    constructor(){
        super("MainScene")
        this.client
    }

    async joinRoom(room){
        if(typeof room !== undefined){
            try{
                const room = await this.client.joinById(roomID)
                console.log(`Share this ID for you ${room.name}: ${room.id}'`)
            } catch(e){
                console.error('join error', e)
            }
        }
    }

    async createRoom(){
        try{
            const room = await this.client.joinOrCreate('my_room')
            console.log(room.name)
        } catch(e) {
            console.error('join error', e)
        }
    }

    init(){
        this.client = new Colyseus.Client('ws://localhost:2567')
        this.keyboard = this.input.keyboard.createCursorKeys();
    }

    preload(){

    }

    async create(){
        
    }

    update(){
        if(this.keyboard.space.isDown){
            this.createRoom();
        }
        if(this.keyboard.up.isDown){
            let roomID = prompt('Type the ID of the room to join')
            this.joinRoom(roomID)
        }
    }
}