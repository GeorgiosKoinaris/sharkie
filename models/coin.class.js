class Coin extends MovableObject {
    x = 200;
    y = 50;
    height = 55;
    width = 50;

    IMAGES_COIN = [
        'img/4. Marcadores/1. Coins/1.png',
        'img/4. Marcadores/1. Coins/2.png',
        'img/4. Marcadores/1. Coins/3.png',
        'img/4. Marcadores/1. Coins/4.png'
    ]

    offset = {
        x: 5,
        y: 5,
        width: 5,
        height: 5
    }

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = 200 + Math.random() * 2000;
        this.y = 355 + Math.random() * -300;
        this.animate();
    }

    animate() {
        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 300);
    }
}