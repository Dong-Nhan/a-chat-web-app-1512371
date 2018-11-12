import React, { Component } from 'react'

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.setSearchTerm(e.target.value);
  }

  render() {
    return (
      <input value={this.props.searchTerm} onChange={this.handleChange} />
    )
  }
}
