import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Chat from './containers/Chat';
import HomePage from './containers/HomePage';
import IsAuthenticated from './utils/IsAuthenticated';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/chat' component={IsAuthenticated(Chat)} />
          <Route render={() => <div>You found me haha</div>} />
        </Switch>
      </Router>
    );
  }
}

export default App;