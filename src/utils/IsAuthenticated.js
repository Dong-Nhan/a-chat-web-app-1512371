import React, { Component } from 'react';
import { withRouter, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    render() {
      if (!this.props.authenticated) return <Redirect to="/"/>
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state, ownProps) {
    return {
      authenticated: !state.firebase.auth.isEmpty,
      history: ownProps.history
    };
  }

  return withRouter(connect(mapStateToProps)(Authentication));
}