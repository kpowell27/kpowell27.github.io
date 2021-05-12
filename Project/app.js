// create an array for the values of the cards
// create function for shuffle deck
// create a funtion for winner
//create a dealer variable 
//creater a player 


class Card {
  constructor(rank, suit) {
      this.rank = rank;
      this.suit = suit.toLowerCase();
  }

  isCardRed() {
      return ["hearts", "diamonds"].includes(this.suit.toLowerCase())
  }

  isCardAce() {
      return this.rank == "ace";
  }

  // all card's secondary value is equal to their primary value, except the `ace` card
  getPrimaryCardValue() {
      if(this.rank=="king") {
          return 10;
      } else if(this.rank == "queen") {
          return 10;
      } else if(this.rank == "jack") {
          return 10;
      } else if(this.isCardAce()) {
          return 1;
      }
  }

  // all card's secondary value is equal to their primary value, except the `ace` card
  getSecondaryCardValue() {
      if(!this.isCardAce()) {
          return this.getPrimaryCardValue();
      } else {
          return 11;   
      }
  }
}

