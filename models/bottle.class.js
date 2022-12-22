class Bottle extends MovableObject {
    x = 200;
    y = 50;
    height = 80;
    width = 60;

    IMAGES_POISON = [
        'img/4. Marcadores/Posión/Animada/1.png',
        'img/4. Marcadores/Posión/Animada/2.png',
        'img/4. Marcadores/Posión/Animada/3.png',
        'img/4. Marcadores/Posión/Animada/4.png',
        'img/4. Marcadores/Posión/Animada/5.png',
        'img/4. Marcadores/Posión/Animada/6.png',
        'img/4. Marcadores/Posión/Animada/7.png',
        'img/4. Marcadores/Posión/Animada/8.png'
    ]

    offset = {
        x: 10,
        y: 30,
        width: 10,
        height: 5
    }

    constructor() {
        super().loadImage('img/4. Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISON);
        this.x = 200 + Math.random() * 2000;
        this.y = 340;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_POISON);
        }, 150);
    }
}