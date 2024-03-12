import { Chat } from "../chatClasses/chat.js";
import { ChatTarget } from "../chatClasses/chatTarget.js";
import { Popular } from "../chatClasses/popular.js";
import { Conditions } from "../chatClasses/conditions.js";

import { UNDONE, WIN } from "./plot.js";

export const DIALOGUE = [
    // Class 1 Day 1
    new Chat(1, "class1", "Ladybug", "none",
    new Conditions(0,0,1, ["Class 1"]),
    "Today we will be discussing Zambian rock.",
    [
        new ChatTarget(2, "Pay attention"),
    ]),

    new Chat(2, "class1", "Ladybug", "none",
    new Conditions(),
    "Zamrock is a musical genre that emerged in the 1970s in Zambia. It is described as a combination of traditional African music with psychedelic rock and funk. It has been described as the combined sound of Jimi Hendrix and James Brown.",
    [
        new ChatTarget(-1, "Keep paying attention",
        new Popular(0,0,0,0.4,0,0,0.3,0,0.1,0,0,0,0,0.2,0.1,0),
        new Conditions(0,0,0, ["Post C1"])),
    ],
    1),



    new Chat(3, "cafeteria", "none", "none",
    new Conditions(0,0,1, ["Cafeteria"]),
    "Where do you want to sit?",
    [
        new ChatTarget(4, "Sit alone"),
    ]),

    new Chat(4, "cafeteria", "none", "none",
    new Conditions(),
    "You ate your food by yourself.",
    [
        new ChatTarget(-1, "Go to your next class",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),
];