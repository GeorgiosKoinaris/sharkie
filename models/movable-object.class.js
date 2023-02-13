class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    speedY = 5;

    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }

    // Gravity for death under water
    applyGravityForDeath() {
        setStoppableInterval(() => {
            this.y -= this.speedY;
        }, 150)
    }

    isColliding(mo) {
        return this.x + this.width - this.offset.width > mo.x + mo.offset.x &&
            this.y + this.height - this.offset.height > mo.y + mo.offset.y &&
            this.x + this.offset.x < mo.x + mo.width - mo.offset.width &&
            this.y + this.offset.y < mo.y + mo.height - mo.offset.height;
    }

    hit() {
        this.energy -= 5;
        if (this.energy <= 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i= 7 % 6; => 1, Rest 1
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    //Function for play an Amimation only once for example "death-animation"
    // playAnimationOnce(images) {
    //     let i = this.currentImage % images.length;
    //     if (i >= (images.length - 4)) {
    //         i = i % images.length;
    //     }
    //     let path = images[i];
    //     this.img = this.imageCache[path];
    //     this.currentImage++;
    // }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}