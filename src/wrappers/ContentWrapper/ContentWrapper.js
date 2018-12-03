import React from 'react';
import styles from './ContentWrapper.module.css';
const ContentWrapper = (props) => {
    return ( 
        <div className={styles.ContentWrapper}>
            {props.children}
        </div>
     );
}
 
export default ContentWrapper;