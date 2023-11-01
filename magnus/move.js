const svg = document.getElementById("canvas");

export function addMovement() {
    const zoomIn = 0.97;
    let xpos = 0;
    let ypos = 0;
    let zoom = 1;

    let updater;
    function update() {};
    function convert() {};

    const interval = 10;
    const speed = 1;
    function makeUpdater() {
        return setInterval(function() {
            convert();
            update();
        }, interval);
    }

    let keys = [];
    svg.addEventListener("keydown", function(e) {
        if (!keys.includes(e.key)) {
            keys.push(e.key);
        }
        if (updater == null) {
            updater = makeUpdater();
        }
    });
    svg.addEventListener("keyup", function(e) {
        keys.splice(keys.indexOf(e.key), 1);
    });
    svg.addEventListener("focusout", function() {
        keys = [];
    });
    svg.addEventListener("wheel", function(e) {
        console.log(e);
        let width = document.getElementById("canvas").clientWidth;
        let height = document.getElementById("canvas").clientHeight;
        xpos -= (e.x - width/2);
        ypos += (e.y - height/2);
        convert();
        update();
        zoom = zoom*Math.pow(zoomIn, e.deltaY/40);
        convert();
        update();
    })
    function update() {
        let map = svg.childNodes[0].childNodes[0].childNodes[0];
        map.setAttribute("transform", "scale(" + zoom + ") translate(" + xpos + ", " + -ypos + ")");
    }

    function convert() {
        let keyKey = ["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","-","="];
        if (keys.includes("w") || keys.includes("ArrowUp")) {
            ypos -= interval*speed/zoom;
        }
        if (keys.includes("a") || keys.includes("ArrowLeft")) {
            xpos += interval*speed/zoom;
        }
        if (keys.includes("s") || keys.includes("ArrowDown")) {
            ypos += interval*speed/zoom;
        }
        if (keys.includes("d") || keys.includes("ArrowRight")) {
            xpos -= interval*speed/zoom;
        }
        if (keys.includes("-")) {
            zoom = zoom*zoomIn;
        }
        if (keys.includes("=")) {
            zoom = zoom/zoomIn;
        }

        let any = false;
        for (let i = 0; i < keyKey.length; i++) {
            if (keys.includes(keyKey[i])) {
                any = true;
                i = keyKey.length;
            }
        }
        if (!any) {
            clearInterval(updater);
            updater = null;
        }
    }
}