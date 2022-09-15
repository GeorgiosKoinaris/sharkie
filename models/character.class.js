class Character extends MovableObject {
    x = 10;
    y = 150;
    height = 230;
    width = 230;


    constructor() {
        super().loadImage('img/1.Sharkie/1.IDLE/1.png');
        this.loadImages([
            'img/1.Sharkie/1.IDLE/1.png',
            'img/1.Sharkie/1.IDLE/2.png',
            'img/1.Sharkie/1.IDLE/3.png',
            'img/1.Sharkie/1.IDLE/4.png',
            'img/1.Sharkie/1.IDLE/5.png',
            'img/1.Sharkie/1.IDLE/6.png',
        ]);
    }

    moveUp() {

    };

    moveDown() {

    };
}