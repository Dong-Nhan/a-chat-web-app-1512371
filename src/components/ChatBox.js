import React, { Component } from 'react';
import NoOneToChat from './NoOneToChat';

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
    return (
      !this.props.noOneToChat ?
        <div className="col-12 h-75 d-flex flex-column">
          <h2>ChatBox</h2>
          <div className="chat-box-container flex-fill">
            {
              Object.keys(messageList).map(key => {
                if (messageList[key].from === myId) return (
                  <div key={key} className="row my-2">
                    <div className="col-7 offset-4 text-right">
                      <span className="blue-message p-1 rounded">{messageList[key].message}</span>
                    </div>
                  </div>
                )
                else return (
                  <div key={key} className="row my-3">
                    <div className="col-7 offset-1">
                      <span className="grey-message p-1 rounded">{messageList[key].message}</span>
                    </div>
                  </div>
                )
              })
            }
            <div style={{ float: "left", clear: "both" }}
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
          </div>
        </div>
        : <NoOneToChat />
    )
  }
}
