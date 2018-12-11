import React, { Component } from 'react';
import styles from './App.module.css';
import StartPage from './containers/StartPage/StartPage';
import Game from './containers/Game/Game';
import EndPage from './containers/EndPage/EndPage'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        {/* <StartPage /> */}
        <Game />
        {/* <EndPage /> */}
      </div>
    );
  }
}

export default App;
