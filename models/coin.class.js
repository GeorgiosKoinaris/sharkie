class Coin extends MovableObject {
    x = 200;
    y = 50;
    height = 55;
    width = 50;

    constructor() {
        super().loadImage('img/4. Marcadores/1. Coins/1.png');
        this.x = 200 + Math.random() * 2000;
        this.y = 355;
    }
}