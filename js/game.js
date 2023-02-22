let canvas;
let world;
let keyboard = new Keyboard();
theme_sound = new Audio('audio/theme.mp3');
button_sound = new Audio('audio/button.mp3');
bossAttack_sound = new Audio('audio/bossAttack.mp3');
bossBattle_sound = new Audio('audio/bossBattle.mp3');
bubble_sound = new Audio('audio/bubble.mp3');
win_sound = new Audio('audio/win.mp3');
loose_sound = new Audio('audio/loose.mp3');
hurt_sound = new Audio('audio/hurt.mp3');
intervalIds = [];


function init() {
    canvas = document.getElementById('canvas');
    createLevel1();
    world = new World(canvas, keyboard);
    reloadMusic();
    startGame();

    // console.log('My character is', world.character);
}

function startGame() {
    theme_sound.play();
    document.getElementById('canvas').style.display = "block";
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('loosingScreen').style.display = "none";
    document.getElementById('winningScreen').style.display = "none";
}

function howToPlay() {
    document.getElementById('instructionsScreen').style.display = "flex";
    document.getElementById('startscreen').style.display = "none";
    button_sound.play();
}

function startScreen() {
    button_sound.play();
    document.getElementById('startscreen').style.display = "flex";
    document.getElementById('instructionsScreen').style.display = "none";
    document.getElementById('loosingScreen').style.display = "none";
    document.getElementById('winningScreen').style.display = "none";
}

function looseGame() {
    stopGame();
    document.getElementById('loosingScreen').style.display = 'flex';
    document.getElementById('canvas').style.display = "none";
    loose_sound.play();
}

function winGame() {
    stopGame();
    document.getElementById('winningScreen').style.display = 'flex';
    document.getElementById('canvas').style.display = "none";
    win_sound.play();
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
    this.theme_sound.pause();
    this.bossBattle_sound.pause();
}

function restartGame() {
    reloadMusic();
    init();
}

function reloadMusic() {
    this.theme_sound.load();
    this.bossBattle_sound.load();
}

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;

    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 70) {
        keyboard.F = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;

    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 70) {
        keyboard.F = false;
    }
});