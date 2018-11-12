import React, { Component } from 'react'
import { Link } from "react-router-dom";
import SearchBox from './SearchBox';

export default class UserList extends Component {
  render() {
    let users = this.props.users;
    let onlineUsers = this.props.onlineUsers || {};
    let usersList = null;
    if (users) {
      usersList = users.map(item => {
        return (
          <Link to={`/chat/${item.key}`} key={item.key}>
            <div className="row mb-3">
              <div className="col-3 p-2">
                <img alt="User" className="img-fluid rounded"
                  src={item.value.avatarUrl} />
              </div>
              <div className="col-9">
                <div>{item.value.displayName}</div>
                <div>{onlineUsers.hasOwnProperty(item.key) ? 'online now' : 'offline'}</div>
              </div>
            </div>
          </Link>
        )
      })
    }
    return (
      <div className="row">
        <div className="col-12">
          <h2>UserList</h2>
        </div>
        <div className="col-12">
          <SearchBox searchTerm={this.props.searchTerm} setSearchTerm={this.props.setSearchTerm}/>
        </div>
        <div className="col-12">
          {usersList}
        </div>
      </div>
    )
  }
}
