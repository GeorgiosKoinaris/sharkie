class ThrowableObjects extends MovableObject {



    constructor(x, y) {
        super().loadImage('img/4. Marcadores/Posión/Light - Left.png');
        this.x = x;
        this.y = y;
        this.height = 80;
        this.width = 80;
        this.throw();
    }

    throw () {
        setInterval(() => {
            this.x += 10;
        }, 35)
    }
}