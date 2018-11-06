import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from "react-redux-firebase";

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
          <p className="helloBox">
            Hello World{!isEmpty ? ', ' + auth.displayName : ''}
          </p>
          <div>Your data: <code>
            {JSON.stringify(this.props.firebase1.data)}
          </code>
          </div>
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
  firebaseConnect(['arrays'])
)(HomePage)