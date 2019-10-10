console.log("up and running");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "queen";
var cardFour = "king";

const cards = ['queen', 'king', 'queen', 'king'];
const cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay[0]===cardsInPlay[1]) {
        console.log("You found a match!");
    } else {
        console.log("Sorry, try again.");
    }
}

function flipCard(cardId) {
    console.log("User flipped "+ cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

flipCard(0);
flipCard(1);
