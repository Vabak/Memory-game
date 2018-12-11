import React from 'react';

import Card from '../../components/Card/Card';
import styles from './CardLayout.module.css';

const CardLayout = (props) => {
    const cardLayout = props.deck.map((card, index) => (
        card === null ? <div style={{height: "auto", width: "14%"}} /> :
        <Card 
            key={index} 
            card={card} 
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

export default CardLayout;