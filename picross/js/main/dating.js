import { Conditions } from "../chatClasses/conditions.js";

import { intro } from "../story/intro.js";
import { PLOT } from "../story/plot.js";
import { DIALOGUE } from "../story/dialogue.js";
import { CODES } from "../story/codes.js";

import { Music } from "../assets/music.js";

import { getBackground, getCharacter, getCharacterEmotionUrl, getCharacterFromId, getMusic, MUSIC } from "../assets/assets.js";
import { playPicross } from "./picross.js";
import { clear } from "./main.js";

let SPEED = false;
let CHEAT = false;

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

    for (let i = 0; i < conb.popularity.list.length; i++) {
        if (cona.popularity.list[i] < conb.popularity.list[i] && conb.popularity.list[i] != 0) {
            out = false;
            i = conb.popularity.list.length;
        }
    }

    return out;
}

function chooseAnswer(chatTarget) {
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

    for (let i = 0; i < chatTarget.popular.list.length; i++) {
        player.conditions.popularity.list[i] += chatTarget.popular.list[i];
    }

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

function replaceWords(text) {
    const list = [
        ["{name}", player.name],
    ];

    let output;
    for (let i = 0; i < list.length; i++) {
        output = text.replaceAll(list[i][0], list[i][1]);
    }
    return output;
}

async function showText(text, base) {
    let stallEnd = 5;
    return await new Promise(resolve => {
        let splitText = text.split(" ");
        let i = 0;
        let timer = 85;
        if (SPEED) {
            timer = 1;
        }
        const interval = setInterval(function() {
            if (i < splitText.length) {
                if (!splitText[i].includes("{stall}")) {
                    base.innerHTML += replaceWords(splitText[i]) + " ";
                }
            } else if (i >= splitText.length + stallEnd) {
                resolve("OwO");
                clearInterval(interval);
            }
            i++;
        }, timer);
    })
}

function getPuzzleCode(id) {
    let out;
    for (let i = 0; i < CODES.length; i++) {
        if (id == CODES[i].id) {
            out = CODES[i].codes;
            i = CODES.length;
        }
    }
    if (CHEAT) {
        out = [[1]];
    }
    return out;
}

function addAnswerChoice(chatTarget, chat) {
    let base = document.getElementById("dialogue-options");
    if (true) {
        let button = document.createElement("button");
        button.classList.add("dialogue-button");
        button.innerHTML = replaceWords(chatTarget.text);
        button.addEventListener("click", function() {
            if (chat.puzzle == 0) {
                chooseAnswer(chatTarget);
            } else {
                playPicross(function() {
                    clear();
                    document.getElementById("dating-container").style.display = "block";
                    chooseAnswer(chatTarget);
                }, getCharacter(chat.character), getPuzzleCode(chat.puzzle));
            }
        });

        let brek = document.createElement("br");
        
        base.appendChild(button);
        base.appendChild(brek);
    }
}

async function displayChat(chat) {
    if (chat.id == -5) {
        player.conditions.day++;
    } else if (chat.id == -4) {
        displayEnd();
        return;
    }

    let url = getBackground(chat.background);
    let goalUrl = 'url("' + url + '")';
    if (document.getElementById("dating").style.backgroundImage != goalUrl) {
        await transitionScreen(goalUrl);
    }
    document.getElementById("dating").style.backgroundImage = "url('" + url + "')";

    playMusic(chat.mood);

    if (chat.character == "none") {
        document.getElementById("character").style.display = "none";
    } else {
        document.getElementById("character").style.display = "block";
        let charUrl = getCharacterEmotionUrl(chat.character, chat.emotion);
        document.getElementById("profile").src = charUrl;
    }

    let name = chat.character;
    if (name == "none") {
        document.getElementById("character-name").style.display = "none";
    } else {
        document.getElementById("character-name").style.display = "inline-block";
        document.getElementById("character-name").innerHTML = name;
    }

    document.getElementById("dialogue-options").style.display = "none";

    let text = chat.text;
    document.getElementById("text").innerHTML = "";
    await showText(text, document.getElementById("text"));

    document.getElementById("dialogue-options").style.display = "block";
    let ans = document.getElementById("dialogue-options");
    while (ans.firstChild) {
        ans.removeChild(ans.firstChild);
    }
    for (let i = 0; i < chat.answers.length; i++) {
        addAnswerChoice(chat.answers[i], chat);
    }
}

async function transitionScreen(newBackground) {
    return await new Promise(resolve => {
        document.getElementById("dialogue").style.display = "none";
        let i = 0;
        function convertStep(input) {
            return 100*Math.pow(Math.abs((input/100) - 1), 2);
        }
        const interval = setInterval(function() {
            let percent = convertStep(i);
            if (percent == 0) {
                document.getElementById("dating").style.backgroundImage = newBackground;
            }
            document.getElementById("dating").style.filter = "brightness(" + percent + "%)";
            if (i > 200) {
                resolve("OwO");
                document.getElementById("dialogue").style.display = "block";
                clearInterval(interval);
            }
            i++;
        }, 5);
    })
}

function doIntro() {
    playMusic("intro");
    player.name = window.prompt("What is your name?", "Bert");
}

function clearMusic() {
    let base = document.getElementById("audio-corner");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    for (let i = 0; i < MUSIC.length; i++) {
        let audio = document.createElement("audio");
        base.appendChild(audio);
        audio.volume = 0;
        audio.type = "audio/mpeg";
        audio.src = "music/" + MUSIC[i].url;
        audio.id = "music_" + MUSIC[i].name;
        audio.autoplay = true;
        audio.loop = true;
    }
}

function playMusic(mood) {
    let targetMood = getMusic(mood);
    for (let i = 0; i < MUSIC.length; i++) {
        let audio = document.getElementById("music_" + MUSIC[i].name);
        if (MUSIC[i].mood != targetMood.mood) {
            audio.volume = 0;
        }
    }

    let newA = document.getElementById("music_" + targetMood.name);
    newA.volume = 1;
}

export function startDating() {
    document.getElementById("dating-container").style.display = "block";

    createPlayer();
    clearMusic();
    doIntro();
    let fails = ["David", "david"];
    let quit = false;
    for (let i = 0; i < fails.length; i++) {
        if (fails[i] == player.name) {
            quit = true;
            i = fails.length;
        }
    }
    if (!quit) {
        displayChat(getChat(player.story, 0));
    } else {
        displayEnd();
    }
}

function displayEnd() {
    clear();
    document.getElementById("dating-score").style.display = "block";
    player.conditions.popularity.reverseUpdate();
    console.log(player.conditions.popularity);

    let pops = player.conditions.popularity.list;
    let max;
    for (let i = 0; i < pops.length; i++) {
        if (pops[i] >= getCharacterFromId(i + 1).threshold) {
            if (max == null) {
                max = i;
            } else {
                if (pops[i] > pops[max]) {
                    max = i;
                }
            }
        }
    }
    let base = document.getElementById("readout");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    if (max != null) {
        let best = getCharacterFromId(max + 1);
        
        let mess = document.createElement("h1");
        mess.innerText = "You found a romantic partner! " + best.name + " loves you!";
        base.appendChild(mess);
    } else {
        let mess = document.createElement("h1");
        mess.innerText = "You failed to find a partner that likes you. You lose.";

        base.appendChild(mess);
    }
}