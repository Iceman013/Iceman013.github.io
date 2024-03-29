import { Message, getMessages } from "../../js/message.js";
import * as Constants from "../../js/constants.js";
import { pickCategory } from "./subroutines/catPicker.js";
import { pickRole } from "./subroutines/rolePicker.js";
import { categories } from "./assets.js";

let hostDetails = {
    code: "",
    round: 0,
    players: 0,
}

function clear() {
    let pages = ["--intro", "--category", "--vote", "--roles", "--score", "--final"];
    pages.forEach((i) => {
        document.getElementById(i).style.display = "none";
    });
}

export async function roleModel(nhostDetails) {
    hostDetails = nhostDetails;

    // Get a category
    clear();
    hostDetails.round++;
    // let category = await pickCategory(5, hostDetails);
    let category = categories[1];

    // Do the role game
    clear();
    hostDetails.round++;
    let scoreChanges = await pickRole(hostDetails, category);
}