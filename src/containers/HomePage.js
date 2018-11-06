import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

import logo from '../logo.svg';

import GoogleSignInButton from './GoogleSignInButton';
import GoogleSignOutButton from './GoogleSignOutButton';

class HomePage extends Component {
  render() {
    console.log(JSON.stringify(this.props.firebase1.data));
    console.log(this.props.firebase1);
    let auth = this.props.firebase1.auth;
    let isEmpty = auth.isEmpty;
    let photoURL = auth.photoURL || logo;
    return (
      <div className="App">
        <header className="App-header">
          <img src={photoURL} className="App-logo" alt="logo" />
          {
            !isEmpty ?
              <div className="helloBox">
                Hello {', ' + auth.displayName}
                <div>
                  <Link to="/chat">go to chat</Link>
                </div>
              </div> : <div>Hello world</div>
          }

          {isEmpty ? <GoogleSignInButton /> : <GoogleSignOutButton />}
        </header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    firebase1: state.firebase
  }
}

export default compose(
  connect(mapStateToProps),
  firebaseConnect()
)(HomePage)