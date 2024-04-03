export class BodyPart {
    constructor(name, center, size, angle, image, children=null) {
        this.name = name;
        this.center = center;
        this.size = size;
        this.angle = angle;
        this.image = image;
        this.children = children;

        this.base = document.createElement("div");
        this.base.id = this.name;
        this.base.style.backgroundImage = "url('" + this.image + "')";
        this.base.className = "jon-bod";
        this.base.style.width = this.size.width + "px";
        this.base.style.height = this.size.height + "px";
        this.base.style.transformOrigin = (this.center.x + "px " + this.center.y + "px");

        if (children != null) {
            for (let i = 0; i < children.length; i++) {
                let newChild = this.children[i];
                // Position
                newChild.part.base.style.left = (newChild.x - newChild.part.center.x) + "px";
                newChild.part.base.style.top = (newChild.y - newChild.part.center.y) + "px";
                // Rotation
                // newChild.part.base.style.transform = "rotate(40deg)";
                // Append
                this.base.appendChild(newChild.part.base);
            }
        }
    }
}

export const Body = new BodyPart("guy-torso",
{x: 0, y: 0}, {width: 265, height: 567}, 0,
"assets/jon.png",
[
    {
        x: 260,
        y: 185,
        part: new BodyPart("guy-right-upper", {x: 20, y: 30}, {width: 139, height: 120}, 0, "assets/jon_right_upper.png",
        [
            {
                x: 100,
                y: 60,
                part: new BodyPart("guy-right-arm", {x: 30, y: 20}, {width: 63, height: 235}, 0, "assets/jon_right_arm.png"),
            }
        ]),
    },
    {
        x: 30,
        y: 170,
        part: new BodyPart("guy-left-upper", {x: 100, y: 20}, {width: 119, height: 88}, 0, "assets/jon_left_upper.png",
        [
            {
                x: 15,
                y: 40,
                part: new BodyPart("guy-left-arm", {x: 40, y: 20}, {width: 76, height: 265}, 0, "assets/jon_left_arm.png"),
            }
        ]),
    },
    {
        x: 137,
        y: 126,
        part: new BodyPart("guy-mouth-black", {x: 16, y: 17}, {width: 33, height: 35}, 0, "assets/jon_mouth_black.png"),
    },
    {
        x: 137,
        y: 126,
        part: new BodyPart("guy-mouth", {x: 16, y: 17}, {width: 33, height: 35}, 0, "assets/jon_mouth.png"),
    }
]);

export function animate(form) {
    let lau = document.getElementById("guy-left-upper");
    let la = document.getElementById("guy-left-arm");
    let rau = document.getElementById("guy-right-upper");
    let ra = document.getElementById("guy-right-arm");
    let mm = document.getElementById("guy-mouth");

    // Clear
    lau.style.animationName = "";
    lau.style.animationDuration = "1s";
    la.style.animationName = "";
    la.style.animationDuration = "1s";
    rau.style.animationName = "";
    rau.style.animationDuration = "1s";
    ra.style.animationName = "";
    ra.style.animationDuration = "1s";
    mm.style.animationName = "";
    mm.style.animationDuration = "1s";

    // Talk
    if (form.includes("talk")) {
        mm.style.animationName = "talk";
        mm.style.animationDuration = "0.5s";
    }

    // Wave
    if (form.includes("wave")) {
        lau.style.animationName = "waveLU";
        lau.style.animationDuration = "0.7s";
        la.style.animationName = "waveL";
        la.style.animationDuration = "0.7s";
    }

    // Hungry
    if (form.includes("hungry")) {
        rau.style.animationName = "hungryRU";
        rau.style.animationDuration = "0.8s";
        ra.style.animationName = "hungryR";
        ra.style.animationDuration = "0.8s";
    }

    // Wave
    if (form.includes("odd")) {
        lau.style.animationName = "oddLU";
        lau.style.animationDuration = "0.3s";
        la.style.animationName = "oddL";
        la.style.animationDuration = "0.3s";
    }
}