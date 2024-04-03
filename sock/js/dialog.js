import { transitionBlack } from "./main.js";
import { Line, lines } from "./plot.js";
import { Body, BodyPart, animate } from "./assets.js";

export async function speak(set) {
    await transitionBlack("dialog");
    document.getElementById("dialog").appendChild(buildJon());
    animate(["talk", "hungry"]);
}

function buildJon() {
    let base = document.createElement("div");
    base.className = "jon-container";

    base.appendChild(Body.base);
    
    return base;
}