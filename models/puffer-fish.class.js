class PufferFish extends MovableObject {
    height = 60;
    width = 60;
    isDead = false;

    IMAGES_SWIM = [
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim5.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 1 (can animate by going up).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 2 (can animate by going down to the floor after the Fin Slap attack).png',
        'img/2.Enemy/1.Puffer fish (3 color options)/4.DIE/1.Dead 3 (can animate by going down to the floor after the Fin Slap attack).png',
    ]

    offset = {
        x: 1,
        y: 3,
        width: 5,
        height: 15
    }

    constructor() {
        super().loadImage('img/2.Enemy/1.Puffer fish (3 color options)/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.5;

        this.x = 400 + Math.random() * 1500; //Zahl zwischen 200 und 700
        this.y = 50 + Math.random() * 200; //Zahl zwischen 50 und 200
        this.animate();
        this.swimAnimation();
    }

    swimAnimation() {
        setStoppableInterval(() => {
            this.moveLeft();
        }, 1000 / 60)

        setStoppableInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 200)
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