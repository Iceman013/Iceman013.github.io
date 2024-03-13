import { Chat } from "../chatClasses/chat.js";
import { ChatTarget } from "../chatClasses/chatTarget.js";
import { Popular } from "../chatClasses/popular.js";
import { Conditions } from "../chatClasses/conditions.js";

export const UNDONE = -4;
export const WIN = -3;

export const PLOT = [
    // System messages
    new Chat(-5, "night", "none", "none",
    new Conditions(),
    "You went home after school and went to bed.",
    [
        new ChatTarget(-1, "Continue",
        new Popular(),
        new Conditions(0,0,0, ["Class 1"])),
    ]),

    new Chat(-4, "none", "none", "none",
    new Conditions(),
    "Section not made. Check loose ends.",
    []),

    new Chat(-3, "none", "none", "none",
    new Conditions(),
    "Character specific path. Not yet finished",
    []),

    new Chat(-2, "none", "none", "none",
    new Conditions(),
    "It seems you were not able to make any romantic relationships.",
    []),

    new Chat(-1, "none", "none", "none",
    new Conditions(),
    "If you are reading this, there is an error. This is transition state.",
    []),



    // Intro sequence
    new Chat(0, "none", "none", "none",
    new Conditions(),
    "You begin your new school year at Bug School, a place of higher education with students all above the age of 21.\nAlthough the school demographics are weirdly female heavy, you feel like this will be a great place to meet new people and make new friends.",
    [
        new ChatTarget(1, "Continue"),
    ]),

    new Chat(1, "none", "none", "none",
    new Conditions(),
    "Or maybe more than friends {stall} {stall} {stall} {stall} . {stall} {stall} {stall} {stall} . {stall} {stall} {stall} {stall} .",
    [
        new ChatTarget(-1, "Begin your day",
        new Popular(),
        new Conditions(0,0,1, ["Class 1"])),
    ]),



    // First day of class 1
    new Chat(2, "class1", "Ladybug", "none",
    new Conditions(-1,0,1, ["Class 1"]),
    "Welcome to class new student. Introduce yourself.",
    [
        new ChatTarget(5, "Hi. My name is {name}. It is nice to meet you."),
        new ChatTarget(5, "Hi. I'm {name}."),
        new ChatTarget(3, "Howdy. I'm {name}. I'm new here but I hope to become best friends with all of you. Also, I'm single.",
        new Popular(0,0,0,0,0,0,-0.1,0,0.3,0,0,0,0,-0.1,0.1,0)),
        new ChatTarget(4, "Whatever. I'm {name}. Where do I sit?",
        new Popular(0.3,0,0,0,0,0,0,0,0,0,0,0,0,-0.1,0,0)),
    ]),

    new Chat(3, "class1", "Ladybug", "angry",
    new Conditions(),
    "That is no way to introduce yourself.",
    [
        new ChatTarget(5, "Continue"),
    ]),

    new Chat(4, "class1", "Ladybug", "angry",
    new Conditions(),
    "Try being more polite next time.",
    [
        new ChatTarget(5, "Continue"),
    ]),

    new Chat(5, "class1Layout", "none", "none",
    new Conditions(),
    "Pick a seat.",
    [
        new ChatTarget(-1, "Front seat",
        new Popular(-0.2,0,0,0.1,0,0,0.2,0,0.1,0,0,0,0,0.1,0,0),
        new Conditions(1,0,0, ["Class 1"])),
        new ChatTarget(6, "Back corner seat",
        new Popular(0.1,0,0,0,0,0,-0.1,0,0,0,0,0,0,-0.1,0.1,0),
        new Conditions(2)),
    ]),

    new Chat(6, "class1", "none", "none",
    new Conditions(),
    "Wow. You're a main character huh?",
    [
        new ChatTarget(-1, "Continue",
        new Popular(),
        new Conditions(0,0,0, ["Class 1"])),
    ]),



    // Post class 1
    new Chat(7, "class1", "Ladybug", "none",
    new Conditions(0,0,0, ["Post C1"]),
    "And that concludes our lecture.",
    [
        new ChatTarget(-1, "Leave class",
        new Popular(),
        new Conditions(0,0,0, ["Hallway", "Lunch"])),
    ]),



    // Lunch
    new Chat(10, "hallway", "none", "none",
    new Conditions(0,0,0, ["Hallway", "Lunch"]),
    "What do you want to do during lunch break?",
    [
        new ChatTarget(-1, "Eat in the cafeteria",
        new Popular(),
        new Conditions(0,0,0, ["Cafeteria"])),
        new ChatTarget(11, "Explore the halls"),
    ]),

    new Chat(11, "hallway", "none", "none",
    new Conditions(),
    "Where would you like to go?",
    [
        new ChatTarget(10, "Go back a hall"),
        new ChatTarget(-1, "Go to the next grade's hallway",
        new Popular(),
        new Conditions(0,0,0, ["Upper Hallway"])),
        new ChatTarget(-1, "Go to the roof",
        new Popular(),
        new Conditions(0,0,0, ["Roof"])),
        new ChatTarget(-1, "Go to the restroom",
        new Popular(),
        new Conditions(0,0,0, ["Bathroom"])),
        new ChatTarget(-1, "Sneak into the janitor's closet",
        new Popular(),
        new Conditions(0,0,0, ["Closet"])),
    ]),



    // First day of class 2
    new Chat(12, "class2", "Queen Bee", "happy",
    new Conditions(0,-1,1, ["Class 2"]),
    "Howdy new student. Welcome to our little hive.",
    [
        new ChatTarget(14, "Continue"),
        new ChatTarget(13, "Giggle at the pun",
        new Popular(0,-0.1,0,0,0.3,0,0.1,0,0.1,0,0,0,0,0,0.1,0)),
    ]),

    new Chat(13, "class2", "Queen Bee", "happy",
    new Conditions(),
    "It seems you have a great sense of humor.",
    [
        new ChatTarget(14, "Continue"),
    ]),

    new Chat(14, "class2", "Queen Bee", "happy",
    new Conditions(),
    "Introduce yourself to the rest of the class honey.",
    [
        new ChatTarget(16, "Hi. I'm {name}."),
        new ChatTarget(16, "Some of these bugs have already met me. I'm {name}.",
        new Popular(0,0,0,0,-0.2,0,-0.1,0,0,-0.1,-0.1,0,-0.1,0,0,-0.1)),
        new ChatTarget(15, "Howdy. I'm {name}. Nice to meet you. I'm happy to <i>BEE</i> here.",
        new Popular(0,-0.1,0,0,0.5,0,0,0,0.1,0,0,0,0,0,0,0)),
    ]),

    new Chat(15, "class2", "Queen Bee", "very_happy",
    new Conditions(),
    "Great pun! Oh that was hillarious. I'm super happy to have you join us this year.",
    [
        new ChatTarget(16, "Continue"),
    ]),

    new Chat(16, "class2Layout", "none", "none",
    new Conditions(),
    "Pick a seat",
    [
        new ChatTarget(-1, "Front seat",
        new Popular(0,0,0,0,0.2,0,0.2,0,0,0,0,0,0,0,0,0),
        new Conditions(0,1,0, ["Class 2"])),
        new ChatTarget(17, "Back corner seat",
        new Popular(0,0,0,0,-0.1,0,-0.1,0,0,0,0,0,0,0,0.1,0.1),
        new Conditions(0,2)),
    ]),

    new Chat(17, "class2", "none", "none",
    new Conditions(),
    "Real original",
    [
        new ChatTarget(-1, "Continue",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),



    // Post class 2
    new Chat(18, "class2", "Queen Bee", "none",
    new Conditions(0,0,0, ["Post C2"]),
    "That'll <i>BEE</i> it for today.",
    [
        new ChatTarget(-1, "Leave class",
        new Popular(),
        new Conditions(0,0,0, ["After School"])),
    ]),



    // After School
    new Chat(19, "hallway", "none", "none",
    new Conditions(0,0,0, ["After School"]),
    "Where would you like to go?",
    [
        new ChatTarget(-1, "Home")
    ])
];