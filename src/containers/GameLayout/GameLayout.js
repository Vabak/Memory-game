import React from 'react';

import Card from '../../components/Card/Card';

const CardLayout = (props) => {
    let cardLayout = props.cards.map((card, index) => (
        <Card key={index} card={card}  />
    ));
    return (
        <div>
            {cardLayout}
        </div>

    );

}

export default CardLayout;