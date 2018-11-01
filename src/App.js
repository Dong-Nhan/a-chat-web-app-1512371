import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleSignInButton from './containers/GoogleSignInButton';
import { connect } from 'react-redux';
import GoogleSignOutButton from './containers/GoogleSignOutButton';

class App extends Component {
  render() {
    console.log(this.props.firebase.auth);
    let auth = this.props.firebase.auth;
    let isEmpty = auth.isEmpty;
    let photoURL = auth.photoURL || logo;
    return (
      <div className="App">
        <header className="App-header">
          <img src={photoURL} className="App-logo" alt="logo" />
          <p className="helloBox">
            Hello World{!isEmpty ? ', ' + auth.displayName : '' }
          </p>
          {isEmpty ? <GoogleSignInButton/> : <GoogleSignOutButton/>}
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firebase: state.firebase
  }
}

export default connect(mapStateToProps)(App);
