let level1;

function createLevel1() {
    level1 = new Level(
        createLevelEnemies(),
        createLevelBoss(),
        createLevelLight(),
        createLevelBackground(),
        createLevelPoison(),
        createLevelCoins()
    );
}

function createLevelEnemies() {
    return [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish()
    ]
}

function createLevelBoss() {
    return [
        new Endboss()
    ]
}

function createLevelLight() {
    return [
        new Light()
    ]
}

function createLevelBackground() {
    return [
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', -720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720),

        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720 * 2),
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720 * 3),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720 * 3),
    ]
}

function createLevelPoison() {
    return [
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison(),
        new Poison()
    ]
}

function createLevelCoins() {
    return [
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin(),
        new Coin()
    ]
}