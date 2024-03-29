import { Message, getMessages } from "../../js/message.js";
import { Category } from "./category.js";

let joinDetails = {
    code: "",
    name: "",
    serverURL: "",
}
let base;

/**
 * Refresh for new content
 */
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

/**
 * Clear page
 */
function clear() {
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
}

/**
 * Display "Wait for more instructions"
 */
function displayDefault() {
    clear();
    let title = document.createElement("h1");
    title.innerText = "Wait for instructions";
    base.appendChild(title);
}

/**
 * 
 * @param {Element} parent Parent element to add new category to
 * @param {Message} item Message to convert into a button
 * @param {Number} index Index for id purposes
 */
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

/**
 * 
 * @param {Array} catList List of categories to vote for
 */
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

/**
 * 
 * @param {*} njoinDetails JSON object with important player details
 */
export function play(njoinDetails) {
    joinDetails = njoinDetails;
    base = document.getElementById("player-game-box");
    document.getElementById("player-refresh-button").addEventListener("click", refresh);
}