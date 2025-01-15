// Constants
const NAMES = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
const LETTERS = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

const SUITS = ["hearts","diamonds","clubs","spades"];
const SUITSYMBOLS = ["♥","♦","♣","♠"];

/**
 * Card class
 */
export class Card {
    /**
     * Creates a card from a standard deck.
     * @param {Number} id The id of the card added
     */
    constructor(id) {
        this.id = id;
        let floorNum = this.id % 52;
        this.number = floorNum % 13;
        this.suit = floorNum % 4;
    }

    /**
     * A method of getting which card this is.
     * @param {boolean} long If the full card name is to be returned
     * @param {boolean} capitalized If the fully capital version of the card is to be returned if long
     * @returns the string name of the card.
     */
    show(long, capitalized) {
        let output = "";
        if (!long) {
            output = LETTERS[this.number] + SUITSYMBOLS[this.suit];
        } else {
            if (capitalized) {
                function capital(input) {
                    return input.charAt(0).toUpperCase() + input.slice(1);
                }
                output = capital(NAMES[this.number]) + " of " + capital(SUITS[this.suit]);
            } else {
                output = NAMES[this.number] + " of " + SUITS[this.suit];
            }
        }
        return output;
    }
}