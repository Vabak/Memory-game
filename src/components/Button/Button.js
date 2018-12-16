import React from 'react';
import styles from './Button.module.css';

import { Link } from 'react-router-dom'

const Button = (props) => {
    return ( 
        <Link className={styles.Button} to={props.link} onClick={props.clicked} >{props.btnContent}</Link>
    );
}
 
export default Button;