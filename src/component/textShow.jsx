import React, { Component } from 'react'

class ShowText extends Component {
  state = {
    text: this.props.textOut
  }
  render() {
    return (
      <div className="card w-45">
        <div className="card-body">
          <p>{this.state.text}</p>
          <button className="button" onClick={() => { this.props.onDelete(this.props.id) }}>Delete</button>
        </div>
      </div>
    )
  }
}

export default ShowText