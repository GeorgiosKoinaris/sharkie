class Jellyfish extends MovableObject {
    height = 80;
    width = 80;
    direction;
    isDead = false;

    IMAGES_SWIM = [
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 2.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 3.png',
        'img/2.Enemy/2 Jelly fish/Regular damage/Lila 4.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L1.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L2.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L3.png',
        'img/2.Enemy/2 Jelly fish/Dead/Lila/L4.png',
    ];

    offset = {
        x: 1,
        y: 7,
        width: 7,
        height: 10
    }

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;

        this.x = 600 + Math.random() * 2000; //Zahl zwischen 200 und 700
        this.y = 0; //Zahl fängt bei 0 an um die die animation zu triggern
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.y <= 0) {
                this.direction = 'down'
            }
            if (this.y > 280) {
                this.direction = 'up'
            }
            if (this.direction == 'down') {
                this.moveDown();
            }
            if (this.direction == 'up') {
                this.moveUp();
            }
        }, 1000 / 60)

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 200)

        setInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 200);
    }
}