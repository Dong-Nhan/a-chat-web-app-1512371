import React, { Component } from 'react';
import MicrolinkCard from 'react-microlink';
import NoOneToChat from './NoOneToChat';
import { URL_MESSAGE, NORMAL_MESSAGE } from '../constants';

const messageListToDisplayFactory = function (messageList, myId) {
  let result = Object.keys(messageList).map(key => {
    let messageContent = null;
    let isMyMessage = messageList[key].from === myId;

    //detect message type to display properly
    switch (messageList[key].type) {
      case URL_MESSAGE:
        messageContent = (
          <MicrolinkCard className={isMyMessage ? "ml-auto" : ""}
            url={messageList[key].message} />);
        break;
      case NORMAL_MESSAGE:
      default:
        messageContent = (
          <span className={isMyMessage ? "blue-message p-1 rounded" : "grey-message p-1 rounded"}>
            {messageList[key].message}
          </span>);
    }

    //align messages to be left or right
    if (messageList[key].from === myId) return (
      <div key={key} className="row my-2">
        <div className="col-7 offset-4 text-right">
          {messageContent}
        </div>
      </div>
    )
    else return (
      <div key={key} className="row my-3">
        <div className="col-7 offset-1">
          {messageContent}
        </div>
      </div>
    )
  });

  return result;
}

export default class ChatBox extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEnd && this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  render() {
    let messageList = this.props.messageList;
    let myId = this.props.myId;
    let messageListToDisplay = messageListToDisplayFactory(messageList, myId);
    return (
      !this.props.noOneToChat ?
        <div className="col-12 h-75 d-flex flex-column">
          <h2>ChatBox</h2>
          <div className="chat-box-container flex-fill">
            {messageListToDisplay}
            <div style={{ float: "left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
        </div>
        : <NoOneToChat />
    )
  }
}
