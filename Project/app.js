const suits=["Hearts", "Spades", "Diamonds", "Clubs"]
const values = ['Ace', 'King', 'Queen', 'Jack',
  '10', '9', '8', '7', '6',
  '5', '4', '3', '2', '1'
];
//Deck of cards funtion 
let deckOfCards =[];

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deckOfCards.push(card);
    }
}
// console.log(deckOfCards)
// Shuffle card funtion 
// used (https://medium.com/swlh/the-javascript-shuffle-62660df19a5d, for the shuffle funtion)
for (let i = deckOfCards.length - 1; i > 0; i--) {
  let x = Math.floor(Math.random() * i);
  let temp = deckOfCards[i];
  deckOfCards[i] = deckOfCards[x];
  deckOfCards[x] = (temp);
// }
// console.log(deckOfCards)

console.log(deckOfCards.pop());