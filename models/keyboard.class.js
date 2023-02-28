class Keyboard {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    F = false;


    constructor() {
        this.bindKeyPressEvents();
        this.bindBtsPressEvents();
    }

    bindKeyPressEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode == 37)
                keyboard.LEFT = true;
            if (e.keyCode == 39)
                keyboard.RIGHT = true;
            if (e.keyCode == 38)
                keyboard.UP = true;
            if (e.keyCode == 40)
                keyboard.DOWN = true;
            if (e.keyCode == 32)
                keyboard.SPACE = true;
            if (e.keyCode == 70)
                keyboard.F = true;
        });

        document.addEventListener('keyup', (e) => {
            if (e.keyCode == 37)
                keyboard.LEFT = false;
            if (e.keyCode == 39)
                keyboard.RIGHT = false;
            if (e.keyCode == 38)
                keyboard.UP = false;
            if (e.keyCode == 40)
                keyboard.DOWN = false;
            if (e.keyCode == 32)
                keyboard.SPACE = false;
            if (e.keyCode == 70)
                keyboard.F = false;
        });
    }

    bindBtsPressEvents() {
        setTimeout(() => {
            document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard.LEFT = true;
            });

            document.getElementById('btnLeft').addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard.LEFT = false;
            });
            document.getElementById('btnRight').addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard.RIGHT = true;
            });
            document.getElementById('btnRight').addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard.RIGHT = false;
            });
            document.getElementById('btnUp').addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard.UP = true;
            });
            document.getElementById('btnUp').addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard.UP = false;
            });
            document.getElementById('btnDown').addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard.DOWN = true;
            });
            document.getElementById('btnDown').addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard.DOWN = false;
            });
            document.getElementById('btnSpace').addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard.SPACE = true;
            });
            document.getElementById('btnSpace').addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard.SPACE = false;
            });
            document.getElementById('btnF').addEventListener('touchstart', (e) => {
                e.preventDefault();
                keyboard.F = true;
            });
            document.getElementById('btnF').addEventListener('touchend', (e) => {
                e.preventDefault();
                keyboard.F = false;
            });
        }, 500)
    }
}