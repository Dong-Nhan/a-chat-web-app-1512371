import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SearchBox from './SearchBox';

export default class UserList extends Component {
  render() {
    let users = this.props.users;
    console.log(users)
    let usersListToDisplay = null;
    if (users) {
      usersListToDisplay = users.map(item => {
        return (
          <div key={item.key} className="row mb-3">
            <div className="col-3 p-2">
              <img alt="User" className="img-fluid rounded"
                src={item.value.avatarUrl} />
            </div>
            <div className="col-9">
              <div>
                <Link to={`/chat/${item.key}`}>{item.value.displayName + ' '}</Link>
                <span className={item.value.isStarred ? "fa fa-star checked" : "fa fa-star"}
                  onClick={() => this.props.starUser(item.key)} />
              </div>
              {item.value.isOnline ? <div className="is-online">online now</div> : <div className="is-offline">offline</div>}
            </div>
          </div>
        )
      })
    }
    return (
      <div className="row">
        <div className="col-12">
          <h2>UserList</h2>
        </div>
        <div className="col-12">
          <SearchBox searchTerm={this.props.searchTerm} setSearchTerm={this.props.setSearchTerm} />
        </div>
        <div className="col-12">
          {usersListToDisplay}
        </div>
      </div>
    )
  }
}
