import { Conditions } from "./chatClasses/conditions.js";

import { PLOT } from "./story/plot.js";
import { DIALOGUE } from "./story/dialogue.js";

import { getBackground } from "./assets/assets.js";

let player;

function createPlayer() {
    player = {
        "name": "Bert",
        "conditions": new Conditions(-1, -1, 1),
        "story": "plot",
    };
}

function getChat(story, id) {
    let list;
    if (story == "plot") {
        list = PLOT;
    } else if (story == "dialogue") {
        list = DIALOGUE;
    }

    let out;
    for (let i = 0; i < list.length; i++) {
        if (list[i].id == id) {
            out = list[i];
            i = list.length;
        }
    }

    return out;
}

function meetConditions(cona, conb) {
    let out = true;
    if (conb.classA != 0 && cona.classA != conb.classA) {
        out = false;
    }
    if (conb.classB != 0 && cona.classB != conb.classB) {
        out = false;
    }

    for (let i = 0; i < cona.events.length; i++) {
        if (!conb.events.includes(cona.events[i])) {
            out = false;
            i = cona.events.length;
        }
    }
    for (let i = 0; i < conb.events.length; i++) {
        if (!cona.events.includes(conb.events[i])) {
            out = false;
            i = conb.events.length;
        }
    }

    if (cona.day != conb.day && conb.day != 0) {
        out = false;
    }

    return out;
}

function chooseAnswer(chatTarget) {
    console.log(chatTarget);
    // Change personal data
    let newConditions = chatTarget.conditionChange;
    if (player.conditions.classA == -1 && newConditions.classA != 0) {
        player.conditions.classA = newConditions.classA;
    }
    if (player.conditions.classB == -1 && newConditions.classB != 0) {
        player.conditions.classB = newConditions.classB;
    }
    if (chatTarget.target == -1) {
        player.conditions.events = newConditions.events;
    }
    console.log(player.conditions);

    // Show next message
    if (chatTarget.target == -1) {
        let inPlot = false;
        for (let i = 0; i < PLOT.length; i++) {
            if (meetConditions(player.conditions, PLOT[i].conditions)) {
                player.story = "plot";
                displayChat(PLOT[i]);
                i = PLOT.length;
                inPlot = true;
            }
        }
        if (!inPlot) {
            for (let i = 0; i < DIALOGUE.length; i++) {
                if (meetConditions(player.conditions, DIALOGUE[i].conditions)) {
                    player.story = "dialogue";
                    displayChat(DIALOGUE[i]);
                    i = DIALOGUE.length;
                    inPlot = true;
                }
            }
        }
        if (!inPlot) {
            displayChat(getChat("plot", -4));
        }
    } else {
        if (player.story == "plot") {
            displayChat(getChat("plot", chatTarget.target));
        } else if (player.story == "dialogue") {
            displayChat(getChat("dialogue", chatTarget.target));
        }
    }
}

function addAnswerChoice(chatTarget) {
    let base = document.getElementById("dialogue-options");
    if (true) {
        let button = document.createElement("button");
        button.innerHTML = chatTarget.text;
        button.addEventListener("click", function() {
            chooseAnswer(chatTarget);
        });

        let brek = document.createElement("br");
        
        base.appendChild(button);
        base.appendChild(brek);
    }
}

function displayChat(chat) {
    if (chat.id == -5) {
        player.conditions.day++;
    }

    let url = getBackground(chat.background);
    document.getElementById("dating").style.backgroundImage = "url('" + url + "')";

    if (chat.character == "none") {
        document.getElementById("character").style.display = "none";
    } else {
        document.getElementById("character").style.display = "block";
        let charUrl = chat.character;
        document.getElementById("profile").src = charUrl;
    }

    let name = chat.character;
    if (name == "none") {
        document.getElementById("character-name").style.display = "none";
    } else {
        document.getElementById("character-name").style.display = "inline-block";
        document.getElementById("character-name").innerHTML = name;
    }

    let text = chat.text;
    document.getElementById("text").innerHTML = text;

    let ans = document.getElementById("dialogue-options");
    while (ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
    for (let i = 0; i < chat.answers.length; i++) {
        addAnswerChoice(chat.answers[i]);
    }
}

export function startDating() {
    document.getElementById("dating-container").style.display = "block";

    createPlayer();

    displayChat(getChat(player.story, 0));
}