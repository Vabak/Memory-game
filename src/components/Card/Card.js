import React from 'react';
import styles from './Card.module.css'

const cardPath = '/Cards/'

const Card = (props) => {
    return (
        <img 
            className={styles.Card} 
            alt="Card" src={props.isFliped 
                || props.firstCard === props.id
                || props.secondCard === props.id ? 
                cardPath + props.card + '.png' 
                : cardPath + 'BACK.png' }
            id={props.id}
            onClick={() => props.clicked(props.id, props.card)}
             /> 
    );
}
 
export default Card; 