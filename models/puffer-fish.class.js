class PufferFish extends MovableObject {
    height = 85;
    width = 85;

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');

        this.x = 400 + Math.random() * 500; //Zahl zwischen 200 und 700
        this.y = 50 + Math.random() * 200; //Zahl zwischen 50 und 200
    }
}