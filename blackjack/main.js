// Imports
import { Card } from "./card.js";
import { Hand } from "./hand.js";
import { test } from "./tester.js";

/**
 * Start program called on page load
 */
function start() {
    console.log("Starting");

    let dealerHand = new Hand();
    // dealerHand.addCard(new Card(0));
    // dealerHand.addCard(new Card(1));
    // dealerHand.addCard(new Card(3));
    let playerHand = new Hand();
    // playerHand.addCard(new Card(Math.floor(52*Math.random())));
    playerHand.stand();
    // console.log(dealerHand.cards[0].show(true, true));
    // console.log(dealerHand.cards[1].show(true, true));
    // console.log(dealerHand.cards[2].show(true, true));
    let result = test(dealerHand, playerHand, 1);
    console.log(result);

    console.log("Done with start");
}

// Start
start();