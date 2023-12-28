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
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70));
        }
    },
    {
        "id": 1,
        "name": "Firefly",
        "latin": "Incinaratus Bugicus",
        "description": "Known for its unique fire shooting ability, this bug excels at short range spewing.",
        "img": "player/firefly.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 50, 0.1, 0.3, 40));
        }
    },
    {
        "id": 2,
        "name": "Spyder",
        "latin": "Arachnid Webicus",
        "description": "A dangerous and territorial bug, it is known for its dangerous web abilities.",
        "img": "player/spider.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 0, 0, 0, 200));
        }
    },
    {
        "id": 3,
        "name": "Strider",
        "latin": "Runicus Bugicus",
        "description": "Do not think this quick bug is afraid of combat. It is known for it's sniper-like long range shot.",
        "img": "player/strider.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70));
        }
    },
    {
        "id": 4,
        "name": "Shotbug",
        "latin": "Moronicus Beetulus",
        "description": "A tank-like beetle, this bug excels at shooting a wide spray of deadly shots and can live through anything.",
        "img": "player/block.svg",
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 10; i++) {
                entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70));
            }
        }
    },
    {
        "id": 5,
        "name": "Ladybug",
        "latin": "Madupnamius Coccinellidae",
        "description": "Seemingly friendly, this bug feasts on others to survive.",
        "img": "player/ladybug.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70));
        }
    },
    {
        "id": 6,
        "name": "Derp Bug",
        "latin": "Rapidus Bugicus",
        "description": "Native to the skin habitat, this bug's natural defense mechanism is a machine gun.",
        "img": "player/shell.svg",
        shoot: function(item, xt, yt, size, fraction) {
            entityList.push(new Bullet(item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70));
        }
    },
    {
        "id": 7,
        "name": "Stinkbug",
        "latin": "Berticus Odorius",
        "description": "This bug smells so bad, it can kill. It constantly spews odor to bugs nearby and eliminates them.",
        "img": "player/wide.svg",
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 10; i++) {
                entityList.push(new Bullet(item.x + size*fraction/2, this.y + size*fraction/2, xt - item.x, yt - item.y, 50, 0.1, 1, 40));
            }
        }
    },
];