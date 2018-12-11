import React, { Component } from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import GameLayout from '../CardLayout/CardLayout';

class Game extends Component {
    state = {
        deck: null,
        isDisabled: false,
        isDeckFlipped: false,
        firstFlipedCard: {
            id: null,
            type: null,
        },
        secondFlipedCard: {
            id: null,
            type: null,
        }
    }
    componentWillMount() {
        const cardTypes = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'J', 'K', 'Q'];
        const cardSuits = ['C', 'D', 'H', 'S'];
        let deck = [];
        for (; deck.length < 9;) {
            const element = cardTypes[Math.floor(Math.random() * cardTypes.length)] + cardSuits[Math.floor(Math.random() * cardSuits.length)];
            deck.push(element);
            deck = deck.filter((v, i, a) => a.indexOf(v) === i);
        }
        deck.map(card => deck.push(card));
        function randomize(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }
        randomize(deck);
        this.setState({ deck: deck })
    }

    cardClickHandler = (id, cardType) => {
        if (this.state.isDisabled) return;
        this.checkFlip(id, cardType);
    }

    checkFlip(id, cardType) {
        if (this.state.firstFlipedCard.id === null) {
            this.setState({ firstFlipedCard: { id: id, type: cardType } });
            return;
        }
        if (id === this.state.firstFlipedCard.id) {
            return;
        }
        this.setState({ secondFlipedCard: { id: id, type: cardType } }, () =>this.checkPair());

    }

    checkPair() {
        console.log(this.state.firstFlipedCard.type, this.state.secondFlipedCard.type);
        if (this.state.firstFlipedCard.type === this.state.secondFlipedCard.type) {
            this.removeCards();
            return;
        }
        setTimeout(() => this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }), 1500)
    }

    removeCards() {
        let newDeck = [...this.state.deck];
        newDeck[this.state.firstFlipedCard.id] = null;
        newDeck[this.state.secondFlipedCard.id] = null;
        this.setState({ deck: newDeck, firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }, () => this.checkWin())
        console.log(newDeck);
    }

    checkWin() {
        const deck = [...this.state.deck]
        let counter = deck.reduce((count, card) => {
            if (card) return count + 1;
            return count;
        }, 0)
        if (counter === 0) console.log('Win');
    }

    render() {

        return (
            <PageWrapper>
                <GameLayout
                    deck={this.state.deck}
                    flipped={this.state.isDeckFlipped}
                    clicked={this.cardClickHandler}
                    firstCard={this.state.firstFlipedCard.id}
                    secondCard={this.state.secondFlipedCard.id} />
            </PageWrapper>
        );
    }
}

export default Game;