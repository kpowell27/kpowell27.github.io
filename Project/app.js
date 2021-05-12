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

let deckOfCards =[];
// deckOfCards.createnewDeckOfCards(suits, values);
//Deck of cards funtion 

for (let i = 0; i < 3; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deckOfCards.push(card);
    }
}
// console.log(deckOfCards)

// Shuffle card funtion 
// used (https://medium.com/swlh/the-javascript-shuffle-62660df19a5d, for the shuffle funtion)

for (let i = deckOfCards.length - 1; i > 1; i--) {
  let x = Math.floor(Math.random() * i);
  let temp = deckOfCards[i];
  deckOfCards[i]  = deckOfCards[x];
  deckOfCards[x] = (temp);
}
  
console.log(deckOfCards)
 
// deck 

