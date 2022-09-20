class World {
    character = new Character();
    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
    ];
    lights = [
        new Light()
    ];
    backgroundObjects = [
        new BackgroundObject('img/3. Background/Legacy/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('img/3. Background/Legacy/Layers/2. Floor/L1.png', 0)
    ];
    canvas;
    ctx;
    keyboard;


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.lights);

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
            this.ctx.save();
            this.ctx.translate(mo.img.width, 0);
            this.ctx.scale(-1, 1);
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        if (mo.otherDirection) {
            this.ctx.restore();
        }
    }
}