import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class UserList extends Component {
  render() {
    let users = this.props.users;
    let onlineUsers = this.props.onlineUsers || {};
    return (
      <div>
        <h2>UserList</h2>
        <div className="row">
          {
            users ? users.map(item => {
              return (
                <Link to={`/chat/${item.key}`} key={item.key}>
                  <div className="col-12 mb-3">
                    <div className="row">
                      <div className="col-3 p-2">
                        <img alt="User" className="img-fluid rounded"
                          src={item.value.avatarUrl} />
                      </div>
                      <div className="col-9">
                        <div>{item.value.displayName}</div>
                        <div>{onlineUsers.hasOwnProperty(item.key) ? 'online now' : 'offline'}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            }) : null
          }
        </div>
      </div>
    )
  }
}
