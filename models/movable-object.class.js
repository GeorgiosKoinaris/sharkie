class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    energy = 100;
    lastHit = 0;
    speedY = 5;

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    // Gravity for death under water
    applyGravityForDeath() {
        setInterval(() => {
            this.y -= this.speedY;
        }, 1000 / 40)
    }

    // character.isColliding(enemy);
    isColliding(mo) {
        return this.x - 20 + this.width >= mo.x &&
            this.y - 30 + this.height > mo.y &&
            this.x + 20 < mo.x + mo.width &&
            this.y + 80 < mo.y + mo.height
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