import { Card } from "./card.js";
import { Hand } from "./hand.js";
import { DECK_COUNT, BLACKJACK, H17 } from "./constants.js";

/**
 * 
 * @param {Hand} dealerHand 
 * @param {Hand} playerHand
 * @param {Number} probability
 */
export function test(dealerHand, playerHand, probability) {
    let avgWin = 0;
    if (playerHand.stopped && dealerHand.stopped) {
        // Evaluate who wins
        avgWin = evaluate(dealerHand, playerHand);
    } else if (playerHand.stopped && !dealerHand.stopped) {
        avgWin = dealerTurn(dealerHand, playerHand);
    }

    return avgWin*probability;
}

/**
 * Play a dealer turn if it is the dealer's turn
 * @param {Hand} dealerHand Hand of the dealer
 * @param {Hand} playerHand Hand of the player
 */
function dealerTurn(dealerHand, playerHand) {
    let avgRes = 0;
    if (dealerHand.score() < 17 || (H17 && dealerHand.soft())) {
        let available = getCards(dealerHand, playerHand);
        for (let i = 0; i < available.length; i++) {
            let newDealer = dealerHand.clone();
            newDealer.addCard(available[i]);
            avgRes += test(newDealer, playerHand, (1/available.length));
        }
    } else {
        dealerHand.stand();
        avgRes = test(dealerHand, playerHand, 1);
    }
    return avgRes;
}

/**
 * Gets the list of cards that can exist within a game
 * @param {Hand} dealerHand Hand of the dealer
 * @param {Hand} playerHand Hand of the player
 * @returns All available cards in an Array<Card>
 */
function getCards(dealerHand, playerHand) {
    let maxCard = 52*DECK_COUNT;

    let owned = getPlayed(dealerHand).concat(getPlayed(playerHand));
    let available = [];
    for (let i = 0; i < maxCard; i++) {
        if (!owned.includes(i)) {
            available.push(new Card(i));
        }
    }
    return available;
}

/**
 * Gets a list of all cards that have already been dealt from a hand and are now out of play.
 * @param {Hand} hand Hand that the cards will be counted for
 * @returns Array<Int> of all cards in a hand.
 */
function getPlayed(hand) {
    let owned = [];
    if (hand.subhands.length == 0) {
        for (let i = 0; i < hand.cards.length; i++) {
            owned.push(hand.cards[i].id);
        }
    } else {
        for (let i = 0; i < hand.subhands.length; i++) {
            let town = getPlayed(hand.subhands[i]);
            owned = owned.concat(town);
        }
    }
    return owned;
}

/**
 * Evaluate the score between 2 hands
 * @param {Hand} dealerHand Hand of the dealer
 * @param {Hand} playerHand Hand of the player
 * @returns Score for that round
 */
function evaluate(dealerHand, playerHand) {
    let result = 0;
    if (playerHand.subhands.length > 0) {
        for (let i = 0; i < playerHand.subhands.length; i++) {
            result += evaluate(dealerHand, playerHand.subhands[i]);
        }
    } else {
        let dscore = dealerHand.score();
        let pscore = playerHand.score();
        let incr = 1;
        if (playerHand.doubled) {
            incr = 2;
        }
        if (pscore > 21) {
            result = -1*incr;
        } else if (dscore > 21) {
            result = 1*incr;
        } else {
            if (pscore > dscore) {
                result = incr;
            } else if (pscore == dscore) {
                if (playerHand.getPrime() && !dealerHand.getPrime()) {
                    result = incr*BLACKJACK;
                } else if (dealerHand.getPrime() && !playerHand.getPrime()) {
                    result = -1*incr
                } else {
                    result = 0;
                }
            } else {
                result = -1*incr;
            }
        }
    }
    return result;
}