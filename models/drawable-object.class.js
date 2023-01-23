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

    // drawFrame(ctx) {
    //     if (this.permittedFrame()) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '6';
    //         ctx.strokeStyle = 'red';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    //     if (this.permittedFrame()) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '4';
    //         ctx.strokeStyle = 'yellow';
    //         ctx.rect(this.x + this.offset.x, this.y + this.offset.y, (this.x + this.width - this.offset.width) - (this.x + this.offset.x), (this.y + this.height - this.offset.height) - (this.y + this.offset.y));
    //         ctx.stroke();
    //     }
    // }

    // permittedFrame() {
    //     return this instanceof Character ||
    //         this instanceof PufferFish ||
    //         this instanceof Jellyfish ||
    //         this instanceof Endboss ||
    //         this instanceof Poison ||
    //         this instanceof ThrowableObjects ||
    //         this instanceof Coin;
    // }
}