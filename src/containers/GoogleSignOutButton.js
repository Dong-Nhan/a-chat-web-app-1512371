import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';

const GoogleSignOutButton = (props) => {
  return <button className="App-link" onClick={props.handleClick}> Sign out </button>
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(signOut());
    }
  }
}

export default connect(null,mapDispatchToProps)(GoogleSignOutButton);

