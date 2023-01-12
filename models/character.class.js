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
    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];
    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png',
    ];
    IMAGES_LONG_IDLE_SLEEP = [
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ]
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
    lastMove = new Date().getTime();
    secondsWaiting = 4;
    isSleeping = false;

    offset = {
        x: 33,
        y: 88,
        width: 33,
        height: 42
    }


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT_POISEN);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE_SLEEP);
        this.animate();
        this.isWaiting();
        // this.isSleeping();
        // this.applyGravityForDeath();
    }

    isWaiting() {
        let timePassed = new Date().getTime() - this.lastMove; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed > this.secondsWaiting;
    }

    // isSleeping() {
    //     let timePassed = new Date().getTime() - this.lastMove; // Difference in ms
    //     return timePassed > 9400;
    // }

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
                //animation for death
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.isHurt()) {
                //hurt animation
                this.playAnimation(this.IMAGES_HURT_POISEN);
            } else if (this.isMoving()) {
                //walk animation
                this.playAnimation(this.IMAGES_SWIM);
                this.lastMove = new Date().getTime();
            } else if (this.isAttacking) {
                //attack animation
                setTimeout(() => this.isAttacking = false, this.IMAGES_ATTACK.length * 100)
                this.playAnimation(this.IMAGES_ATTACK);
                this.lastMove = new Date().getTime();
            } else {
                if (!this.isMoving() && !this.isWaiting()) {
                    //idle animation
                    this.playAnimation(this.IMAGES_IDLE);
                    this.isSleeping = false;
                }
                if (this.isWaiting() && !this.isSleeping) {
                    //long_idle animation
                    this.playAnimation(this.IMAGES_LONG_IDLE);
                    setTimeout(() => this.isSleeping = true, this.IMAGES_LONG_IDLE.length * 100);
                }
                if (this.isSleeping) {
                    //long_idle_sleep animation
                    this.playAnimation(this.IMAGES_LONG_IDLE_SLEEP);
                }
            }



            //------------------TEST 2---------------------------------!!!!!!!!!
            // } else {
            //     this.playAnimation(this.IMAGES_IDLE);
            //     if (this.isWaiting()) {
            //         //long_idle animation
            //         this.playAnimation(this.IMAGES_LONG_IDLE);
            //         this.isSleeping = true;
            //     }
            //     if (this.isSleeping) {
            //         //long_idle_sleep animation
            //         this.playAnimation(this.IMAGES_LONG_IDLE_SLEEP);
            //     }
            //     this.isSleeping = false;
            // }


            //------------------TEST 1---------------------------------!!!!!!!!!
            // } else {
            //     if (!this.isMoving() && !this.isWaiting()) {
            //         //idle animation
            //         this.playAnimation(this.IMAGES_IDLE);
            //     } else if (this.isWaiting()) {
            //         //long_idle animation
            //         this.playAnimation(this.IMAGES_LONG_IDLE);
            //     }
            //     // if (this.isSleeping) {
            //     //     //long_idle_sleep animation
            //     //     this.playAnimation(this.IMAGES_LONG_IDLE_SLEEP);
            //     // }
            // }

            //-----------------URSPRÜNGLICHE FORM-------------------------!!!!!!!
            // } else if (!this.isMoving() && !this.isWaiting()) {
            //     //idle animation
            //     this.playAnimation(this.IMAGES_IDLE);
            // } else if (this.isWaiting()) {
            //     //long_idle animation
            //     this.playAnimation(this.IMAGES_LONG_IDLE);
            // } else if (this.isSleeping()) {
            //     //long_idle_sleep animation
            //     this.playAnimation(this.IMAGES_LONG_IDLE_SLEEP);
            // }
        }, 100);
    }

    isMoving() {
        return this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN
    }
}