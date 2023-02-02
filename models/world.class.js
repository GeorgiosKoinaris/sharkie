class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarLife = new StatusBarLife();
    statusBarCoins = new StatusBarCoins();
    statusBarPoison = new StatusBarPoison();
    throwingBubble = [];
    throwingPoisonBubble = [];
    bubbleThrow = false;
    coin_sound = new Audio('audio/coin.mp3');
    poisonBottle_sound = new Audio('audio/bottle.mp3');


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBubbleCollisions();
            this.checkPoisonBubbleCollisions();
            this.checkBubbleObjects();
            this.checkCollectiblesCollisions();
            this.checkPoisonObjects();
        }, 50);
    }

    checkBubbleObjects() {
        if (this.keyboard.SPACE && !this.bubbleThrow) {
            this.bubbleThrow = true;
            this.throwBubbleObject();
        }
    }

    throwBubbleObject() {
        if (this.bubbleThrow) {
            let bubble = new ThrowableObjects(this.character.x + 140, this.character.y + 85, false);
            this.throwingBubble.push(bubble);
            setTimeout(() => {
                this.bubbleThrow = false;
            }, 700);
        }
    }

    checkPoisonObjects() {
        if (this.keyboard.F && !this.bubbleThrow && this.character.poison > 0) {
            this.bubbleThrow = true;
            this.throwPoisonObject();
        }
    }

    throwPoisonObject() {
        if (this.bubbleThrow) {
            let poisonBubble = new ThrowableObjects(this.character.x + 140, this.character.y + 85, true);
            this.throwingPoisonBubble.push(poisonBubble);
            this.character.decreasePoison();
            this.statusBarPoison.setPercentage(this.character.poison);
        }
        setTimeout(() => {
            this.bubbleThrow = false;
        }, 700);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
            }
        });
    }

    checkBubbleCollisions() {
        this.throwingBubble.forEach((bubble, index) => {
            this.level.enemies.forEach((enemy) => {
                if (bubble.isColliding(enemy)) {
                    enemy.isDead = true;
                    this.throwingBubble.splice(index, 1);
                }
            })
        });
    }

    // checkCollisions() {
    //     this.level.enemies.forEach((enemy) => {
    //         if (this.character.isColliding(enemy)) {
    //             this.character.hit();
    //             this.statusBarLife.setPercentage(this.character.energy);
    //         }
    //     });
    // }

    //-----------------------------Endboss Hit with Bubble------------------------------------!!
    checkPoisonBubbleCollisions() {
        this.throwingPoisonBubble.forEach((bubble, index) => {
            this.level.endBoss.forEach((endBoss) => {
                if (bubble.isColliding(endBoss)) {
                    // this.endBoss.hit();
                    // this.statusBarLife.setPercentage(this.character.energy);
                    this.throwingPoisonBubble.splice(index, 1);
                }
            })
        });
    }


    checkCollectiblesCollisions() {
        this.checkPoisonCollision();
        this.checkCoinCollision();
    }

    checkPoisonCollision() {
        this.level.poisons.forEach((poison, index) => {
            if (this.character.isColliding(poison)) {
                this.increasePoisonBar(index);
            }
        });
    }

    increasePoisonBar(index) {
        this.poisonBottle_sound.play();
        this.character.addPoison();
        this.statusBarPoison.setPercentage(this.character.poison);
        this.level.poisons.splice(index, 1);
    }

    checkCoinCollision() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.increaseCoinBar(index);
            }
        });
    }

    increaseCoinBar(index) {
        this.coin_sound.play();
        this.character.addCoin();
        this.statusBarCoins.setPercentage(this.character.coin);
        this.level.coins.splice(index, 1);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); //back 
        //--------Space for fixed Objects---------//
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarPoison);
        this.ctx.translate(this.camera_x, 0); //forwards 

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endBoss);
        this.addObjectsToMap(this.level.lights);
        this.addObjectsToMap(this.throwingBubble);
        this.addObjectsToMap(this.throwingPoisonBubble);
        this.addObjectsToMap(this.level.poisons);
        this.addObjectsToMap(this.level.coins);

        this.ctx.translate(-this.camera_x, 0);

        //draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        // mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}