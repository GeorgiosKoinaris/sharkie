class Character extends MovableObject {
    x = 10;
    y = 150;
    speed = 10;
    height = 180;
    width = 180;
    coin = 0;
    poison = 0;
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
    isAttacking = false;
    lastMove = new Date().getTime();
    secondsWaiting = 8;
    isDying = false;

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
        this.swimAnimation();
        this.characterAnimation();
        this.isWaiting();
    }

    isWaiting() {
        let timePassed = new Date().getTime() - this.lastMove; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed > this.secondsWaiting;
    }

    swimAnimation() {
        setStoppableInterval(() => {
            swimming_sound.pause();
            if (this.canSwimRight()) {
                this.swimRight();
            }
            if (this.canSwimLeft()) {
                this.swimLeft();
            }
            if (this.canSwimUp()) {
                this.swimUp();
            }
            if (this.canSwimDown()) {
                this.swimDown();
            }
            this.world.camera_x = -this.x + 30;
        }, 1000 / 60);
    }

    canSwimRight() {
        return this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x
    }
    canSwimLeft() {
        return this.world.keyboard.LEFT && this.x > 0
    }
    canSwimUp() {
        return this.world.keyboard.UP && this.y > -70
    }
    canSwimDown() {
        return this.world.keyboard.DOWN && this.y < 250
    }

    swimRight() {
        this.moveRight();
        this.otherDirection = false;
        swimming_sound.play();
    }

    swimLeft() {
        this.moveLeft();
        this.otherDirection = true;
        swimming_sound.play();
    }

    swimUp() {
        this.moveUp();
        swimming_sound.play();
    }

    swimDown() {
        this.moveDown();
        swimming_sound.play();
    }

    characterAnimation() {
        setStoppableInterval(() => {
            if (this.prepareAttack()) {
                this.attackPrepared();
            }
            if (this.isDead()) {
                this.deadAnimation();
            } else if (this.isHurt()) {
                this.isHurtAnimation();
            } else if (this.isMoving()) {
                this.moveAnimation();
            } else if (this.isAttacking) {
                this.attackAnimation();
            } else {
                this.playIdleAnimations();
            }
        }, 100);
    }

    prepareAttack() {
        return this.world.keyboard.SPACE || this.world.keyboard.F && !this.isAttacking
    }

    attackPrepared() {
        this.isAttacking = true;
        bubble_sound.play();
        this.currentImage = 0;
    }

    deadAnimation() {
        if (!this.isDying) {
            this.currentImage = 0;
            this.isDying = true;
        }
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(looseGame, this.IMAGES_DEAD.length * 95);
    }

    isHurtAnimation() {
        this.playAnimation(this.IMAGES_HURT_POISEN);
        hurt_sound.play();
    }

    moveAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
        this.lastMove = new Date().getTime();
    }

    attackAnimation() {
        setTimeout(() => this.isAttacking = false, this.IMAGES_ATTACK.length * 100)
        this.playAnimation(this.IMAGES_ATTACK);
        this.lastMove = new Date().getTime();
    }

    playIdleAnimations() {
        if (!this.isWaiting()) {
            //idle animation
            this.playAnimation(this.IMAGES_IDLE);
        } else {
            //long_idle_sleep animation
            this.playAnimation(this.IMAGES_LONG_IDLE_SLEEP);
        }
    }

    isMoving() {
        return this.world.keyboard.RIGHT ||
            this.world.keyboard.LEFT ||
            this.world.keyboard.UP ||
            this.world.keyboard.DOWN
    }

    addCoin() {
        this.coin += 1;
        if (this.coin <= 0) {
            this.coin = 0;
        }
    }

    addPoison() {
        this.poison += 1;
        if (this.poison <= 0) {
            this.poison = 0;
        }
    }

    decreasePoison() {
        this.poison -= 1;
        if (this.poison <= 0) {
            this.poison = 0;
        }
    }
}