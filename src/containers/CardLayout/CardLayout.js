import React from 'react';

import Card from '../../components/Card/Card';
import styles from './CardLayout.module.css';

const CardLayout = (props) => {
    let cardLayout = props.cards.map((card, index) => (
        <Card key={index} card={card} id={index}  />
    ));
    return (
        <div className={styles.CardLayout}>
            {cardLayout}
        </div>

    );

}

export default CardLayout;