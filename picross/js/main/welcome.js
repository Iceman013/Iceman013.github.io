const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouseMoved = false;

const pointer = {
    x: 0.5*window.innerWidth,
    y: 0.5*window.innerHeight,
};
const params = {
    pointsNumber: 40,
    spring: 0.4,
    friction: 0.5,
    radius: 0.2,
    variance: 0,
};

const trail = new Array(params.pointsNumber);

window.addEventListener("click", e => {
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.pageX, e.pageY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

// setupCanvas();
update(0);
// window.addEventListener("resize", setupCanvas);

function update(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FF00B0";
    ctx.strokeStyle = "#FF00B0";
    ctx.moveTo(pointer.x, pointer.y);
    ctx.beginPath();
    ctx.fill();

    let trailLength = trail.length;
    for (let i = 0; i <= trailLength && i < params.pointsNumber; i++) {
        if (i == 0) {
            trail[i] = pointer;
        }
        if (trail[i] == null) {
            trail[i] = {
                x: pointer.x,
                y: pointer.y,
                dx: 0,
                dy: 0,
            };
        }
        let p = trail[i];
        if (i != 0) {
            const prev = trail[i - 1];

            p.dx += (prev.x - p.x)*params.spring;
            p.dy += (prev.y - p.y)*params.spring;
            p.dx *= params.friction;
            p.dy *= params.friction;

            p.dx += params.variance*(2*Math.random() - 1);
            p.dy += params.variance*(2*Math.random() - 1);

            p.x += p.dx;
            p.y += p.dy;
        }
        ctx.lineTo(p.x, p.y);
        ctx.lineWidth = params.radius*(40 - i);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
    }
}

let time = 0;
setInterval(function() {
    time++;
    update(time);
}, 1);