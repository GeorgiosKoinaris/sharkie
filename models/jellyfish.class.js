class Jellyfish extends MovableObject {
    height = 80;
    width = 80;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ]

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.speed = 0.15 + Math.random() * 0.5;

        this.x = 600 + Math.random() * 2000; //Zahl zwischen 200 und 700
        this.y = 50 + Math.random() * 200; //Zahl zwischen 50 und 200
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 200)
    }
}