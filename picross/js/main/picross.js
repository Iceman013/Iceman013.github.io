import { CHARACTERS, getCharacterEmotionUrl } from "../assets/assets.js";
import { clear, welcome } from "./main.js";

let chosenCharacter;

function addFace(character) {
    let url = getCharacterEmotionUrl(character.name, "none");
    let img = document.createElement("img");
    img.src = url;

    let container = document.createElement("div");
    container.appendChild(img);
    container.classList.add("face-container");

    container.addEventListener("click", function() {
        let base = document.getElementById("character-select");
        for (let i = 0; i < base.childNodes.length; i++) {
            base.childNodes[i].classList.remove("chosen-character");
        }
        chosenCharacter = character;
        container.classList.add("chosen-character");
    });

    document.getElementById("character-select").appendChild(container);
}

function showFaces() {
    let base = document.getElementById("character-select");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    document.getElementById("pic-width").value = 10;
    document.getElementById("pic-height").value = 10;

    for (let i = 0; i < CHARACTERS.length; i++) {
        addFace(CHARACTERS[i]);
    }
}

function submitPlay() {
    if (chosenCharacter == null) {
        window.alert("No character selected");
        return;
    }
    let width = document.getElementById("pic-width").value;
    let height = document.getElementById("pic-height").value;

    let code = [];
    for (let i = 0; i < height; i++) {
        code[i] = [];
        for (let j = 0; j < width; j++) {
            let rand = Math.random();
            if (rand > 0.45) {
                code[i][j] = 1;
            } else {
                code[i][j] = 0;
            }
        }
    }

    playPicross(welcome, chosenCharacter, code);
}

export function startPicross() {
    document.getElementById("picross-select").style.display = "block";

    showFaces();
    document.getElementById("makePicross").addEventListener("click", submitPlay);
}

/*
This is where the actual gameplay happens
This is the play picross section
They are distinct
*/

function getRow(array) {
    let out = [0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0 && out[out.length - 1] != 0) {
            out.push(0);
        }
        if (array[i] == 1) {
            out[out.length - 1]++;
        }
    }
    if (out[out.length - 1] == 0) {
        out.pop();
    }

    return out;
}

function getScores(code) {
    let outv = [];
    let outh = [];

    for (let i = 0; i < code[0].length; i++) {
        let input = [];
        for (let j = 0; j < code.length; j++) {
            input.push(code[j][i]);
        }
        outv.push(getRow(input));
    }

    for (let i = 0; i < code.length; i++) {
        outh.push(getRow(code[i]));
    }

    return {
        "vertical": outv,
        "horizontal": outh,
    };
}

function drawboard(code) {
    let base = document.getElementById("picross-board");
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }

    let scores = getScores(code);

    // Top row
    let fr = document.createElement("tr");
    let topcorn = document.createElement("td");

    topcorn.style.borderRight = "1px solid black";
    topcorn.style.borderBottom = "1px solid black";
    
    fr.appendChild(topcorn);
    fr.classList.add("picross-row");
    base.appendChild(fr);
    for (let i = 0; i < scores.vertical.length; i++) {
        let nb = document.createElement("td");
        nb.classList.add("picross-count-vertical");
        nb.style.borderBottom = "1px solid black";
        if (i % 5 == 4 || i == scores.vertical.length - 1) {
            nb.style.borderRight = "1px solid black";
        }
        let nc = document.createElement("div");
        nb.appendChild(nc);
        for (let j = 0; j < scores.vertical[i].length; j++) {
            if (scores.vertical[i][j] != 0) {
                let nnn = document.createElement("p");
                nnn.innerText = scores.vertical[i][j];
                nc.appendChild(nnn);
            }
        }
        fr.appendChild(nb);
    }
    base.appendChild(fr);

    // Other rows
    for (let i = 0; i < scores.horizontal.length; i++) {
        let row = document.createElement("tr");
        row.classList.add("picross-row");
        // Scores
        let sc = document.createElement("td");
        sc.classList.add("picross-count-horizontal");
        sc.style.borderRight = "1px solid black";
        if (i % 5 == 4 || i == scores.horizontal.length - 1) {
            sc.style.borderBottom = "1px solid black";
        }
        for (let j = 0; j < scores.horizontal[i].length; j++) {
            if (scores.horizontal[i][j] != 0) {
                let nnn = document.createElement("p");
                nnn.classList.add("horiz-count");
                nnn.innerText = scores.horizontal[i][j];
                sc.appendChild(nnn);
            }
        }
        row.appendChild(sc);

        // Board
        for (let j = 0; j < code[i].length; j++) {
            let box = document.createElement("td");
            box.classList.add("table-box");
            box.style.borderBottom = "1px solid lightgrey";
            if (i % 5 == 4 || i == code.length - 1) {
                box.style.borderBottom = "1px solid black";
            }
            box.style.borderRight = "1px solid lightgrey";
            if (j % 5 == 4 || j == code[i].length - 1) {
                box.style.borderRight = "1px solid black";
            }

            box.id = "picross-box(" + i + "," + j + ")";
            box.addEventListener("mouseover", function() {
                dealWithHover(code, i, j);
            });
            box.addEventListener("mouseleave", function() {
                dealWithHover(code, -1, -1);
            });
            box.addEventListener("contextmenu", event => event.preventDefault());
            box.addEventListener("mousedown", function(event) {
                dealWithClick(code, i, j, event.which);
            });
            row.appendChild(box);
        }

        base.appendChild(row);
    }
}

function check(code) {
    let pass = true;

    let newCode = [];
    for (let i = 0; i < code.length; i++) {
        newCode.push([]);
        for (let j = 0; j < code[i].length; j++) {
            let item = document.getElementById("picross-box(" + i + "," + j + ")");
            if (item.value == "0") {
                newCode[i][j] = 0;
            } else if (item.value == "1") {
                newCode[i][j] = 1;
            } else {
                pass = false;
                j = code[i].length;
                i = code.length - 1;
            }
        }
    }

    if (pass) {
        let scores = getScores(code);
        let newScores = getScores(newCode);
        if (JSON.stringify(scores) != JSON.stringify(newScores)) {
            pass = false;
        }
    }

    if (pass) {
        welcome();
    }
}

function dealWithClick(code, x, y, type) {
    let item = document.getElementById("picross-box(" + x + "," + y + ")");
    item.classList.remove("picross-on");
    item.classList.remove("picross-off");
    item.value = "";
    if (type == 1) {
        item.classList.add("picross-on");
        item.value = "1";
    } else if (type == 3) {
        item.classList.add("picross-off");
        item.value = "0";
    }

    check(code);
}

function dealWithHover(code, x, y) {
    for (let a = 0; a < code.length; a++) {
        for (let b = 0; b < code[a].length; b++) {
            let item = document.getElementById("picross-box(" + a + "," + b + ")");
            item.classList.remove("picross-hover");
            item.classList.remove("picross-direct-hover");
            if (a == x && b == y) {
                item.classList.add("picross-direct-hover");
            } else if (a == x || b == y) {
                item.classList.add("picross-hover");
            }
        }
    }
}

export function playPicross(after, character, code) {
    clear();
    document.getElementById("picross").style.display = "block";

    drawboard(code);
}