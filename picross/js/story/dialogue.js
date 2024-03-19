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
        new ChatTarget(31, "Sit next to Fly"),
        new ChatTarget(32, "Sit next to Butterfly"),
        new ChatTarget(42, "Sit next to Mosquito"),
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
    ]),

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

    new Chat(18, "bathroom", "Dung Beetle", "none", "intense",
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



    // Janitor's Closet
    new Chat(25, "closet", "Cockroach", "suprised", "normal",
    new Conditions(0,0,1, ["Closet"]),
    "Ah! What are you doing here?!",
    [
        new ChatTarget(-1, "Sorry. I'll leave.",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
        new ChatTarget(26, "Just exploring"),
        new ChatTarget(27, "Looking for some good stuff",
        new Popular(0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(26, "closet", "Cockroach", "none", "normal",
    new Conditions(),
    "Well this is where I live.",
    [
        new ChatTarget(-1, "I'll let you be.",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
        new ChatTarget(27, "Can I join you?",
        new Popular(0,0,0,0,0,0.5,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(27, "closet", "Cockroach", "none", "normal",
    new Conditions(),
    "Okay. Here is some good stuff. It's my collection.",
    [
        new ChatTarget(-1, "Ew. You collected all this stuff?",
        new Popular(0,0,0,0,0,-0.3,0,0,0,0,0,0,0,0,0,0),
        new Conditions(0,0,0, ["Class 2"])),
        new ChatTarget(28, "Dang. That's a nice collection.",
        new Popular(0,0,0,0,0,0.3,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(29, "Can I try to make something with it?"),
    ]),

    new Chat(28, "closet", "Cockroach", "blush", "normal",
    new Conditions(),
    "Thanks. I spent a long time getting it all. Wanna build something with it?",
    [
        new ChatTarget(-1, "No thanks",
        new Popular(0,0,0,0,0,-0.1,0,0,0,0,0,0,0,0,0,0),
        new Conditions(0,0,0, ["Class 2"])),
        new ChatTarget(29, "Sure"),
    ]),

    new Chat(29, "closet", "Cockroach", "none", "normal",
    new Conditions(),
    "Good luck making something cool.",
    [
        new ChatTarget(30, "BUILD"),
    ],
    6),

    new Chat(30, "closet", "Cockroach", "happy", "normal",
    new Conditions(),
    "Wow! That's really cool. Thanks for dropping by. Feel free to come by any time.",
    [
        new ChatTarget(-1, "I'll see you later. I've got to head to class.",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),



    // Cafeteria fly
    new Chat(31, "cafeteria", "Fly", "none", "normal",
    new Conditions(),
    "Hey. You're the new student right?",
    [
        new ChatTarget(33, "Yeah. Nice to meet you.",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0)),
        new ChatTarget(33, "You remembered me?",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0)),
    ]),

    new Chat(32, "cafeteria", "Butterfly", "angry", "normal",
    new Conditions(),
    "What makes you think this seat isn't reserved?",
    [
        new ChatTarget(4, "Sorry. I'll go sit somewhere else."),
        new ChatTarget(37, "Of course someone as pretty as you wouldn't be sitting alone."),
    ]),

    new Chat(33, "cafeteria", "Fly", "none", "normal",
    new Conditions(),
    "Of course I remember you from our first class.",
    [
        new ChatTarget(34, "How has your day been.",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.1,0)),
        new ChatTarget(34, "It's been great meeting you.",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.3,0)),
        new ChatTarget(35, "Well I'm starving."),
    ]),

    new Chat(34, "cafeteria", "Fly", "none", "normal",
    new Conditions(),
    "It's been great meeting you. That's been the highlight of my day.",
    [
        new ChatTarget(35, "Let's eat lunch together.",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0)),
        new ChatTarget(36, "Aw thanks"),
    ]),

    new Chat(35, "cafeteria", "Fly", "blush", "normal",
    new Conditions(),
    "Wanna share?",
    [
        new ChatTarget(36, "Sure",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0.2,0)),
        new ChatTarget(36, "No thanks"),
    ]),

    new Chat(36, "cafeteria", "none", "none", "normal",
    new Conditions(),
    "You ate your lunch.",
    [
        new ChatTarget(-1, "Go to your next class",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),

    new Chat(37, "cafeteria", "Butterfly", "none", "normal",
    new Conditions(),
    "I actually am sitting alone today.",
    [
        new ChatTarget(38, "Why?")
    ]),

    new Chat(38, "cafeteria", "Butterfly", "none", "normal",
    new Conditions(),
    "My boyfriend and I broke up.",
    [
        new ChatTarget(39, "How is that even possible?",
        new Popular(0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(4, "That makes sense",
        new Popular(0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(39, "cafeteria", "Butterfly", "happy", "normal",
    new Conditions(),
    "He was an idiot.",
    [
        new ChatTarget(40, "He must have been if he broke up with you.",
        new Popular(0,-0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
        new ChatTarget(41, "Obviously if he lost you.",
        new Popular(0,0.2,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(40, "cafeteria", "Butterfly", "angry", "normal",
    new Conditions(),
    "What makes you think <i>he</i> broke up with me?!",
    [
        new ChatTarget(41, "My bad"),
        new ChatTarget(4, "Is that not what happened?"),
    ]),

    new Chat(41, "cafeteria", "Butterfly", "none", "normal",
    new Conditions(),
    "Yes. Well I'll let you sit here for today.",
    [
        new ChatTarget(-1, "Thank you.",
        new Popular(0,0.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0),
        new Conditions(0,0,0, ["Class 2"])),
        new ChatTarget(-1, "Great",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),

    new Chat(42, "cafeteria", "Mosquito", "happy", "normal",
    new Conditions(),
    "You decided to sit next to me?",
    [
        new ChatTarget(43, "Is that a problem?"),
        new ChatTarget(43, "You seemed nice.",
        new Popular(0,0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0)),
        new ChatTarget(43, "You're the prettiest girl here.",
        new Popular(0,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0)),
    ]),

    new Chat(43, "cafeteria", "Mosquito", "very_happy", "normal",
    new Conditions(),
    "Oh that's great! Can I tell you something?",
    [
        new ChatTarget(44, "Yes"),
        new ChatTarget(44, "Sure"),
        new ChatTarget(44, "Definitely"),
        new ChatTarget(44, "Of course you can tell me anything",
        new Popular(0,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0)),
        new ChatTarget(44, "Yep"),
        new ChatTarget(44, "Heck yeah"),
        new ChatTarget(44, "Yeah"),
        new ChatTarget(44, "You betcha"),
        new ChatTarget(44, "That'd brighten my day"),
        new ChatTarget(44, "I can honestly and sincerely say I would love you to tell me something."),
        new ChatTarget(44, "Go for it"),
        new ChatTarget(44, "Hit me"),
        new ChatTarget(44, "No . . . Just kidding yes"),
        new ChatTarget(44, "Absolutely"),
        new ChatTarget(45, "No"),
    ]),

    new Chat(44, "cafeteria", "Mosquito", "very_happy", "normal",
    new Conditions(),
    "I have a big crush on you.",
    [
        new ChatTarget(46, "I like you too.",
        new Popular(0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0)),
        new ChatTarget(47, "I don't know if I wanna date you or not.",
        new Popular(0,0,0,0,0,0,0,0,-0.5,0,0,0,0,0,0,0)),
    ]),

    new Chat(45, "cafeteria", "Mosquito", "none", "normal",
    new Conditions(),
    "Huh?",
    [
        new ChatTarget(44, "Just kidding. Yes!"),
    ]),

    new Chat(46, "cafeteria", "Mosquito", "very_happy", "normal",
    new Conditions(),
    "Oh I just adore you. I'm so happy my little {name}-i-poo. My precious {name}-ykins!",
    [
        new ChatTarget(48, "Let's eat together."),
        new ChatTarget(47, "I'm not really open to dating you"),
    ]),

    new Chat(47, "cafeteria", "Mosquito", "angry", "normal",
    new Conditions(),
    "Well I'm gonna marry you. You're my boyfriend and we love each other.",
    [
        new ChatTarget(46, "Continue"),
    ]),

    new Chat(48, "cafeteria", "Mosquito", "very_happy", "normal",
    new Conditions(),
    "I'm so hungry. Can I nibble on your sweet sweet blood?",
    [
        new ChatTarget(49, "Sure",
        new Popular(0,0,0,0,0,0,0,0,0.5,0,0,0,0,0,0,0)),
        new ChatTarget(50, "No"),
    ]),

    new Chat(49, "cafeteria", "Mosquito", "very_happy", "normal",
    new Conditions(),
    "Don't die from blood loss.",
    [
        new ChatTarget(51, "Try to not pass out"),
    ],
    7),

    new Chat(50, "cafeteria", "Mosquito", "sad", "normal",
    new Conditions(),
    "Are you sure?",
    [
        new ChatTarget(49, "Fine. Go ahead.",
        new Popular(0,0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0)),
        new ChatTarget(51, "No. Don't eat me."),
    ]),

    new Chat(51, "cafeteria", "Mosquito", "happy", "normal",
    new Conditions(),
    "Well that was a fun lunch. Let's head back to class.",
    [
        new ChatTarget(-1, "Continue",
        new Popular(),
        new Conditions(0,0,0, ["Class 2"])),
    ]),



    // After School
    // Garden
    new Chat(52, "garden", "Worm", "none", "normal",
    new Conditions(0,0,1, ["After School", "Garden"]),
    "Welcome to the school garden.",
    [
        new ChatTarget(53, "What do you do here?"),
        new ChatTarget(53, "Oh wow. So neat.",
        new Popular(0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(53, "garden", "Worm", "none", "normal",
    new Conditions(),
    "The garden club grows plants here. We plant them, water them, and tend to them daily.",
    [
        new ChatTarget(54, "The garden club?"),
        new ChatTarget(55, "Can I help?",
        new Popular(0,0,0,0,0,0,0,0.4,0,0,0,0,0,0,0,0)),
        new ChatTarget(-1, "Sounds like a lot of work.",
        new Popular(0,0,0,0,0,0,0,-0.2,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(54, "garden", "Worm", "sad", "normal",
    new Conditions(),
    "Well so far I'm the only member.",
    [
        new ChatTarget(55, "Could I join?",
        new Popular(0,0,0,0,0,0,0,0.2,0,0,0,0,0,0,0,0)),
        new ChatTarget(-1, "Haha. Loser",
        new Popular(0,0,0,0,0,0,0,-0.6,0,0,0,0,0,0,0,0)),
        new ChatTarget(56, "How did you get this whole garden then?"),
    ]),

    new Chat(55, "garden", "Worm", "happy", "normal",
    new Conditions(),
    "I'd be thrilled to have your help. See if you can tend to the plants.",
    [
        new ChatTarget(57, "Help out",
        new Popular(0,0,0,0,0,0,0,0.4,0,0,0,0,0,0,0,0)),
    ],
    8),

    new Chat(56, "garden", "Worm", "none", "normal",
    new Conditions(),
    "I had to beg the school to get the money. I set it all up by myself.",
    [
        new ChatTarget(57, "Impressive"),
        new ChatTarget(55, "Well I'd love to help out",
        new Popular(0,0,0,0,0,0,0,0.3,0,0,0,0,0,0,0,0)),
    ]),

    new Chat(57, "garden", "Worm", "happy", "normal",
    new Conditions(),
    "Well that's all the work for today. Feel free to drop by whenever.",
    [
        new ChatTarget(58, "Continue"),
    ]),

    new Chat(58, "garden", "none", "none", "normal",
    new Conditions(),
    "You have unlocked the garden. If you collect any seeds, you can plant them here.",
    [
        new ChatTarget(59, "Contine"),
    ]),

    new Chat(59, "garden", "none", "none", "normal",
    new Conditions(),
    "If you gain politics points, you can spend them to expand or upgrade the garden.",
    [
        new ChatTarget(60, "Contine"),
    ]),

    new Chat(60, "garden", "none", "none", "normal",
    new Conditions(),
    "Once you unlock summoning mana, you can summon any grown plant ally to battle. Plant allies are weak to fire and strong to water. Plant allies gain levels based on your gardening skill, nature blessing, and prestige bonuses.",
    [
        new ChatTarget(-1, "Contine"),
    ]),



    // Roof
    new Chat(61, "night roof", "Firefly", "none", "calm",
    new Conditions(0,0,1, ["After School", "Roof"]),
    "Hi",
    [
        new ChatTarget(62, "Firefly. What're you doing here?"),
    ]),

    new Chat(62, "night roof", "Firefly", "none", "calm",
    new Conditions(),
    "Just enjoying the night.",
    [
        new ChatTarget(63, "Yeah. It's so nice and calm",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,0,0)),
        new ChatTarget(63, "Ok"),
    ]),

    new Chat(63, "night roof", "Firefly", "none", "calm",
    new Conditions(),
    "It's so quiet.",
    [
        new ChatTarget(64, "Night time is always better",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0.2,0,0,0)),
        new ChatTarget(64, "Too quiet"),
    ]),

    new Chat(64, "night roof", "Firefly", "none", "calm",
    new Conditions(),
    "It's so peaceful.",
    [
        new ChatTarget(65, "Lay down",
        new Popular(0,0,0,0,0,0,0,0,0,0,0,0,0.4,0,0,0)),
        new ChatTarget(-1, "Leave"),
    ]),

    new Chat(65, "night roof", "Firefly", "happy", "calm",
    new Conditions(),
    "I'll lay down too.",
    [
        new ChatTarget(66, "Continue"),
    ]),

    new Chat(66, "night roof", "none", "none", "calm",
    new Conditions(),
    "You spent the evening relaxing under the stars.",
    [
        new ChatTarget(-1, "Continue"),
    ]),
];