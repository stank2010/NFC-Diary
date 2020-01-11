import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1"><Link to="/mainPage">mainPage</Link></span>
        <span class="nav-item justify-content-end"><Link to="/profile">Profile</Link></span>
      </nav>
    )
  }
}

export default Navbar