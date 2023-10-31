const svg = document.getElementById("canvas");

export function addMovement() {
    let xpos = 0;
    let ypos = 0;
    let zoom = 1;

    let updater;
    function update() {};
    function convert() {};

    function makeUpdater() {
        return setInterval(function() {
            console.log("owo")
            convert();
            update();
        }, 10);
    }

    let keys = [];
    svg.addEventListener("keydown", function(e) {
        keys.push(e.key);
        console.log(keys);
        if (updater == null) {
            updater = makeUpdater();
        }
    });
    svg.addEventListener("keyup", function(e) {
        keys.splice(keys.indexOf(e.key), 1);
    });
    function update() {
        let map = svg.childNodes[0].childNodes[0];
        map.setAttribute("transform", "scale(" + zoom + ") translate(" + xpos + ", " + -ypos + ")");
    }

    function convert() {
        let keyKey = ["w","a","s","d"];
        if (keys.includes("w")) {
            ypos += 10;
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