"use strict";
let cards = ["as","ac","ad","ah","2s","2c","2d","2h","3s","3c","3d","3h","4s","4c","4d","4h","5s","5c","5d","5h","6s","6c","6d","6h","7s","7c","7d","7h","8s","8c","8d","8h","9s","9c","9d","9h","ts","tc","td","th","js","jc","jd","jh","qs","qc","qd","qh","ks","kc","kd","kh","xs","xd"]; // S = Spades C = Clubs H = Hearts D = Diamonds T = Ten "xs" = Black Joker "xd" = Red Joker

        const suits = {
    Spades: 's',
    Clubs: 'c',
    Diamonds: 'd',
    Hearts: 'h'
    }
    const specialCards = {
        Ace: 'a',
        Jack: 'j',
        Queen: 'q',
        King: 'k',
        Ten: 't',
        Joker: 'x'
    }
export default class DeckOfCards{
    constructor() {

    }

    shuffle() {
        cards = ["as","ac","ad","ah","2s","2c","2d","2h","3s","3c","3d","3h","4s","4c","4d","4h","5s","5c","5d","5h","6s","6c","6d","6h","7s","7c","7d","7h","8s","8c","8d","8h","9s","9c","9d","9h","js","jc","jd","jh","qs","qc","qd","qh","ks","kc","kd","kh","xs","xd"];
    }

    drawCard() {
        let card = Math.round(Math.random()*cards.length);
        let cardName = cards[card];
        cards.splice(card, 1);
        return cardName;
    }

    getSuit(card) {
        let cardSuit;
        if(card[0] === specialCards.Joker) {
            if(card[1]==suits.Spades) cardSuit = "Black";
            else cardSuit = "Red";
        } else {
            if (card[1] == suits.Spades) cardSuit = "Spades";
            else if (card[1] == suits.Clubs) cardSuit = "Clubs";
            else if (card[1] == suits.Diamonds) cardSuit = "Diamonds";
            else if (card[1] == suits.Hearts) cardSuit = "Hearts";
            else cardSuit = "Invalid";

        }
        return cardSuit;
    }

    getCardType(card) {
        let cardType;
        if(card[0] == specialCards.Ace) cardType = "1";
        else if(card[0] == specialCards.Jack) cardType = "11";
        else if(card[0] == specialCards.Queen) cardType = "12";
        else if(card[0] == specialCards.King) cardType = "13";
        else if(card[0] == specialCards.Joker) cardType = "14";
        else if(card[0] == specialCards.Ten) cardType = "10";
        else cardType = card[0];
        return cardType;
    }
    debug() {
        return cards;
    }
}