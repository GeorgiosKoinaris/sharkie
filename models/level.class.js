class Level {
    enemies;
    lights;
    backgroundObjects;
    poisons;
    coins;
    level_end_x = 2190;

    constructor(enemies, lights, backgroundObjects, poisons, coins) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.poisons = poisons;
        this.coins = coins
    }
}