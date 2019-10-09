console.log("up and running");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "queen";
var cardFour = "king";

const cards = ['queen', 'king', 'queen', 'king'];
const cardsInPlay = [];
cardsInPlay.push(cardOne);
console.log("User flipped "+ cardsInPlay[0]);
cardsInPlay.push(cardTwo);
console.log("User flipped "+ cardsInPlay[1]);

if (cardsInPlay.length === 2) {
    if (cardsInPlay[0]===cardsInPlay[1]) {
        alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}