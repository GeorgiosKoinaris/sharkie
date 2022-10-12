class Level {
    enemies;
    lights;
    backgroundObjects;
    bottle;
    level_end_x = 2190;

    constructor(enemies, lights, backgroundObjects, bottle) {
        this.enemies = enemies;
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
        this.bottle = bottle;
    }
}