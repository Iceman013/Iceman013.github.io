import { Card } from "./card.js";

export class Hand {
    constructor() {
        this.cards = [];
        this.stopped = false;
        this.doubled = false;
        this.splittable = false;
        this.subhands = [];
    }

    /**
     * 
     * @param {Card} card Adds a card to the hand of the player.
     */
    addCard(card) {
        this.cards.push(card);
        if (this.cards.length == 2) {
            if (Math.min(this.cards[0].number, 9) == Math.min(this.cards[1].number, 9)) {
                this.splittable = true;
            }
        } else {
            this.splittable = false;
        }
    }

    /**
     * Makes the stand move which prevents any more play on this hand.
     */
    stand() {
        this.stopped = true;
        this.splittable = false;
    }

    /**
     * Makes the double move which increases the bet and prevents moves afterwards.
     */
    double() {
        this.doubled = true;
        this.stand();
    }

    split() {
        if (this.splittable) {
            let nha = new Hand();
            nha.addCard(this.cards[0]);
            let nhb = new Hand();
            nhb.addCard(this.cards[1]);

            this.subhands.push(nha);
            this.subhands.push(nhb);
        }
    }

    check() {
        if (this.subhands.length > 0) {
            let stopable = true;
            for (let i = 0; i < this.subhands.length && stopable; i++) {
                this.subhands[i].check();
                if (!this.subhands[i].stopped) {
                    stopable = false;
                }
            }
            this.stopped = stopable;
        }
    }

    score() {
        let total = 0;
        let aces = 0;
        for (let i = 0; i < this.cards.length; i++) {
            let card = this.cards[i];
            if (card.number > 8) {
                total += 10;
            } else if (card.number > 0) {
                total += card.number + 1;
            } else {
                total += 1;
                aces++;
            }
        }
        if (aces > 0 && total <= 11) {
            total += 10;
        }
        return total;
    }

    getPrime() {
        let output = false;
        if (this.cards.length == 2) {
            if (this.cards[0].number == 0 && this.cards[1].number > 8) {
                output = true;
            }
            if (this.cards[0].number > 8 && this.cards[1].number == 0) {
                output = true;
            }
        }
        return output;
    }

    soft() {
        let total = 0;
        let aces = 0;
        let isSoft = false;
        for (let i = 0; i < this.cards.length; i++) {
            let card = this.cards[i];
            if (card.number > 8) {
                total += 10;
            } else if (card.number > 0) {
                total += card.number + 1;
            } else {
                total += 1;
                aces++;
            }
        }
        if (aces > 0 && total <= 11) {
            total += 10;
            isSoft = true;
        }
        
        return (total == 17 && isSoft);
    }

    clone() {
        let baby = new Hand();
        baby.cards = [];
        for (let i = 0; i < this.cards.length; i++) {
            baby.cards.push(new Card(this.cards[i].id));
        }
        baby.stopped = this.stopped;
        baby.doubled = this.doubled;
        baby.splittable = this.splittable;
        for (let i = 0; i < this.subhands.length; i++) {
            baby.subhands.push(clone(this.subhands[i]));
        }

        return baby;
    }
}