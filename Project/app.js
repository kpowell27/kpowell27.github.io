// create an array for the values of the cards
// create function for shuffle deck
// create a funtion for winner
//create a dealer variable 
//creater a player 
// App has game 
// Game has deck, player, dealer
// deck has card 
//dealer is player 


class Card {
  constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit.toLowerCase();
  }


  // all card's secondary value is equal to their primary value, except the `ace` card
  getCardValue() {
      if(this.rank=="king") {
          return 10;
      } else if(this.rank == "queen") {
          return 10;
      } else if(this.rank == "jack") {
          return 10;
      } else if(this.rank == "ace") {
          return 11;
      }
  }
}


class Deck {
    
  // upon construction, create 52 cards: 13 ranks x 4 suits
  constructor() {        
      const suits = ["hearts", "diamonds", "spades", "clubs"]
      const ranks =  ["ace",2,3,4,5,6,7,8,9,10,"jack","queen","king"]
      this.cards = []
      suits.forEach(suit => {
          ranks.forEach(rank => {
              let newCardObject = new Card(rank, suit);
              this.cards.push(newCardObject);
          });
      });
  }

  // simulates getting a card from the deck
  removeAndFetchTopMostCard() {
      let topMostCard = this.cards.pop();
      return topMostCard;
  }
  
  // simulates shuffling a deck
  shuffle() {
      for (let i = this.cards.length - 1; i > 1; i--) {
          let x = Math.floor(Math.random() * i);
          let temp = this.cards[i];
          this.cards[i]  = this.cards[x];
          this.cards[x] = (temp);
        }
  }

}


class BlackJackPlayer {
  // a blackjack player should receive a name when created
  // a black jack player's hand is empty until receiving cards from a dealer
  constructor(name) {
      this.name = name;
      this.cards = [];
  }

  // prints the cards of the current BlackJackPlayer
  viewHand() {
      console.log(this.cards)
      console.log(this.getHandTotal());
  }

  // add card to hand (presumably from deck or dealer)
  hit(incomingCard) {
      this.cards.push(incomingCard);
  }


}