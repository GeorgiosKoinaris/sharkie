class DrawableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 150;
    img;
    imageCache = {};
    currentImage = 0;


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr // ['img/image1.png', 'img/image2.png', ...]
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this.permittedFrame()) {
            ctx.beginPath();
            ctx.lineWidth = '6';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawCharacterFrame(ctx) {
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '6';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + 30, this.y + 80, this.width - 60, this.height - 120);
            ctx.stroke();
        }
    }

    permittedFrame() {
        return this instanceof PufferFish ||
            this instanceof Jellyfish ||
            this instanceof Endboss ||
            this instanceof Bottle ||
            this instanceof Coin;
    }
}