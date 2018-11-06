import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './Chat.css';
import NoOneToChat from "../components/NoOneToChat";

import UserListContainer from './UserListContainer';
import ChatBoxContainer from './ChatBoxContainer';
import GoogleSignOutButton from './GoogleSignOutButton';
import GoogleSignInButton from './GoogleSignInButton';
import ChatInputContainer from './ChatInputContainer';

class Chat extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div>
        <div className="container-fluid my-header">
          This is header
          <GoogleSignInButton/>
          <GoogleSignOutButton/>
        </div>
        <div className="container-fluid d-flex my-container">
          <div className="row flex-fill">
            <div className="col-3 user-list">
              <UserListContainer/>
            </div>
            <div className="col-9">
              <div className="row h-100">
              <Switch>
                <Route exact path="/chat/:id" component={({match}) => <ChatBoxContainer userId={match.params.id}/>}/>
                <Route component={NoOneToChat} />
              </Switch>
                <ChatInputContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
