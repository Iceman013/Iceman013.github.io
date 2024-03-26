import { Message, getMessages } from "../../js/message.js";

let joinDetails = {
    code: "",
    name: "",
    serverURL: "",
}
let base;

async function refresh() {
    let messages = await getMessages(joinDetails.code, joinDetails.serverURL);

    let maxRound = 0;
    messages.forEach(i => {
        if (i.round > maxRound) {
            maxRound = i.round;
        }
    });

    let openSections = [];
    let hm;
    messages.forEach(i => {
        if (i.round == maxRound) {
            openSections.push(i);
            if (i.player == "Host" && i.type == "status") {
                hm = i;
            }
        }
    });

    let imdone = true;
    if (hm.data == "Category") {
        // Category picker display
        imdone = false;
        let prompts = [];
        openSections.forEach(i => {
            if (i.player == "Host" && i.type == "prompt") {
                prompts.push(i);
            }
            if (i.player == joinDetails.name && i.type == "vote") {
                imdone = true;
            }
        });
        if (!imdone) {
            makeCategoriesVote(prompts);
        }
    }

    if (imdone) {
        // Display waiting message
        displayDefault();
    }
}

function clear() {
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
}

function displayDefault() {
    clear();
    let title = document.createElement("h1");
    title.innerText = "Wait for instructions";
    base.appendChild(title);
}

function addCategoryVote(parent, item, index) {
    let input = document.createElement("input");
    input.style.display = "none";
    input.type = "radio";
    input.name = "Category-Select";
    input.value = item.data;
    input.id = "category" + index;

    let label = document.createElement("label");
    label.classList.add("prompt-vote-option");
    label.htmlFor = ("category" + index);
    label.innerText = item.data;

    parent.appendChild(input);
    parent.appendChild(label);
    parent.appendChild(document.createElement("br"));
}

function makeCategoriesVote(catList) {
    clear();

    // Head
    let head = document.createElement("h1");
    head.innerText = "Pick a category";

    // Options
    let parent = document.createElement("div");
    for (let i = 0; i < catList.length; i++) {
        addCategoryVote(parent, catList[i], i);
    }

    // Vote button
    let button = document.createElement("button");
    button.classList.add("game-big-button");
    button.innerText = "Submit";

    button.addEventListener("click", async function() {
        let radios = document.getElementsByName("Category-Select");
        let choice;
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                choice = radios[i].value;
                i = radios.length;
            }
        }
        console.log(choice);
        let message = new Message(joinDetails.serverURL, joinDetails.code, joinDetails.name, catList[0].round, "vote", choice);
        await message.send();

        refresh();
    })

    // Add them
    base.appendChild(head);
    base.appendChild(parent);
    base.appendChild(button);
}

export function play(njoinDetails) {
    joinDetails = njoinDetails;
    base = document.getElementById("player-game-box");
    document.getElementById("player-refresh-button").addEventListener("click", refresh);
}