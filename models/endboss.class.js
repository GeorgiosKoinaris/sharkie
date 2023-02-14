class Endboss extends MovableObject {
    world;
    height = 450;
    width = 350;
    speed = 1.5;
    y = -40;


    IMAGES_SPAWNING = [
        'img/2.Enemy/3 Final Enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final Enemy/1.Introduce/10.png'
    ];

    IMAGES_SWIM = [
        'img/2.Enemy/3 Final Enemy/2.floating/1.png',
        'img/2.Enemy/3 Final Enemy/2.floating/2.png',
        'img/2.Enemy/3 Final Enemy/2.floating/3.png',
        'img/2.Enemy/3 Final Enemy/2.floating/4.png',
        'img/2.Enemy/3 Final Enemy/2.floating/5.png',
        'img/2.Enemy/3 Final Enemy/2.floating/6.png',
        'img/2.Enemy/3 Final Enemy/2.floating/7.png',
        'img/2.Enemy/3 Final Enemy/2.floating/8.png',
        'img/2.Enemy/3 Final Enemy/2.floating/9.png',
        'img/2.Enemy/3 Final Enemy/2.floating/10.png',
        'img/2.Enemy/3 Final Enemy/2.floating/11.png',
        'img/2.Enemy/3 Final Enemy/2.floating/12.png',
        'img/2.Enemy/3 Final Enemy/2.floating/13.png',
    ];

    IMAGES_ATTACK = [
        'img/2.Enemy/3 Final Enemy/Attack/1.png',
        'img/2.Enemy/3 Final Enemy/Attack/2.png',
        'img/2.Enemy/3 Final Enemy/Attack/3.png',
        'img/2.Enemy/3 Final Enemy/Attack/4.png',
        'img/2.Enemy/3 Final Enemy/Attack/5.png',
        'img/2.Enemy/3 Final Enemy/Attack/6.png'
    ];
    IMAGES_HURT = [
        'img/2.Enemy/3 Final Enemy/Hurt/1.png',
        'img/2.Enemy/3 Final Enemy/Hurt/2.png',
        'img/2.Enemy/3 Final Enemy/Hurt/3.png',
        'img/2.Enemy/3 Final Enemy/Hurt/4.png'
    ];
    IMAGES_DEAD = [
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final Enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    hadFirstContact = false;
    isAttacking = false;

    offset = {
        x: 25,
        y: 230,
        width: 35,
        height: 95
    }

    constructor() {
        super().loadImage(this.IMAGES_SPAWNING[0]);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_SPAWNING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2550;
        this.animate();
        this.swimToCharacter();
    }

    animate() {
        let i = 0
        setStoppableInterval(() => {
            if (this.bossAppears()) {
                i = 0;
                this.hadFirstContact = true;
                setStoppableInterval(() => {
                    // this.activateBossSound();
                    if (i < 10) {
                        this.playAnimation(this.IMAGES_SPAWNING);
                    } else if (this.hadFirstContact) {
                        this.bossActions();
                    }
                    i++;
                }, 200);
            }
        }, 100);
    }

    bossAppears() {
        return world.character.x > 2189 && !this.hadFirstContact;
    }

    swimToCharacter() {
        setStoppableInterval(() => {
            if (this.hadFirstContact) {
                this.moveLeft();
            }
        }, 1000 / 60)
    }

    bossActions() {
        if (this.isDead()) {
            this.deadAnimation();
        } else if (this.isHurt()) {
            this.hurtAnimation();
        } else if (this.isAttacking) {
            this.attackAnimation();
        } else {
            this.playAnimation(this.IMAGES_SWIM);
        }
    }

    attackAnimation() {
        setTimeout(() => this.isAttacking = false, this.IMAGES_ATTACK.length * 100)
        this.playAnimation(this.IMAGES_ATTACK);
    }

    hurtAnimation() {
        this.playAnimation(this.IMAGES_HURT);
    }

    deadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.applyGravityForDeath();
    }

    hit() {
        this.energy -= 25;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }
}