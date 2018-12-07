import React, { Component } from 'react';
import styles from './App.module.css';
import StartPage from './containers/StartPage/StartPage';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <StartPage />
      </div>
    );
  }
}

export default App;
