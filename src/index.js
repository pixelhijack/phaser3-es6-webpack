import 'phaser';
import ExampleScene from './ExampleScene';
import OtherScene from './OtherScene';

const config = {
    type: Phaser.WEBGL,
    parent: 'content',
    width: 800,
    height: 600,
    scaleMode: 0, //Phaser.ScaleManager.EXACT_FIT,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 800 },
            debug: false
        }
    },
    scene: [
        ExampleScene,
        OtherScene
    ]
};

const game = new Phaser.Game(config);