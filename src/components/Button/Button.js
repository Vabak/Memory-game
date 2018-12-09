import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
    return ( 
        <button className={styles.Button}>{props.btnContent}</button>
     );
}
 
export default Button;