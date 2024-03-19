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
    new Character(1, "Moth", "moth", 0.8),
    new Character(2, "Butterfly", "butterfly", 1),
    new Character(3, "Spider", "spider", 3),
    new Character(4, "Aphid", "aphid", 1),

    new Character(5, "Queen Bee", "queenBee", 1),
    new Character(6, "Cockroach", "cockroach", 1),
    new Character(7, "Ant", "ant", 1),
    new Character(8, "Worm", "worm", 1),

    new Character(9, "Mosquito", "mosquito", 1),
    new Character(10, "Beetle", "beetle", 1),
    new Character(11, "Gnat", "gnat", 1),
    new Character(12, "Dung Beetle", "dungBeetle", 1),

    new Character(13, "Firefly", "firefly", 1),
    new Character(14, "Ladybug", "ladybug", 1),
    new Character(15, "Fly", "fly", 1),
    new Character(16, "Centipede", "centipede", 1),
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

export function getCharacterFromId(id) {
    let out;
    for (let i = 0; i < CHARACTERS.length; i++) {
        if (CHARACTERS[i].id == id) {
            out = CHARACTERS[i];
            i = CHARACTERS.length;
        }
    }
    return out;
}

// Adding characters' emotions
function addCharacteristics() {
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

    // Add lines
    getCharacter("Moth").addSupport(["Do it or whatever.", "Beat it. Not that I care.", "Losing is lame."]);
    getCharacter("Moth").addWin(["You beat it or whatever."]);

    getCharacter("Butterfly").addSupport(["Cool guys don't lose", "I wouldn't be seen with a loser"]);
    getCharacter("Butterfly").addWin(["Now that's better. You won."]);

    getCharacter("Spider").addSupport(["A good boy solves picross", "If you mess up, I'll spank you", "Make a mistake and I'll punish you"]);
    getCharacter("Spider").addWin(["Good boy. You won.", "I told you to solve picross and you did. Nice and obediant."]);

    getCharacter("Aphid").addSupport(["This one is tough", "I need your help to solve this", "You're so smart"]);
    getCharacter("Aphid").addWin(["Thanks for beating it."]);

    getCharacter("Queen Bee").addSupport(["This one will <i>BEE</i> easy", "You've got it honey", "You're busy as a bee here", "Think about the clues. Don't just <i>WING</i> it."]);
    getCharacter("Queen Bee").addSupport(["If you get one wrong, will you hear a buzz? Haha", "This game is the bee's knees"]);
    getCharacter("Queen Bee").addWin(["Nice job honey!", "You solved it! I'm so proud of you."]);

    getCharacter("Cockroach").addSupport(["You could look up a picross solver online"]);
    getCharacter("Cockroach").addWin(["You won. Great. Wanna go find some trash with me?"]);

    getCharacter("Ant").addSupport(["Ah. A puzzle of intellect.", "Use logical deductions.", "Maybe an algorithm would help."]);
    getCharacter("Ant").addWin(["Good job. You may want to study this puzzle more later."]);

    getCharacter("Worm").addSupport(["I'm sure you'll solve it", "Take your time and appreciate the puzzle"]);
    getCharacter("Worm").addWin(["You won. You've improved so much."]);

    getCharacter("Mosquito").addSupport(["You can do it darling", "I could watch you do this all day"]);
    getCharacter("Mosquito").addWin(["You won. That's so hot."]);

    getCharacter("Beetle").addSupport(["Work on those brain muscles", "This is great training!", "Go for speed"]);
    getCharacter("Beetle").addWin(["Great job! Now do 100 more reps!"]);

    getCharacter("Gnat").addSupport(["I believe in you"]);
    getCharacter("Gnat").addWin(["Nice job"]);

    getCharacter("Dung Beetle").addSupport(["I'm running out of poop jokes for this character. My bad"]);
    getCharacter("Dung Beetle").addWin(["Now that's the shit! You won!"]);

    getCharacter("Firefly").addSupport(["This is a pretty pattern.", "Isn't this nice and relaxing?"]);
    getCharacter("Firefly").addWin(["Nice win"]);

    getCharacter("Ladybug").addSupport(["You should've studied these patterns more", "This game is quite complicated for someone your age"]);
    getCharacter("Ladybug").addWin(["A nice mature victory"]);

    getCharacter("Fly").addSupport(["I believe in you.", "You can do it.", "Good luck"]);
    getCharacter("Fly").addWin(["Yay. You won!", "Great job!"]);

    getCharacter("Centipede").addSupport(["Go for it bro!", "Nice form dude!", "I love the way the sweat trickles down your forehead while playing this."]);
    getCharacter("Centipede").addWin(["Sick victory bro!"]);
}
addCharacteristics();

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