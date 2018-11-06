import React, { Component } from 'react';

import './Chat.css';
import UserListContainer from './UserListContainer';
import GoogleSignOutButton from './GoogleSignOutButton';
import GoogleSignInButton from './GoogleSignInButton';

class Chat extends Component {
  render() {
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
                <div className="col-12 h-75">Chatbox</div>
                <div className="col-12 h-25">ChatInput</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat;
