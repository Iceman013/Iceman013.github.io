const styles = ["classic","dark"];
function initialize() {
    let base = document.getElementById("reference");
    
    let parent = document.getElementById("layers");
    let layers = [];
    for (let i = 0; i < styles.length; i++) {
        let nb = document.createElement("div");
        nb.id = styles[i];
        nb.classList.add(styles[i]);
        nb.classList.add("layer");
        parent.appendChild(nb);
        layers.push(nb);
    }

    for (let i = 0; i < base.childNodes.length; i++) {
        for (let j = 0; j < layers.length; j++) {
            let item = base.childNodes[i].cloneNode(true);
            layers[j].appendChild(item);
        }
    }
}

function drawCircle() {
    document.getElementById("dark").style.clipPath = "circle(25% at 25% 25%)";
}

function start() {
    initialize();
    drawCircle();
}
start();