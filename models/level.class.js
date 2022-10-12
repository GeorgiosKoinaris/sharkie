class Level {
    enemies;
    lights;
    backgroundObjects;
    bottle;
    coin;
    level_end_x = 2190;

    constructor(enemies, lights, backgroundObjects, bottle, coin) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.bottle = bottle;
        this.coin = coin
    }
}