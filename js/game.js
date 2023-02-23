let canvas;
let world;
let keyboard = new Keyboard();
theme_sound = new Audio('audio/theme.mp3');
button_sound = new Audio('audio/button.mp3');
bossAttack_sound = new Audio('audio/bossAttack.mp3');
bossBattle_sound = new Audio('audio/bossBattle.mp3');
bubble_sound = new Audio('audio/bubble.mp3');
swimming_sound = new Audio('audio/swimming.mp3');
win_sound = new Audio('audio/win.mp3');
loose_sound = new Audio('audio/loose.mp3');
hurt_sound = new Audio('audio/hurt.mp3');
coin_sound = new Audio('audio/coin.mp3');
poisonBottle_sound = new Audio('audio/bottle.mp3');
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
    document.getElementById('startscreen').style.display = "none";
    document.getElementById('loosingScreen').style.display = "none";
    document.getElementById('winningScreen').style.display = "none";
    document.getElementById('menuBtn').style.display = "flex";
}

function howToPlay() {
    document.getElementById('instructionsScreen').style.display = "flex";
    document.getElementById('startscreen').style.display = "none";
    button_sound.play();
}

function startScreen() {
    document.getElementById('startscreen').style.display = "flex";
    document.getElementById('menuBtn').style.display = "none";
    document.getElementById('instructionsScreen').style.display = "none";
    document.getElementById('loosingScreen').style.display = "none";
    document.getElementById('winningScreen').style.display = "none";
    button_sound.play();
    stopGame();
}

function looseGame() {
    stopGame();
    document.getElementById('loosingScreen').style.display = 'flex';
    document.getElementById('menuBtn').style.display = "none";
    loose_sound.play();
}

function winGame() {
    stopGame();
    document.getElementById('winningScreen').style.display = 'flex';
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

function muteSound() {
    this.toggleVolumeBtnImg();
    this.muteThemeSounds();
    this.muteCharacterSounds();
    this.muteBossSounds();
    this.muteCollectablesSounds();
}

function toggleVolumeBtnImg() {
    let volumeBtn = document.getElementById('volumeBtnImg');
    if (volumeBtn.src.endsWith('volume.png')) {
        volumeBtn.src = 'img/6.Botones/Key/mute.png';
    } else {
        volumeBtn.src = 'img/6.Botones/Key/volume.png';
    }
}

function muteThemeSounds() {
    theme_sound.muted = !theme_sound.muted;
    bossBattle_sound.muted = !bossBattle_sound.muted;
    win_sound.muted = !win_sound.muted;
    loose_sound.muted = !loose_sound.muted;
}

function muteCharacterSounds() {
    bubble_sound.muted = !bubble_sound.muted;
    swimming_sound.muted = !swimming_sound.muted;
    hurt_sound.muted = !hurt_sound.muted;
}

function muteBossSounds() {
    bossAttack_sound.muted = !bossAttack_sound.muted;
}

function muteCollectablesSounds() {
    coin_sound.muted = !coin_sound.muted;
    poisonBottle_sound.muted = !poisonBottle_sound.muted;
}

function reloadMusic() {
    this.theme_sound.load();
    this.bossBattle_sound.load();
}

// function fullscreen() {
//     let fullscreen = document.getElementById('fullscreen');
//     this.enterFullscreen(fullscreen);
//     this.fullscreenSwitch();
// }

// function enterFullscreen(element) {
//     if (element.requestFullscreen) {
//         element.requestFullscreen();
//     } else if (element.msRequestFullscreen) { // for IE11 (remove June 15, 2022)
//         element.msRequestFullscreen();
//     } else if (element.webkitRequestFullscreen) { // iOS Safari
//         element.webkitRequestFullscreen();
//     }
// }

// function fullscreenSwitch() {
//     if (window.enterFullscreen) {
//         fullscreenStyle();
//     }
// }

// function fullscreenStyle() {
//     document.getElementById('canvas').style.width = "100%";
//     document.getElementById('fullscreenBtn').style.display = "none";
//     document.getElementById('loosingScreen').style.width = "auto";
//     document.getElementById('winningScreen').style.width = "auto";
//     document.getElementById('startscreen').style.width = "auto";
//     document.getElementById('instructionsScreen').style.width = "auto";
//     document.getElementById('instructionsScreen').style.padding = "30px";
// }

// --------------------------------------keybind------------------------------------------//

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