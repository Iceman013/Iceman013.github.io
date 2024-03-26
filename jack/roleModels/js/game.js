import { Message, getMessages } from "../../js/message.js";
import * as Constants from "../../js/constants.js";
import { pickCategory } from "./subroutines/catPicker.js";

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

    // DELETE LINE EVENTUALLY
    hostDetails.players = 4;

    clear();
    hostDetails.round++;
    await pickCategory(5, hostDetails);
    console.log("Done with pickCategory");
}