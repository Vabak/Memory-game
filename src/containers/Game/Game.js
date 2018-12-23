import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import GameLayout from '../GameLayout/GameLayout';
import Score from '../../components/Score/Score';
import styles from '../../components/Button/Button.module.css'
import * as actions from '../../actions/game';


class Game extends Component {
    state = {
        // deck: null,
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
        // score: 0,
        // cardsRemain: 18,
    }
    componentWillMount() {
        this.props.createDeck();
    }
    componentDidMount() {
        this.addDelay();
    }

    addDelay() {
        this.setState({ isDisabled: true, isDeckFlipped: true })
        setTimeout(() => this.setState({ isDisabled: false, isDeckFlipped: false }), 5000)
    }

    // createDeck () {
    //     const cardTypes = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'J', 'K', 'Q'];
    //     const cardSuits = ['C', 'D', 'H', 'S'];
    //     let newDeck = [];
    //     for (; newDeck.length < 9;) {
    //         const element = cardTypes[Math.floor(Math.random() * cardTypes.length)] + cardSuits[Math.floor(Math.random() * cardSuits.length)];
    //         newDeck.push(element);
    //         newDeck = newDeck.filter((card, idx, arr) => arr.indexOf(card) === idx);
    //     }
    //     let deck = [];
    //     newDeck.map(el => {
    //         const card = {card: el, isActive: true}
    //         deck.push(card);
    //     })
    //     deck.map(card => deck.push(card));
    //     function randomize(array) {
    //         let currentIndex = array.length, temporaryValue, randomIndex;

    //         while (0 !== currentIndex) {

    //             randomIndex = Math.floor(Math.random() * currentIndex);
    //             currentIndex -= 1;

    //             temporaryValue = array[currentIndex];
    //             array[currentIndex] = array[randomIndex];
    //             array[randomIndex] = temporaryValue;
    //         }

    //         return array;
    //     }
    //     randomize(deck);
    //     this.setState({ deck: deck })
    //     }


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
        this.setState({ secondFlipedCard: { id: id, type: cardType } }, () => this.checkPair());

    }

    checkPair() {
        if (this.state.firstFlipedCard.type === this.state.secondFlipedCard.type) {
            this.props.removeCards(this.state.firstFlipedCard, this.state.secondFlipedCard);
            this.props.addScore();
            this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }, () => this.checkWin())
            return;
        }
        setTimeout(() => this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }), 1000)
        this.props.subscribeScore();
    }

    // removeCards() {
    //     let newDeck = [...this.state.deck];
    //     newDeck[this.state.firstFlipedCard.id].isActive = false;
    //     newDeck[this.state.secondFlipedCard.id].isActive = false;
    //     this.setState({ deck: newDeck, firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null }, cardsRemain: this.state.cardsRemain - 2 }, () => this.addScore())
    // }

    // subscribeScore() {
    //     const remain = this.state.cardsRemain;
    //     let newScore = this.state.score;
    //     newScore = newScore - ((18 - remain) * 42);
    //     this.setState({score: newScore});
    //     this.checkWin();
    // }

    // addScore() {
    //     const remain = this.state.cardsRemain;
    //     let newScore = this.state.score;
    //     newScore = newScore + (remain * 42);
    //     this.setState({score: newScore});
    //     this.checkWin();
    // }

    checkWin() {
        if (this.props.cardsRemain === 0) this.props.history.push('/end')
    }

    restartHandler = () => {
        this.props.createDeck();
        this.addDelay();
        this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } });
        this.props.resetScore();
        
    }

    render() {
        return (
            <PageWrapper>
                <Score score={this.props.score} />
                <GameLayout
                    isDisabled={this.state.isDisabled}
                    deck={this.props.deck}
                    flipped={this.state.isDeckFlipped}
                    clicked={this.cardClickHandler}
                    firstCard={this.state.firstFlipedCard.id}
                    secondCard={this.state.secondFlipedCard.id}
                    score={this.props.score} />
                <button className={styles.Button} onClick={this.restartHandler}>Restart</button>
            </PageWrapper>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createDeck: () => dispatch(actions.createDeck()),
        removeCards: (firstCard, secondCard) => dispatch(actions.removeCards(firstCard, secondCard)),
        addScore: () => dispatch(actions.addScore()),
        subscribeScore: () => dispatch(actions.subscribeScore()),
        resetScore: () => dispatch(actions.resetScore()),
    }
}

const mapStateToProps = state => {
    return {
        deck: state.deck,
        score: state.score,
        cardsRemain: state.cardsRemain,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);