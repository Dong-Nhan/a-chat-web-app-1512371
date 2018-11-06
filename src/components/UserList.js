import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    console.log(this.props.myFirebase);
    console.log(this.props.users);
    let users = this.props.users;
    return (
      <div>
        <h2>UserList</h2>
        <div className="row">
          {/* {users ? Object.keys(users).map(key => {
            return (
              
            )
          }) : null
          } */}
          {
            users ? users.map(item => {
              return (
                <div key={item.key} className="col-12">
                <div className="row">
                  <div className="col-3">
                    <img alt="User" className="img-fluid rounded"
                      src={item.value.avatarUrl} />
                  </div>
                  <div className="col-9">{item.value.displayName}</div>
                </div>
              </div>
              )
            }) : null
          }
          <div className="col-12">User 2</div>
        </div>
      </div>
    )
  }
}
