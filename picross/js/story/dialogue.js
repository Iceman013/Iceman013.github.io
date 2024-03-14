import { Chat } from "../chatClasses/chat.js";
import { ChatTarget } from "../chatClasses/chatTarget.js";
import { Popular } from "../chatClasses/popular.js";
import { Conditions } from "../chatClasses/conditions.js";

import { UNDONE, WIN } from "./plot.js";

export const DIALOGUE = [
    // Day 1
    // Class 1
    new Chat(1, "class1", "Ladybug", "none", "normal",
    new Conditions(0,0,1, ["Class 1"]),
    "Today we will be discussing Zambian rock.",
    [
        new ChatTarget(2, "Pay attention"),
        new ChatTarget(-1, "Doodle",
        new Popular(),
        new Conditions(0,0,0, ["Post C1"])),
    ]),

    new Chat(2, "class1", "Ladybug", "none", "normal",
    new Conditions(),
    "Zamrock is a musical genre that emerged in the 1970s in Zambia. It is described as a combination of traditional African music with psychedelic rock and funk. It has been described as the combined sound of Jimi Hendrix and James Brown.",
    [
        new ChatTarget(-1, "Keep paying attention",
        new Popular(0,0,0,0.4,0,0,0.3,0,0.1,0,0,0,0,0.2,0.1,0),
        new Conditions(0,0,0, ["Post C1"])),
    ],
    1),



    // Cafeteria
    new Chat(3, "cafeteria", "none", "none", "normal",
    new Conditions(0,0,1, ["Cafeteria"]),
    "Where do you want to sit?",
    [
        new ChatTarget(4, "Sit alone"),
    ]),

    new Chat(4, "cafeteria", "none", "none", "normal",
    new Conditions(),
    "You ate your food by yourself.",
    [
        new ChatTarget(-1, "Go to your next class",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),



    // Class 2
    new Chat(5, "class2", "Queen Bee", "none", "normal",
    new Conditions(0,0,1, ["Class 2"]),
    "Grab your pencils and get ready for our topic today. It's nonograms.",
    [
        new ChatTarget(6, "Pay attention"),
        new ChatTarget(-1, "Think about coding",
        new Popular(),
        new Conditions(0,0,0, ["Post C2"])),
    ],
    2),

    new Chat(6, "class2", "Queen Bee", "none", "normal",
    new Conditions(),
    "Nonograms, also known as Hanjie, Paint by Numbers, Picross, Griddlers, and Pic-a-Pix are picture logic puzzles in which cells in a grid must be colored or left blank according to numbers at the edges of the grid to reveal a hidden picture.",
    [
        new ChatTarget(-1, "Keep paying attention",
        new Popular(0,0,0,0,0.2,0,0.1,0,0,0,0,0,0,0,0,0.1),
        new Conditions(0,0,0, ["Post C2"])),
    ],
    2),



    // Upper hallway
    new Chat(7, "hallway2", "Spider", "suprised", "normal",
    new Conditions(0,0,1, ["Upper Hallway"]),
    "Hey! Watch out!",
    [
        new ChatTarget(8, "Continue"),
    ]),

    new Chat(8, "hallway2", "Spider", "angry", "normal",
    new Conditions(),
    "You bumped into me idiot underclassman!",
    [
        new ChatTarget(-1, "Leave",
        new Popular(0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0),
        new Conditions(0,0,0, ["Class 2"])),
        new ChatTarget(9, "I'm really sorry.",
        new Popular(0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(9, "hallway2", "Spider", "none", "normal",
    new Conditions(),
    "Well you made me spill my drink all over my new shoes!",
    [
        new ChatTarget(10, "I said I was sorry.",
        new Popular(0,0,-0.3,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(11, "Can I try to help you clean them?"),
    ]),

    new Chat(10, "hallway2", "Spider", "angry", "normal",
    new Conditions(),
    "Just scram! I don't ever wanna see you again.",
    [
        new ChatTarget(-1, "Run away",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),

    new Chat(11, "hallway2", "Spider", "none", "normal",
    new Conditions(),
    "Well get to cleaning.",
    [
        new ChatTarget(12, "Get a towel",
        new Popular(0,0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(13, "Use some other method",
        new Popular(0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(12, "hallway2", "Spider", "angry", "normal",
    new Conditions(),
    "Get to cleaning",
    [
        new ChatTarget(14, "Clean the shoes",
        new Popular(0,0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ],
    3),

    new Chat(13, "hallway2", "Spider", "happy", "normal",
    new Conditions(),
    "Well you have a tongue don't you? Use it.",
    [
        new ChatTarget(14, "Clean the shoes",
        new Popular(0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ],
    4),

    new Chat(14, "hallway2", "Spider", "happy", "normal",
    new Conditions(),
    "You're good at obeying. I'll have to see you some other time. I'm Spider by the way. Buh-bye.",
    [
        new ChatTarget(-1, "Go to your next class",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),



    // Bathroom
    new Chat(15, "bathroom", "Dung Beetle", "none", "normal",
    new Conditions(0,0,1, ["Bathroom"]),
    "Excuse me. I'm headed to the bathroom.",
    [
        new ChatTarget(16, "Use the bathroom",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0.5,0,0,0,0)),
        new ChatTarget(17, "Talk to the Dung Beetle"),
    ]),

    new Chat(16, "bathroom", "none", "none", "normal",
    new Conditions(),
    "Use the toilet.",
    [
        new ChatTarget(19, "Pee"),
        new ChatTarget(18, "Poop",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0)),
    ]),

    new Chat(17, "bathroom", "Dung Beetle", "happy", "normal",
    new Conditions(),
    "This is actually the best bathroom in the whole school.",
    [
        new ChatTarget(16, "That's neat."),
        new ChatTarget(16, "Well I will have to try it out then.",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0.3,0,0,0,0)),
        new ChatTarget(18, "I have to take a giant shit.",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0)),
    ]),

    new Chat(18, "bathroom", "none", "none", "intense",
    new Conditions(),
    "POOP TIME!",
    [
        new ChatTarget(19, "Fight for your life"),
    ],
    5),

    new Chat(19, "bathroom", "none", "none", "normal",
    new Conditions(),
    "You are done it the restroom. It is time to head back to class.",
    [
        new ChatTarget(-1, "Continue",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),



    // Roof
    new Chat(20, "roof", "Moth", "none", "normal",
    new Conditions(0,0,1, ["Roof"],
    new Popular(0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    "Hey. Newbie. What're you doing on the roof?",
    [
        new ChatTarget(21, "Just exploring",
        new Popular(-0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(22, "I had to get out of there. This place is so annoying.",
        new Popular(0.3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(23, "I was looking for you.",
        new Popular(0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(21, "roof", "Moth", "annoyed", "normal",
    new Conditions(0,0,1, ["Roof"]),
    "This is my place so get out of here.",
    [
        new ChatTarget(-1, "Leave",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),

    new Chat(22, "roof", "Moth", "none", "normal",
    new Conditions(),
    "It so is. Ughh. I hate all those cheery bugs.",
    [
        new ChatTarget(23, "You don't seem too bad",
        new Popular(0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(24, "This roof isn't too bad."),
    ]),

    new Chat(23, "roof", "Moth", "happy", "normal",
    new Conditions(),
    "So you like me?",
    [
        new ChatTarget(24, "Continue"),
    ]),

    new Chat(24, "roof", "Moth", "none", "normal",
    new Conditions(),
    "Well, feel free to come up here and enjoy this crappy roof, but it is probably time to head back to class.",
    [
        new ChatTarget(-1, "Continue",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),
];