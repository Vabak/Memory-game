import React from 'react';

import Card from '../../components/Card/Card';
import styles from './GameLayout.module.css';

const GameLayout = (props) => {
    const cardLayout = props.deck.map((card, index) => (
        <Card 
            key={index}
            isDisabled={props.isDisabled}
            isActive={card.isActive} 
            card={card.card} 
            id={index}
            isFliped={props.flipped}
            clicked={props.clicked}
            firstCard={props.firstCard}
            secondCard={props.secondCard}  />
    ));
    return (
        <div className={styles.CardLayout}>
            {cardLayout}
        </div>

    );

}

export default GameLayout;