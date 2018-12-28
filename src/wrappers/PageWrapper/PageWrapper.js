import React from 'react';
import styles from './PageWrapper.module.css';

const PageWrapper = (props) => 
    (
        <main className={styles.PageWrapper} >
            {props.children}
        </main>
    )

export default PageWrapper;