import React, { Component, Fragment } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import './Chat.css';
import NoOneToChat from "../components/NoOneToChat";

import UserListContainer from './UserListContainer';
import ChatBoxContainer from './ChatBoxContainer';
import ChatInputContainer from './ChatInputContainer';

class Chat extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <h2 className="align-self-start">Header</h2>
            </div>
            <div className="col-6 d-flex justify-content-end align-items-center">
              <Link to='/'>back home</Link>
            </div>
          </div>
        </div>
        <div className="container-fluid d-flex my-container">
          <div className="row flex-fill">
            <div className="col-3 user-list">
              <UserListContainer />
            </div>
            <div className="col-9">
              <div className="row h-100">
                <Switch>
                  <Route exact path="/chat/:id" render={({ match }) => {
                    return (
                      <Fragment>
                        <ChatBoxContainer userId={match.params.id} />
                        <ChatInputContainer userId={match.params.id} />
                      </Fragment>
                    )
                  }
                  } />
                  <Route component={NoOneToChat} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
