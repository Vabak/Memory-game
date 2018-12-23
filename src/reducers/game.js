import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    deck: [],
    score: 0,
    cardsRemain: 18,
}

const createDeck = (state, action) => {
    const cardTypes = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'J', 'K', 'Q'];
    const cardSuits = ['C', 'D', 'H', 'S'];
    let newDeck = [];
    for (; newDeck.length < 9;) {
        const element = cardTypes[Math.floor(Math.random() * cardTypes.length)] + cardSuits[Math.floor(Math.random() * cardSuits.length)];
        newDeck.push(element);
        newDeck = newDeck.filter((card, idx, arr) => arr.indexOf(card) === idx);
    }
    let deck = [];
    newDeck.map(el => {
        const card = { card: el, isActive: true }
        deck.push(card);
    })
    deck.map(card => deck.push(card));
    const randomize = (array) => {
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

    return updateObject(state, { deck: deck });
}

const resetScore = (state, action) => {
    return updateObject(state, {score: 0, cardsRemain: 18} )
}

const removeCards = (state, action) => {
    let newDeck = [...state.deck];
    console.log(action);
    newDeck[action.firstCard.id].isActive = false;
    newDeck[action.secondCard.id].isActive = false;
    return updateObject(state, { deck: newDeck })
}

const addScore = (state, action) => {
    let remain = state.cardsRemain;
    let newScore = state.score;
    newScore = newScore + (remain * 42);
    remain -= 2; 
    return updateObject( state, {score: newScore, cardsRemain: remain})

}

const subscribeScore = (state, action) => {
    const remain = state.cardsRemain;
    let newScore = state.score;
    newScore = newScore - ((18 - remain) * 42);
    return updateObject( state, {score: newScore})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_DECK: return createDeck(state, action);
        case actionTypes.REMOVE_CARDS: return removeCards(state, action);
        case actionTypes.ADD_SCORE: return addScore(state, action);
        case actionTypes.SUBSCRIBE_SCORE: return subscribeScore(state, action);
        case actionTypes.RESET_SCORE: return resetScore(state, action);
        default: return state;
    }
}

export default reducer;