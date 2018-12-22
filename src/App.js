import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import styles from './App.module.css';
import StartPage from './containers/StartPage/StartPage';
import Game from './containers/Game/Game';
import EndPage from './containers/EndPage/EndPage';


class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Route exact path="/" component={StartPage}  />
        <Route path="/game" component={Game} />
        <Route  path='/end' component={EndPage} />
      </div>
    );
  }
}

export default App;
