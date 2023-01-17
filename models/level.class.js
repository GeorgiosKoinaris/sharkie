class Level {
    enemies;
    lights;
    backgroundObjects;
    poison;
    coin;
    level_end_x = 2190;

    constructor(enemies, lights, backgroundObjects, poison, coin) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.poison = poison;
        this.coin = coin
    }
}