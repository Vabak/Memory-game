import React from 'react';
import styles from './Button.module.css';

import { Link } from 'react-router-dom'

const Button = (props) => {
    return ( 
        <Link className={styles.Button} to={props.link} >{props.btnContent}</Link>
    );
}
 
export default Button;