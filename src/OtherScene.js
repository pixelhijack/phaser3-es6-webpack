class OtherScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'OtherScene'
        });
    }
    preload(){
        console.log('[ OtherScene ] preload');
        this.load.image('logo', 'assets/images/logo.png');
    }
    create(){
        console.log('[ OtherScene ] create');
        const logo = this.add.image(400, 150, 'logo');

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: 'Power2',
            yoyo: true,
            loop: -1
        });
    }
    update(){
        console.log('[ OtherScene ] update');
    }
}

export default OtherScene;
