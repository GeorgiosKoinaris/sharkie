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
        x: 8,
        y: 8,
        width: 8,
        height: 13
    }

    constructor() {
        super().loadImage('img/2.Enemy/2 Jelly fish/Regular damage/Lila 1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;

        this.x = 600 + Math.random() * 1600; //Zahl zwischen 600 und 1600
        this.y = 0; //Zahl fängt bei 0 an um die die animation zu triggern
        this.swimAnimation();
        this.animate();
    }

    swimAnimation() {
        setStoppableInterval(() => {
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

        setStoppableInterval(() => this.playAnimation(this.IMAGES_SWIM), 200)
    }

    animate() {
        setStoppableInterval(() => {
            if (this.isDead) {
                this.playAnimation(this.IMAGES_DEAD);
                this.applyGravityForDeath();
            }
        }, 200);
    }
}