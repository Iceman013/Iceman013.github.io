import { entityList } from "./entityList.js";
import { getBuff } from "./buffList.js";
import { Bullet } from "./bullet.js";

export const CHARACTERLIST = [
    {
        "id": 0,
        "name": "Bug Boy",
        "latin": "Defaulitium Bugicus",
        "description": "Certainly a generic bug, it should not be underestimated for its versatility and long range shots.",
        "img": "player/hex.svg",
        "speed": 2,
        "maxspeed": 9,
        "slowdown": 0.8,
        shoot: function(item, xt, yt, size, fraction) {
            new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 80, [], "goop.svg", false);
        },
        twoot: function(player, xt, yt) {
            player.aim(xt, yt);
            new Bullet("bullet", player.x + player.size*player.fraction/2, player.y + player.size*player.fraction/2, xt - player.x, yt - player.y, 
            40, 0.03, 0.1, 70, 10, 0, [getBuff("Stunned")], "zap.svg", false);
        },
        "feral": false,
        "cooldown": 5,
        "twodown": 40,
        "point": true,
    },
    {
        "id": 1,
        "name": "Firefly",
        "latin": "Incinaratus Bugicus",
        "description": "Known for its unique fire shooting ability, this bug excels at short range spewing.",
        "img": "player/firefly.svg",
        "speed": 3,
        "maxspeed": 9,
        "slowdown": 0.6,
        shoot: function(item, xt, yt, size, fraction) {
            new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 50, 0.1, 0.3, 40, 10, 40, [getBuff("Burn")], "fire.svg", false);
        },
        twoot: function(player, xt, yt) {
            player.aim(xt, yt);
            new Bullet("bullet", player.x + player.size*player.fraction/2, player.y + player.size*player.fraction/2, xt - player.x, yt - player.y, 
            20, 0.07, 0.1, 150, 80, 0, [getBuff("Blaze")], "blaze.svg", true);
        },
        "feral": true,
        "cooldown": 4,
        "twodown": 80,
        "point": true,
    },
    {
        "id": 2,
        "name": "Spyder",
        "latin": "Arachnid Webicus",
        "description": "A dangerous and territorial bug, it is known for its dangerous web abilities.",
        "img": "player/spider.svg",
        "speed": 2,
        "maxspeed": 7,
        "slowdown": 0.6,
        shoot: function(item, xt, yt, size, fraction) {
            new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 0, 0, 0, 1000, 50, 100, [getBuff("Webbed")], "web.svg", false);
        },
        twoot: function(player, xt, yt) {
            player.aim(xt, yt);
            new Bullet("bullet", player.x + player.size*player.fraction/2, player.y + player.size*player.fraction/2, xt - player.x, yt - player.y, 
            40, 0.04, 0.1, 70, 15, 70, [getBuff("Venom")], "goop.svg", false);
        },
        "feral": true,
        "cooldown": 15,
        "twodown": 40,
        "point": false,
    },
    {
        "id": 3,
        "name": "Strider",
        "latin": "Runicus Bugicus",
        "description": "Do not think this quick bug is afraid of combat. It is known for it's sniper-like long range shot.",
        "img": "player/strider.svg",
        "speed": 3,
        "maxspeed": 9,
        "slowdown": 0.6,
        shoot: function(item, xt, yt, size, fraction) {
            new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 20, 500, [], "goop.svg", true);
        },
        twoot: function(player, xt, yt) {
            player.x = xt;
            player.y = yt;
        },
        "feral": false,
        "cooldown": 40,
        "twodown": 40,
        "point": true,
    },
    {
        "id": 4,
        "name": "Shotbug",
        "latin": "Moronicus Beetulus",
        "description": "A tank-like beetle, this bug excels at shooting a wide spray of deadly shots and can live through anything.",
        "img": "player/block.svg",
        "speed": 2,
        "maxspeed": 7,
        "slowdown": 0.6,
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 10; i++) {
                new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.3, 70, 10, 20, [], "goop.svg", false);
            }
        },
        twoot: function(player, xt, yt) {
            
        },
        "feral": false,
        "cooldown": 40,
        "twodown": 40,
        "point": true,
    },
    {
        "id": 5,
        "name": "Ladybug",
        "latin": "Madupnamius Coccinellidae",
        "description": "Seemingly friendly, this bug feasts on others to survive.",
        "img": "player/ladybug.svg",
        "speed": 2,
        "maxspeed": 7,
        "slowdown": 0.6,
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 3; i++) {
                new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.2, 40, 10, 20, [getBuff("Bleed")], "goop.svg", false);
            }
        },
        twoot: function(player, xt, yt) {
            
        },
        "feral": false,
        "cooldown": 20,
        "twodown": 40,
        "point": true,
    },
    {
        "id": 6,
        "name": "Derp Bug",
        "latin": "Rapidus Bugicus",
        "description": "Native to the skin habitat, this bug's natural defense mechanism is a machine gun.",
        "img": "player/shell.svg",
        "speed": 2,
        "maxspeed": 7,
        "slowdown": 0.7,
        shoot: function(item, xt, yt, size, fraction) {
            new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 40, 0.03, 0.1, 70, 10, 40, [getBuff("Slow")], "goop.svg", false);
        },
        twoot: function(player, xt, yt) {
            
        },
        "feral": true,
        "cooldown": 4,
        "twodown": 40,
        "point": true,
    },
    {
        "id": 7,
        "name": "Stinkbug",
        "latin": "Berticus Odorius",
        "description": "This bug smells so bad, it can kill. It constantly spews odor to bugs nearby and eliminates them.",
        "img": "player/wide.svg",
        "speed": 3,
        "maxspeed": 7,
        "slowdown": 0.5,
        shoot: function(item, xt, yt, size, fraction) {
            for (let i = 0; i < 5; i++) {
                new Bullet("bullet", item.x + size*fraction/2, item.y + size*fraction/2, xt - item.x, yt - item.y, 50, 0.1, 1, 40, 20, 10, [getBuff("Stink")], "stink.svg", false);
            }
        },
        twoot: function(player, xt, yt) {
            for (let i = 0; i < 20; i++) {
                new Bullet("bullet", player.x + player.size*player.fraction/2, player.y + player.size*player.fraction/2, -1*(player.vx), -1*(player.vy), 
                80, 0.1, 0.5, 40, 20, 10, 
                [getBuff("Stink")], "stink.svg", false);
            }
            player.dashing = 0;
            player.vx *= 3;
            player.vy *= 3;
        },
        "feral": true,
        "cooldown": 2,
        "twodown": 20,
        "point": false,
    },
];