import { Character } from "./character.js"
export const CHARACTERLIST = [
    new Character(0, "Player"),
];

CHARACTERLIST.getId = function(id) {
    for (let i = 0; i < CHARACTERLIST.length; i++) {
        if (CHARACTERLIST[i].id == id) {
            return CHARACTERLIST[i];
        }
    }
    return null;
}