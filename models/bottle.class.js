class Bottle extends MovableObject {
    x = 200;
    y = 50;
    height = 70;
    width = 50;

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Light - Left.png');
        this.x = 200 + Math.random() * 2000;
        this.y = 355;
    }
}