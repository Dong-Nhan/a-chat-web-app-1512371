import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './containers/Chat';
import HomePage from './containers/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/chat' component={Chat} />
          <Route render={() => <div>You found me haha</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;