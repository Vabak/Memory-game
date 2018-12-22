import * as actionTypes from './actionTypes';

export const createDeck = () => {
    return {
        type: actionTypes.CREATE_DECK
    }
}

export const removeCards = () => {
    return {
        type: actionTypes.REMOVE_CARDS
    }
}

export const addScore = () => {
    return {
        type: actionTypes.ADD_SCORE
    }
}

export const subscribeScore = () => {
    return {
        type: actionTypes.SUBSCRIBE_SCORE
    }
}