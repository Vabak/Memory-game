import React from 'react';
import styles from './Card.module.css'

const cardPath = '/Cards/'

const Card = (props) => {
    return (
        <img 
            className={styles.Card} 
            alt="Card" src={props.isFliped ? cardPath + props.card + '.png' : cardPath + 'BACK.png' }
            id={props.id} /> 
    );
}
 
export default Card; 