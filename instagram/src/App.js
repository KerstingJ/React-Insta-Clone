import React, { Component } from 'react';
import './App.css';

import data from './dummy-data.js'

import SearchBar from './components/SearchBar.js'
import PostContainer from './components/PostContainer.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchInput: '',
      postData: data,
    }
  }

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <SearchBar inputHandler={this.inputHandler}/>
        <PostContainer postData={this.state.postData} />
      </div>
    );
  }
}

export default App;
