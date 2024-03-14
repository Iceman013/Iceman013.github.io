import { Background } from "./background.js";
import { Emotion } from "./emotion.js";
import { Character } from "./character.js";
import { Music } from "./music.js";

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

export const CHARACTERS = [
    new Character(1, "Moth", "moth"),
    new Character(2, "Butterfly", "butterfly"),
    new Character(3, "Spider", "spider"),
    new Character(4, "Aphid", "aphid"),

    new Character(5, "Queen Bee", "queenBee"),
    new Character(6, "Cockroach", "cockroach"),
    new Character(7, "Ant", "ant"),
    new Character(8, "Worm", "worm"),

    new Character(9, "Mosquito", "mosquito"),
    new Character(10, "Beetle", "beetle"),
    new Character(11, "Gnat", "gnat"),
    new Character(12, "Dung Beetle", "dungBeetle"),

    new Character(13, "Firefly", "firefly"),
    new Character(14, "Ladybug", "ladybug"),
    new Character(15, "Fly", "fly"),
    new Character(16, "Centipede", "centipede"),
];

export function getCharacter(name) {
    let out;
    for (let i = 0; i < CHARACTERS.length; i++) {
        if (CHARACTERS[i].name == name) {
            out = CHARACTERS[i];
            i = CHARACTERS.length;
        }
    }
    return out;
}

// Adding characters' emotions
function addEmotions() {
    getCharacter("Moth").addEmotion(new Emotion(1, "none", "none.jpg"));
    getCharacter("Butterfly").addEmotion(new Emotion(2, "none", "none.png"));
    getCharacter("Spider").addEmotion(new Emotion(3, "none", "none.jpg"));
    getCharacter("Aphid").addEmotion(new Emotion(4, "none", "none.jpg"));

    getCharacter("Queen Bee").addEmotion(new Emotion(5, "none", "none.jpeg"));
    getCharacter("Cockroach").addEmotion(new Emotion(6, "none", "none.jpg"));
    getCharacter("Ant").addEmotion(new Emotion(7, "none", "none.jpg"));
    getCharacter("Worm").addEmotion(new Emotion(8, "none", "none.png"));

    getCharacter("Mosquito").addEmotion(new Emotion(9, "none", "none.jpg"));
    getCharacter("Beetle").addEmotion(new Emotion(10, "none", "none.jpg"));
    getCharacter("Gnat").addEmotion(new Emotion(11, "none", "none.jpg"));
    getCharacter("Dung Beetle").addEmotion(new Emotion(12, "none", "none.png"));

    getCharacter("Firefly").addEmotion(new Emotion(13, "none", "none.jpg"));
    getCharacter("Ladybug").addEmotion(new Emotion(14, "none", "none.jpg"));
    getCharacter("Fly").addEmotion(new Emotion(15, "none", "none.jpg"));
    getCharacter("Centipede").addEmotion(new Emotion(16, "none", "none.jpg"));
}
addEmotions();

/**
 * 
 * @param {String} name Name of character
 * @param {String} emotion Target emotion
 * @returns Image URL for chosen character emotion. Returns default emotion if does not exist.
 */
export function getCharacterEmotionUrl(name, emotion) {
    let character = getCharacter(name);
    let fancyE = character.getEmotion(emotion);
    if (fancyE == null) {
        fancyE = character.getEmotion("none");
    }
    let url = "images/characters/" + character.folder + "/" + fancyE.url;
    return url;
}

export const MUSIC = [
    new Music(1, "Netherplace", "normal", "Netherplace_Looping.mp3"),
    new Music(2, "Intro", "intro", "RPG-Intro_v001_Looping.mp3"),
    new Music(3, "Happy-Lazy", "calm", "happy-lazy-loop-109007.mp3"),
];

/**
 * 
 * @param {String} mood 
 * @returns 
 */
export function getMusic(mood) {
    let defalt;
    let out;
    for (let i = 0; i < MUSIC.length; i++) {
        if (MUSIC[i].mood == "normal") {
            defalt = MUSIC[i];
        }
        if (MUSIC[i].mood == mood) {
            out = MUSIC[i];
            i = MUSIC.length;
        }
    }
    if (out == null) {
        out = defalt;
    }
    return out;
}