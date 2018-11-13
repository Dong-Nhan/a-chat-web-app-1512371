import React, { Component } from 'react'
import { ENTER_KEY_CODE } from '../constants';

const initialState = {
  chatMessage: ''
}

export default class ChatInput extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.chatMessage) return; //nothing to send
    let from = this.props.myFirebase.auth.uid;
    let to = this.props.userId;
    this.props.sendMessage(from, to, this.state.chatMessage);
    this.setState(initialState);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleKeyDown(e) {
    //user press Enter
    if (e.keyCode === ENTER_KEY_CODE && e.shiftKey === false) {
      this.handleSubmit(e);
    }
  }

  render() {
    let users = this.props.users || {};
    let userId = this.props.userId;
    let flag;
    if (users.hasOwnProperty(userId)) flag = true;
    else flag = false;
    return (
      flag ?
        <div className="col-12 h-25">
          <h2>ChatInput</h2>
          <form className="h-50" onSubmit={this.handleSubmit}>
            <div className="form-row h-100">
              <div className="col-9">
                <textarea type="text" name="chatMessage"
                  className="form-control h-100"
                  value={this.state.chatMessage}
                  onChange={this.handleInputChange}
                  onKeyDown={this.handleKeyDown} />
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <button type="submit"
                  className="btn btn-primary btn-lg w-75 h-75">Send</button>
              </div>
            </div>
          </form>
        </div>
        : null
    )
  }
}
