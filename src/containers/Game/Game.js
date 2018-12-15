import React, { Component } from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import GameLayout from '../GameLayout/GameLayout';
import Score from '../../components/Score/Score';

class Game extends Component {
    state = {
        deck: null,
        isDisabled: true,
        isDeckFlipped: true,
        firstFlipedCard: {
            id: null,
            type: null,
        },
        secondFlipedCard: {
            id: null,
            type: null,
        },
        score: 0,
        cardsRemain: 18,
    }
    componentWillMount() {
        const cardTypes = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'J', 'K', 'Q'];
        const cardSuits = ['C', 'D', 'H', 'S'];
        let deck = [];
        for (; deck.length < 9;) {
            const element = {card: cardTypes[Math.floor(Math.random() * cardTypes.length)] + cardSuits[Math.floor(Math.random() * cardSuits.length)], isActive: true};
            deck.push(element);
            deck = deck.filter((v, i, a) => a.indexOf(v) === i);
        }
        deck.map(card => deck.push(card));
        function randomize(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;

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
    componentDidMount() {
        setTimeout(() => this.setState({isDisabled: false, isDeckFlipped: false}), 5000)
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
        if (this.state.firstFlipedCard.type === this.state.secondFlipedCard.type) {
            this.removeCards();
            return;
        }
        this.subscribeScore();
        setTimeout(() => this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }), 1000)
    }

    removeCards() {
        let newDeck = [...this.state.deck];
        newDeck[this.state.firstFlipedCard.id].isActive = false;
        newDeck[this.state.secondFlipedCard.id].isActive = false;
        this.setState({ deck: newDeck, firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null }, cardsRemain: this.state.cardsRemain - 2 }, () => this.addScore())
    }

    subscribeScore() {
        const remain = this.state.cardsRemain;
        let newScore = this.state.score;
        newScore = newScore - (remain * 42);
        this.setState({score: newScore});
        this.checkWin();
    }

    addScore() {
        const remain = this.state.cardsRemain;
        let newScore = this.state.score;
        newScore = newScore + (remain * 42);
        this.setState({score: newScore});
        this.checkWin();
    }

    checkWin() {
        if (this.state.cardsRemain === 0) this.props.history.push('/end')
    }

    render() {

        return (
            <PageWrapper>
                <Score score={this.state.score} />
                <GameLayout
                    isDisabled={this.state.isDisabled}
                    deck={this.state.deck}
                    flipped={this.state.isDeckFlipped}
                    clicked={this.cardClickHandler}
                    firstCard={this.state.firstFlipedCard.id}
                    secondCard={this.state.secondFlipedCard.id}
                    score={this.state.score} />
            </PageWrapper>
        );
    }
}

export default Game;