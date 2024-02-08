// Controls and user input
let controls = {
    "w": false,
    "a": false,
    "s": false,
    "d": false,
    "mouse_one": {
        "pressed": false,
        "x": 0,
        "y": 0,
    },
    "mouse_two": {
        "pressed": false,
        "x": 0,
        "y": 0,
    },
    "mouse_thr": {
        "pressed": false,
        "x": 0,
        "y": 0,
    }
}
export function addControls() {
    let mouselist = [controls.mouse_one, controls.mouse_two, controls.mouse_thr];
    window.addEventListener("keydown", function(e) {
        if (controls[e.key] == null || controls[e.key] == false) {
            controls[e.key] = true;
        }
    });
    window.addEventListener("keyup", function(e) {
        if (controls[e.key] == null || controls[e.key] == true) {
            controls[e.key] = false;
        }
    });
    window.addEventListener("mousedown", function(e) {
        let chosenMouse = mouselist[e.button];
        chosenMouse.pressed = true;
        chosenMouse.x = e.screenX;
        chosenMouse.y = window.screen.availHeight - e.screenY;
    });
    window.addEventListener("mousemove", function(e) {
        let chosenMouse = mouselist[e.button];
        chosenMouse.x = e.screenX;
        chosenMouse.y = window.screen.availHeight - e.screenY;
    });
    window.addEventListener("mouseup", function(e) {
        let chosenMouse = mouselist[e.button];
        chosenMouse.pressed = false;
    });
    window.addEventListener("contextmenu", function(e) {
        e.preventDefault();
    });
}

export function handleInput(player) {
    let xt = 0;
    let yt = 0;
    if (controls["w"] || controls["ArrowUp"]) {
        yt++;
    }
    if (controls["a"] || controls["ArrowLeft"]) {
        xt--;
    }
    if (controls["s"] || controls["ArrowDown"]) {
        yt--;
    }
    if (controls["d"] || controls["ArrowRight"]) {
        xt++;
    }
    if (xt*xt + yt*yt == 2) {
        xt = xt*Math.SQRT1_2;
        yt = yt*Math.SQRT1_2;
    }

    // M1 attack
    if (controls.mouse_one.pressed) {
        player.shoot(controls.mouse_one.x, controls.mouse_one.y);
        if (!player.character.feral) {
            controls.mouse_one.pressed = false;
        }
    }

    // M2 (Technically M3) attack
    if (controls.mouse_thr.pressed) {
        player.twoot(controls.mouse_thr.x, controls.mouse_thr.y);
        controls.mouse_thr.pressed = false;
    }

    player.move(xt, yt);
}