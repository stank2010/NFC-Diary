import React, { Component } from 'react';
import ShowText from './component/textShow'
import './App.css';

class App extends Component {
  state = {
    texts: [],
    h: "",
    count: 0
  }

  handleChange = (event) => {
    this.setState({
      h: event.target.value
    })
  }

  handleSubmit = (event) => {
    var texts = this.state.texts;
    texts.push({
      id: this.state.count,
      text: this.state.h
    })
    this.setState({
      h: "",
      texts: texts,
      count: this.state.count + 1
    })
    event.preventDefault();
    console.log("add complete")
  }

  handleDelete = (id) => {
    const texts = this.state.texts.filter(e => e.id !== id)
    console.log(texts)
    this.setState({
      texts: texts,
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <label>
          <input onChange={this.handleChange} onKeyPress={(e) => { if (e.key === "Enter") { this.handleSubmit(e) } }}></input>
        </label>
        <button onClick={(e) => { this.handleSubmit(e) }} > submit </button>
        <div>
          {
            this.state.texts.map(c => <ShowText onDelete={this.handleDelete} id={c.id} key={c.id} textOut={c.text} />)
          }
        </div>
      </div >
    )
  }
}

export default App;
