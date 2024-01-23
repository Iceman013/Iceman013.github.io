import { Enemy } from "../enemy.js";

const MAXSPEED = 4;
const TURNSPEED = 0.05;

export class Worm extends Enemy {
    constructor(player, length = 10, parent = null) {
        super(player);
        this.damage = 3;
        this.baseSpeed = 5;
        this.speed = this.baseSpeed;
        
        this.parent = parent;
        if (length - 1 > 0) {
            new Worm(this.player, length - 1, this);
        }

        if (this.parent != null) {
            this.x = this.parent.x;
            this.y = this.parent.y;
        }
        this.formerXs = [];
        this.formerYs = [];
        this.behind = 2;

        this.targetDirection = 0;

        this.size = 50;
        this.fraction = 0.8;
        this.maxhealth = 100;
        this.img = "wormBody.svg";
        this.createElements();
    }

    tick() {
        this.formerXs.push(this.x);
        this.formerYs.push(this.y);
        if (this.parent != null && this.parent.health <= 0) {
            this.parent = null;
        }
        if (this.parent != null) {
            if (this.parent.formerXs.length >= this.behind && this.parent.formerYs.length >= this.behind) {
                this.x = this.parent.formerXs[this.parent.formerXs.length - this.behind];
                this.y = this.parent.formerYs[this.parent.formerYs.length - this.behind];
                this.vx = this.parent.formerXs[this.parent.formerXs.length - this.behind + 1] - this.x;
                this.vy = this.parent.formerYs[this.parent.formerYs.length - this.behind + 1] - this.y;
            }
        } else {
            let playerDirection = Math.atan((this.y - this.player.y)/(this.x - this.player.x));
            if (this.x - this.player.x < 0) {
                playerDirection += Math.PI;
            }
            let currentDirection = this.targetDirection;
            playerDirection = playerDirection%(2*Math.PI);
            currentDirection = currentDirection%(2*Math.PI);
            if (currentDirection - playerDirection > Math.PI) {
                playerDirection += 2*Math.PI;
            } else if (playerDirection - currentDirection > Math.PI) {
                currentDirection += 2*Math.PI;
            }
            this.targetDirection = (1 - TURNSPEED)*currentDirection + TURNSPEED*playerDirection;
            this.targetDirection += 0.1*(Math.random() - 0.5)*2*Math.PI;
            this.vx += -1*Math.cos(this.targetDirection);
            this.vy += -1*Math.sin(this.targetDirection);
            if (this.vx*this.vx + this.vy*this.vy >= MAXSPEED*MAXSPEED) {
                let dirp = MAXSPEED*MAXSPEED/(this.vx*this.vx + this.vy*this.vy);
                this.vx *= dirp;
                this.vy *= dirp;
            }
            this.x += this.speed*this.vx;
            this.y += this.speed*this.vy;
        }
        let angle = Math.atan(this.vx/this.vy);
        if (this.vy < 0) {
            angle = Math.PI + angle;
        }
        this.turn(angle);
    }
}