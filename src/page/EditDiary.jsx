import React, { Component } from 'react'
import { Link } from "react-router-dom";

class EditDiary extends Component {
  render() {
    return (
      <div>
        <Link to="/mainPage">back</Link>
        <h1>This is edit page</h1>
      </div>
    )
  }
}

export default EditDiary