class Character extends MovableObject {
    x = 10;
    y = 150;
    speed = 10;
    height = 200;
    width = 200;
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    world;
    swimming_sound = new Audio('audio/swimming.mp3');

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.swimming_sound.play();
            }

            if (this.world.keyboard.UP && this.y > -70) {
                this.moveUp();
                this.swimming_sound.play();
            }

            if (this.world.keyboard.DOWN && this.y < 250) {
                this.moveDown();
                this.swimming_sound.play();
            }
            this.world.camera_x = -this.x + 30;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                //walk animation
                this.playAnimation(this.IMAGES_SWIM);
            }
        }, 50);
    }
}