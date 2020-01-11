import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/navbar'
import Profile from '../component/profileCard'
import Textshow from '../component/textShow'

class MainPage extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Profile></Profile>
        <Link to="/editDiary">Add</Link>
        <Textshow />
      </div>
    )
  }
}

export default MainPage