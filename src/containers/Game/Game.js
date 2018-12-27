import React, { Component } from 'react';
import { connect } from 'react-redux';

import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import GameLayout from '../GameLayout/GameLayout';
import Score from '../../components/Score/Score';
import styles from '../../components/Button/Button.module.css'
import * as actions from '../../actions/game';


class Game extends Component {
    state = {
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

            setTimeout(() => {
                this.props.removeCards(this.state.firstFlipedCard, this.state.secondFlipedCard);
                this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }, () => this.checkWin());
            }, 300)           
            this.props.addScore();
            return;
        }
        setTimeout(() => this.setState({ firstFlipedCard: { id: null, type: null }, secondFlipedCard: { id: null, type: null } }), 1000)
        this.props.subscribeScore();
    }

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