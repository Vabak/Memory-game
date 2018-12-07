import React, { Component } from 'react';
import PageWrapper from '../../wrappers/PageWrapper/PageWrapper';
import GameLayout from '../GameLayout/GameLayout';

class Game extends Component {
    state = { 
        cards: null,
    }
    componentWillMount() {
        const cardTypes = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'J', 'K', 'Q'];
        const cardSuits = ['C', 'D', 'H', 'S'];
        let cards = [];
        for (; cards.length < 9;) {
            const element = cardTypes[Math.floor(Math.random()*cardTypes.length)] + cardSuits[Math.floor(Math.random()*cardSuits.length)];
            cards.push(element);
            cards = cards.filter((v, i, a) => a.indexOf(v) === i);
        }
        console.log(cards);
        cards.map(card => cards.push(card));
        console.log(cards);

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
        randomize(cards);
        this.setState({cards: cards})
    }
    render() { 
       
        return (
            <PageWrapper>
                <GameLayout cards={this.state.cards} />
            </PageWrapper>
        );
    }
}
 
export default Game;