import { entityList } from "./entityList.js";
import { Bullet } from "./bullet.js";

export const CHARACTERLIST = [
    {
        "id": 0,
        "name": "Bug Boy",
        "latin": "Defaulitium Bugicus",
        "description": "Certainly a generic bug, it should not be underestimated for its versatility and long range shots.",
        "img": "player/hex.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 80, "goop.svg"));
        },
        "feral": false,
        "cooldown": 5,
        "point": true,
    },
    {
        "id": 1,
        "name": "Firefly",
        "latin": "Incinaratus Bugicus",
        "description": "Known for its unique fire shooting ability, this bug excels at short range spewing.",
        "img": "player/firefly.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 50, 0.1, 0.3, 40, 10, 40, "fire.svg"));
        },
        "feral": true,
        "cooldown": 4,
        "point": true,
    },
    {
        "id": 2,
        "name": "Spyder",
        "latin": "Arachnid Webicus",
        "description": "A dangerous and territorial bug, it is known for its dangerous web abilities.",
        "img": "player/spider.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 0, 0, 0, 1000, 50, 100, "web.svg"));
        },
        "feral": true,
        "cooldown": 15,
        "point": false,
    },
    {
        "id": 3,
        "name": "Strider",
        "latin": "Runicus Bugicus",
        "description": "Do not think this quick bug is afraid of combat. It is known for it's sniper-like long range shot.",
        "img": "player/strider.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 500, "goop.svg"));
        },
        "feral": false,
        "cooldown": 40,
        "point": true,
    },
    {
        "id": 4,
        "name": "Shotbug",
        "latin": "Moronicus Beetulus",
        "description": "A tank-like beetle, this bug excels at shooting a wide spray of deadly shots and can live through anything.",
        "img": "player/block.svg",
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 10; i++) {
                entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 20, "goop.svg"));
            }
        },
        "feral": false,
        "cooldown": 20,
        "point": true,
    },
    {
        "id": 5,
        "name": "Ladybug",
        "latin": "Madupnamius Coccinellidae",
        "description": "Seemingly friendly, this bug feasts on others to survive.",
        "img": "player/ladybug.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 50, "goop.svg"));
        },
        "feral": false,
        "cooldown": 10,
        "point": true,
    },
    {
        "id": 6,
        "name": "Derp Bug",
        "latin": "Rapidus Bugicus",
        "description": "Native to the skin habitat, this bug's natural defense mechanism is a machine gun.",
        "img": "player/shell.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 40, "goop.svg"));
        },
        "feral": true,
        "cooldown": 4,
        "point": true,
    },
    {
        "id": 7,
        "name": "Stinkbug",
        "latin": "Berticus Odorius",
        "description": "This bug smells so bad, it can kill. It constantly spews odor to bugs nearby and eliminates them.",
        "img": "player/wide.svg",
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 5; i++) {
                entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 50, 0.1, 1, 40, 20, 10, "stink.svg"));
            }
        },
        "feral": true,
        "cooldown": 2,
        "point": false,
    },
];