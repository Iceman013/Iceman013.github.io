import { Enemy } from "../enemy.js";
import { Bullet } from "../bullet.js";

const MAXSPEED = 10;

export class Bee extends Enemy {
    constructor(player) {
        super(player);
        this.damage = 2;
        this.baseSpeed = 2;
        this.speed = this.baseSpeed;

        this.shooting = false;
        this.cooldownTime = 20;
        this.targetDirection = 0;

        this.size = 100;
        this.fraction = 0.7;
        this.maxhealth = 100;
        this.img = "bee.svg";
        this.createElements();
    }

    shoot() {
        if (this.cooldown >= this.cooldownTime) {
            this.cooldown = 0;
            new Bullet("enemyBullet", this.x + this.size*this.fraction/2, this.y + this.size*this.fraction/2, -1*Math.cos(this.targetDirection), -1*Math.sin(this.targetDirection), 40, 0.01, 0.1, 70, 10, 5, [], "thorn.svg");
        }
    }
    aim() {
        this.targetDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
        if (this.x > this.player.x) {
            this.targetDirection += Math.PI;
        }
    }
    move() {
        this.vx += Math.cos(this.targetDirection);
        this.vy += Math.sin(this.targetDirection);

        if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
            let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
            this.vx *= dirp;
            this.vy *= dirp;
        }
    }

    tick() {
        let distance = Math.sqrt((this.x - this.player.x)*(this.x - this.player.x) + (this.y - this.player.y)*(this.y - this.player.y));
        if (distance <= 300) {
            // Run away
            this.shooting = false;
            this.aim();
            this.targetDirection += Math.PI;
            let angle = Math.atan(this.vx/this.vy);
            if (this.vy < 0) {
                angle = Math.PI + angle;
            }
            if (this.shooting) {
                angle = -1*this.targetDirection + Math.PI/2;
            }
            this.shoot();
            this.move();
        } else if (distance <= 500) {
            // Aim
            this.shooting = true;
            this.aim();
            this.targetDirection += Math.PI;
            let angle = Math.atan(this.vx/this.vy);
            if (this.vy < 0) {
                angle = Math.PI + angle;
            }
            if (this.shooting) {
                angle = -1*this.targetDirection + Math.PI/2;
            }
            this.shoot();
        } else {
            // Run towards
            this.shooting = false;
            this.aim();
            this.move();
        }

        this.x += this.speed*this.vx;
        this.y += this.speed*this.vy;

        this.vx *= 0.9;
        this.vy *= 0.9;

        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        if (this.shooting) {
            angle = -1*this.targetDirection + Math.PI/2;
        }
        this.turn(angle);
    }
}