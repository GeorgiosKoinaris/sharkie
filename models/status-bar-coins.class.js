class StatusBarCoins extends DrawableObject {
    IMAGES = [
        'img/4. Marcadores/orange/0_  copia 2.png',
        'img/4. Marcadores/orange/20_  copia.png',
        'img/4. Marcadores/orange/40_  copia 2.png',
        'img/4. Marcadores/orange/60_  copia 2.png',
        'img/4. Marcadores/orange/80_  copia 2.png',
        'img/4. Marcadores/orange/100_ copia 2.png',
    ];

    percentage = 0;

    constructor() {
        super();
        this.x = 20;
        this.y = 35;
        this.width = 170;
        this.height = 45;
        this.loadImages(this.IMAGES);
        this.setPercentage(0);
    }

    // setPercentege(50);
    setPercentage(percentage) {
        this.percentage = percentage; // => Zahl zwischen 0 & 5 ermitteln für die Bilder
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 10) {
            return 5;
        } else if (this.percentage >= 8) {
            return 4;
        } else if (this.percentage >= 6) {
            return 3;
        } else if (this.percentage >= 4) {
            return 2;
        } else if (this.percentage >= 2) {
            return 1;
        } else {
            return 0;
        }
    }
}