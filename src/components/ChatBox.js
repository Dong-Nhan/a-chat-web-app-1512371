import React, { Component } from 'react'

export default class ChatBox extends Component {
  componentWillMount() {
    this.props.chooseUser(this.props.userId);
  }

  render() {
    return (
      <div className="col-12 h-75">
        Chatbox
      </div>
    )
  }
}
