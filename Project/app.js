// create an array for the values of the cards
// create function for shuffle deck
// create a funtion for winner
//create a dealer variable 
//creater a player 
// App has game 
// Game has deck, player, dealer
// deck has card 
//dealer is player 
// player gets two cards
// dealer gets two cards 
// player has the option to take another card or stay without reaching over 21 
// if player card is over 21 - player loses
// if players card is under 21 they have the option to stay or hit 
// dealer shows second card that is hidden 
// dealer must keep pulling a card until reaches 17
// dealer loses if card excessed over 21 

// DOM MANIPULATION
// function evaluateUserInput(){
//   let userInputFirstName = document.getElementById("first_name").value;
//   let userInputLastName = document.getElementById("last_name").value;
//   let outputDisplay = "Your name is: " + userInputFirstName + " " + userInputLastName;
//   document.getElementById("output").innerHTML = outputDisplay;
//   return false;
// }

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
      }else{
         return this.rank;
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

  // add card to hand from deck or dealer)
  hit(incomingCard) {
      this.cards.push(incomingCard);
  }

  getHandTotal() {
    let total = 0;
    this.cards.forEach(currentCard=> {
        let currentCardValue = currentCard.getCardValue();
        total += currentCardValue
    })
    return total;
  }
}

class BlackJackGame {
  constructor() {
    
      this.player = new BlackJackPlayer('Player 1');
      this.dealer = new BlackJackPlayer('Kayla');
  }

  play() {
      const deck = new Deck();
      deck.shuffle();
      let dealerCard1 = deck.removeAndFetchTopMostCard();
      let dealerCard2 = deck.removeAndFetchTopMostCard();
      this.dealer.hit(dealerCard1);
      this.dealer.hit(dealerCard2);

      let playerCard1 = deck.removeAndFetchTopMostCard();
      let playerCard2 = deck.removeAndFetchTopMostCard();
      this.player.hit(playerCard1);
      this.player.hit(playerCard2);

      console.log('Dealers hand' );
      this.dealer.viewHand();
      
      console.log('Players hand' );
      this.player.viewHand();

      let dealerHandTotal = this.dealer.getHandTotal();
      let playerHandTotal = this.player.getHandTotal();
      let isPush = dealerHandTotal == playerHandTotal;

      if(isPush){
        console.log('push')
      }
    
      else if(dealerHandTotal > 21) {
        console.log("dealer bust");
      }

      else if(playerHandTotal > 21) {
        console.log("Player bust");
      }

      else if(dealerHandTotal == 21) {
        console.log("dealer wins");
      } 

      else if(playerHandTotal == 21) {
          console.log("player wins")
      }
      


    // Players decision 
      while (this.player.getHandTotal() <21){
        let hitOrStand = prompt('Would you like to hit or stand');
        if (hitOrStand == 'hit') {
          let topCard = deck.removeAndFetchTopMostCard();
          this.player.hit(topCard);
        } 
        else {
          break;
        }
      }


      //Dealers decision
      while (this.dealer.getHandTotal() <17){
        let topCard = deck.removeAndFetchTopMostCard();
          this.player.hit(topCard);
      }
      console.log("After decision");
      this.player.viewHand();
      this.dealer.viewHand();
      

      dealerHandTotal = this.dealer.getHandTotal();
      playerHandTotal = this.player.getHandTotal();
      isPush = dealerHandTotal == playerHandTotal;
      
      if(isPush){
        console.log('push');
      }
    
      else if(dealerHandTotal > 21) {
        console.log("dealer bust");
      }

      else if(playerHandTotal > 21) {
        console.log("Player bust");
      }

      else if(dealerHandTotal == 21) {
        console.log("dealer wins");
      } 

      else if(playerHandTotal == 21) {
          console.log("player wins")
      }
      else{
        console.log("ERROR refresh page and start again")
      }


  }
}
  // given
  let blackJackGame = new BlackJackGame();
  
  // when    
  blackJackGame.play();
  
  