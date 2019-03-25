import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/SearchBar.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: '',
    }
  }
  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <SearchBar inputHandler={this.inputHandler}/>
      </div>
    );
  }
}

export default App;
