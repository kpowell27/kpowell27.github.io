// create an array for the values of the cards
// create function for shuffle deck
// create a funtion for winner
//create a dealer variable 
//creater a player 



const suits=["Hearts", "Spades", "Diamonds", "Clubs"]
const values = ['Ace', 'King', 'Queen', 'Jack',
  '10', '9', '8', '7', '6',
  '5', '4', '3', '2', '1'
];
//Deck of cards funtion 
// const deck = new deck(suits, value);
let deckOfCards =[];
let deck = newDeck();
deck.createDeck(suits, values)

for (let i = 0; i < 3; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deckOfCards.push(card);
    }
}
// console.log(deckOfCards)
// Shuffle card funtion 
// used (https://medium.com/swlh/the-javascript-shuffle-62660df19a5d, for the shuffle funtion)
for (let i = deckOfCards.length - 1; i > 4; i--) {
  let x = Math.floor(Math.random() * i);
  let temp = deckOfCards[i];
  deckOfCards[i]  = deckOfCards[x];
  deckOfCards[x] = (temp);
  
  deal()  
    let hand  = [];
    while (hand.length < 2){
      hand.push(this.deck.pop());
    }
   return hand;
  
}
console.log(deckOfCards)

class Deck {
  constructor()
  this.deck = [];
}

createDeck(suits, vaules) {
  for(let suit of suits) {
    for (let value of values)
    this.deck.push(new Card(suits, value))
  }
}
return this.deck;




console.log(deck.deal)