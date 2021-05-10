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

