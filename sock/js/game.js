import { transitionBlack } from "./main.js";
import { speak } from "./dialog.js";

export async function startGame() {
    await transitionBlack("main");

    speak(0);
}