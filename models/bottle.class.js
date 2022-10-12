class Bottle extends MovableObject {
    x = 200;
    y = 50;
    height = 80;
    width = 60;

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Light - Left.png');
        this.x = 200 + Math.random() * 2000;
        this.y = 355;
    }
}