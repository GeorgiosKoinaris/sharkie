class ThrowableObjects extends MovableObject {

    IMAGE_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Bubble.png'];
    IMAGE_POISON_BUBBLE = ['img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png '];

    constructor(x, y, isPoison) {
        super();
        this.isPoison = isPoison;
        this.x = x;
        this.y = y;
        this.height = 40;
        this.width = 40;
        this.throw();
    }

    throw () {
        if (this.isPoison) {
            this.loadImage(this.IMAGE_POISON_BUBBLE);
        } else {
            this.loadImage(this.IMAGE_BUBBLE);
        }
        setStoppableInterval(() => this.x += 10, 35);
    }
}