import { Background } from "./background.js";
import { Character } from "./character.js";

const BACKGROUNDS = [
    new Background(1, "Class 1", "class1", "backgrounds/class1.jpg"),
    new Background(2, "Class 2", "class2", "backgrounds/class2.jpg"),
    new Background(3, "Gym", "gym", "backgrounds/gym.jpg"),
    new Background(4, "Library", "library", "backgrounds/library.jpeg"),
    new Background(5, "Janitor's Closet", "closet", "backgrounds/closet.jpg"),
    new Background(6, "Restroom", "bathroom", "backgrounds/bathroom.jpeg"),
    new Background(7, "Garden", "garden", "backgrounds/garden.jpg"),
    new Background(8, "Roof", "roof", "backgrounds/roof.jpg"),
    new Background(9, "Hallway", "hallway", "backgrounds/hallway.png"),
    new Background(10, "Upper Hallway", "hallway2", "backgrounds/hallway2.jpg"),
    new Background(11, "Cafeteria", "cafeteria", "backgrounds/cafeteria.jpg"),
    new Background(12, "Class 1 Layout", "class1Layout", "backgrounds/class1.jpg"),
    new Background(13, "Class 2 Layout", "class2Layout", "backgrounds/class2.jpg"),
    new Background(14, "Generic Background", "none", "backgrounds/generic.jpg"),
    new Background(15, "Night", "night", "backgrounds/night.jpg"),
];

export function getBackground(shortName) {
    let out = "images/";
    for (let i = 0; i < BACKGROUNDS.length; i++) {
        if (shortName == BACKGROUNDS[i].shortName) {
            out = out + BACKGROUNDS[i].url;
            i = BACKGROUNDS.length;
        }
    }
    return out;
}

const CHARACTERS = [
    new Character(1, "Moth", "none", "moth/none.jpg"),
    new Character(2, "Butterfly", "none", "butterfly/none.png"),
    new Character(3, "spider", "none", "spider/none.jpg"),
    new Character(4, "Aphid", "none", "aphid/none.jpg"),

    new Character(5, "Queen Bee", "none", "queenBee/none.jpeg"),
    new Character(6, "Cockroach", "none", "cockroach/none.jpg"),
    new Character(7, "Ant", "none", "ant/none.jpg"),
    new Character(8, "Worm", "none", "worm/none.jpg"),

    new Character(9, "Mosquito", "none", "mosquito/none.jpg"),
    new Character(10, "Beetle", "none", "beetle/none.jpg"),
    new Character(11, "Gnat", "none", "gnat/none.jpg"),
    new Character(12, "Dung Beetle", "none", "dungBeetle/none.png"),

    new Character(13, "Firefly", "none", "firefly/none.jpg"),
    new Character(14, "Ladybug", "none", "ladybug/none.jpg"),
    new Character(15, "Fly", "none", "fly/none.jpg"),
    new Character(16, "Centipede", "none", "centipede/none.jpg"),
];

export function getCharacter(name, emotion) {
    let out = "images/characters/";
    let alt = "images/characters/";
    let found = false;
    for (let i = 0; i < CHARACTERS.length; i++) {
        if (CHARACTERS[i].name == name) {
            if (CHARACTERS[i].emotion == "none") {
                alt = alt + CHARACTERS[i].url;
            }
            if (CHARACTERS[i].emotion == emotion) {
                out = out + CHARACTERS[i].url;
                i = CHARACTERS.length;
                found = true;
            }
        }
    }
    if (found) {
        return out;
    } else {
        return alt;
    }
}