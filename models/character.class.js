class Character extends MovableObject {
    x = 10;
    y = 150;
    speed = 10;
    height = 180;
    width = 180;
    IMAGES_SWIM = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png',
    ];
    IMAGES_DEAD = [
        'img/1.Sharkie/6.dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.dead/1.Poisoned/9.png',
        'img/1.Sharkie/6.dead/1.Poisoned/10.png',
        'img/1.Sharkie/6.dead/1.Poisoned/11.png',
        'img/1.Sharkie/6.dead/1.Poisoned/12.png'
    ];
    IMAGES_HURT_POISEN = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/5.png'
    ];
    IMAGES_ATTACK = [
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/Op2 (Without Bubbles)/7.png',
    ];

    world;
    swimming_sound = new Audio('audio/swimming.mp3');
    isAttacking = false;

    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT_POISEN);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
        // this.applyGravityForDeath();
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

            if (this.world.keyboard.SPACE && !this.isAttacking) {
                this.isAttacking = true;
                this.currentImage = 0;
            }
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_POISEN);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                //walk animation
                this.playAnimation(this.IMAGES_SWIM);
            } else if (this.isAttacking) {
                //attack animation
                setTimeout(() => this.isAttacking = false, this.IMAGES_ATTACK.length * 50)
                this.playAnimation(this.IMAGES_ATTACK);
            }
        }, 50);
    }

    //Funktion für eine Animation die mehrfach abspielen kann bei umbau
    // isAttacking() {
    //     let timepassed = new Date().getTime() - this.world.keyboard.LAST_SPACE; //difference in ms
    //     timepassed = timepassed / 1000; //difference in s
    //     return timepassed < 0.5;
    // }

}