class ExampleScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'ExampleScene'
        });
    }
    preload(){
        console.log('[ ExampleScene ] preload');
    }
    create(){
        console.log('[ ExampleScene ] create');
        this.scene.start('OtherScene');
    }
    update(){
        console.log('[ ExampleScene ] update');
    }
}

export default ExampleScene;
