import React from 'react';
import styles from './Card.module.css'

const cardPath = '/Cards/'

const Card = (props) => {
        let cardStyle = styles.Card;
        if (props.isFliped || props.firstCard === props.id || props.secondCard  === props.id) {
            cardStyle = [styles.Card, styles.Flip].join(' '); 
        }
        if (!props.isActive) {
            cardStyle = styles.Disabled;
        } 
        return (
            <div
                id={props.id} 
                className={cardStyle}
                onClick={props.isActive ? () => props.clicked(props.id, props.card) : null}>
                <img
                    className={styles.FrontFace}
                    alt="Card" src={cardPath + props.card + '.png'}/>
                <img
                    className={styles.BackFace}
                    alt="Card" src={cardPath + 'BACK.png'}/>
            </div>

        );
    }

    export default Card; 