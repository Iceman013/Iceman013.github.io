import { Role } from "../role.js";
import { Category } from "../category.js";
import { categories } from "../assets.js";
import { Message, getMessages } from "../../../js/message.js";

let deferreds =[];
let bigPromise = new Promise(function(resolve, reject) {
    deferreds.push({resolve: resolve, reject: reject});
});

/**
 * Get categories
 * @param {Number} amount Amount of categories
 * @param {Number} people Amount of roles minimum
 * @returns A set of unique categories
 */
function getCategories(amount, people) {
    let valid = [];
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].roles.length >= people) {
            valid.push(categories[i]);
        }
    }
    if (valid.length < amount) {
        return [];
    }

    let list = [];
    while (list.length < amount) {
        let pick = valid[Math.floor(valid.length*Math.random())];
        if (list.indexOf(pick) == -1) {
            list.push(pick);
        }
    }

    return list;
}

/**
 * A function to show the categories
 * @param {Element} base The base element to add stuff to
 * @param {Category} cat The category to display
 */
function displayCat(base, cat) {
    let element = document.createElement("div");
    element.classList.add("category-shower");

    let title = document.createElement("h1");
    title.innerText = cat.name;

    let count = document.createElement("p");
    count.classList.add("category-vote-count");
    count.id = encodeURI(cat.name);
    count.innerText = 0;

    element.appendChild(title);
    element.appendChild(count);
    base.appendChild(element);
}

/**
 * 
 * @param {Element} base 
 * @param {Category.<Array>} catList 
 */
function displayCategories(base, catList) {
    let display = document.createElement("div");
    display.classList.add("category-container");

    catList.forEach(i => {
        displayCat(display, i);
    });

    base.appendChild(display);
}

/**
 * Send a single category
 * @param {*} hostDetails Host Details json
 * @param {Category} cat Category to send as a voting option
 */
async function sendCategory(hostDetails, cat) {
    let message = new Message(hostDetails.serverURL, hostDetails.code, "Host", hostDetails.round, "prompt", cat.name);
    await message.send();
}

/**
 * 
 * @param {*} hostDetails Host Details json
 * @param {Category.<Array>} catList Array of categories to send as voting options
 */
async function sendCategories(hostDetails, catList) {
    for (let i = 0; i < catList.length; i++) {
        await sendCategory(hostDetails, catList[i]);
    }
}

/**
 * Shows updated vote counts
 * @param {Category.<Array>} catList List of categories in order
 * @param {Number.<Array>} counts List of counts in order
 */
function showVotes(catList, counts) {
    for (let i = 0; i < catList.length; i++) {
        let ct = document.getElementById(encodeURI(catList[i].name));
        ct.innerText = counts[i];
    }
}

async function checkVotes(hostDetails, catList) {
    let list = await getMessages(hostDetails.code, hostDetails.serverURL);
    let votes = [];
    list.forEach(i => {
        if (i.round == hostDetails.round && i.type == "vote") {
            votes.push(i);
        }
    });

    let counts = new Array(catList.length).fill(0);
    votes.forEach(i => {
        let pos = 0;
        for (let j = 0; j < catList.length; j++) {
            if (catList[j].name == i.data) {
                pos = j;
                j = catList.length;
            }
        }
        counts[pos]++;
    });

    showVotes(catList, counts);

    let max = [0];
    for (let i = 1; i < counts.length; i++) {
        if (counts[i] > counts[max[0]]) {
            max = [i];
        } else if (counts[i] == counts[max[0]]) {
            max.push(i);
        }
    }

    let output = [];
    for (let i = 0; i < max.length; i++) {
        output.push(catList[max[i]]);
    }

    console.log(output);
    return output;
}

function addButtons(base, hostDetails, catList) {
    let ref = document.createElement("button");
    ref.classList.add("big-button");
    ref.innerText = "Refresh";
    ref.addEventListener("click", async function() {
        await checkVotes(hostDetails, catList);
    });

    base.appendChild(ref);
}

/**
 * Runs the category vote
 * @param {Number} amount Amount of categories to pick from
 * @returns The user voted category
 */
export async function pickCategory(amount, hostDetails) {
    // Get base variables
    let base = document.getElementById("--category");
    let catList = getCategories(amount, hostDetails.players);

    // Clear base
    while (base.firstChild) {
        base.removeChild(base.firstChild);
    }
    base.style.display = "block";

    let statusMessage = new Message(hostDetails.serverURL, hostDetails.code, "Host", hostDetails.round, "status", "Category");
    await statusMessage.send();

    // Show categories
    displayCategories(base, catList);

    // Send categories out
    await sendCategories(hostDetails, catList);

    // Add basic buttons
    addButtons(base, hostDetails, catList);

    console.log(deferreds);
    await bigPromise;

    // When done
    return 0;
}