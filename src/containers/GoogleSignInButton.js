import React from 'react'
import { connect } from 'react-redux';
import { signInWithGooggle } from '../actions';

const GoogleSignInButton = ({ handleClick }) => {
  return <button className="App-link" onClick={handleClick}> Sign in </button>
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(signInWithGooggle());
    }
  }
}

export default connect(null, mapDispatchToProps)(GoogleSignInButton)
