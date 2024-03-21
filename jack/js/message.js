import { post, get } from "./server.js";
import * as Constants from "./constants.js";
import { MessageIDLength } from "./constants.js";

let conversions = [
    {
        in: ",",
        out: "{{comma}}",
    },
    {
        in: " ",
        out: "{{_}}",
    },
    {
        in: '"',
        out: "{{double_quote}}",
    },
    {
        in: "'",
        out: "{{single_quote}}",
    },
];

function encodeString(input) {
    for (let i = 0; i < conversions.length; i++) {
        input = input.replaceAll(conversions[i].in, conversions[i].out);
    }
    return input;
}

function decodeString(input) {
    for (let i = 0; i < conversions.length; i++) {
        input = input.replaceAll(conversions[i].out, conversions[i].in);
    }
    return input;
}

function getRandomID() {
    let possible = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let output = "";
    for (let i = 0; i < Constants.MessageIDLength; i++) {
        let chosen = Math.floor(possible.length*Math.random());
        output += possible.substring(chosen, chosen + 1);
    }
    return output;
}

export class Message {
    /**
     * Creates a message object. Can then be sent.
     * @param {String} serverURL URL of server hosting game
     * @param {String} gameId 6 character game id
     * @param {String} player Player name. Gets encoded
     * @param {Number} round Round number
     * @param {String} type [prompt, vote, answer]
     * @param {String} data Data to submit
     */
    constructor(serverURL, gameId="", player="", round=-1, type="", data="") {
        this.serverURL = serverURL;

        this.gameId = gameId;
        this.player = player;
        this.round = round;
        this.type = type;
        this.data = data;

        this.uniqueId = getRandomID();
    }

    send() {
        let json = {
            game: this.gameId,
            player: encodeString(this.player),
            round: this.round,
            uniqueId: this.uniqueId,
            type: this.type,
            data: encodeString(this.data),
        };
        post(json, this.serverURL);
    }

    read(input) {
        this.gameId = input.game;
        this.player = decodeString(input.player);
        this.round = input.round;
        this.type = input.type;
        this.data = decodeString(input.data);
    }
}

export async function getMessages(input, serverURL) {
    let got = await get(input, serverURL);
    let messages = [];
    for (let i = 0; i < got.length; i++) {
        let nep = new Message(serverURL);
        nep.read(got[i]);
        messages.push(nep);
    }

    return messages;
}