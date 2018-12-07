import React from 'react';

const cardPath = '../../assets/img/Cards';

const Card = (props) => {
    return (
        <img alt="Card" src={cardPath + props.card + '.png'} /> 
    );
}
 
export default Card;