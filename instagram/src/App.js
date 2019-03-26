import React, { Component } from 'react';
import './App.css';

import data from './dummy-data.js'

import SearchBar from './components/SearchBar.js'
import Post from './components/Post.js'

const storageKey = 'notInstagramStorageKey'

class App extends Component {
  constructor(props){
    super(props)

    

    this.state = {
      searchInput: '',
      postData: [],
    }
  }

  componentDidMount(){
    let localData = window.localStorage.getItem(storageKey);
    this.setState({postData: localData && JSON.parse(localData).length >= 1 ? JSON.parse(localData) : data});
  }

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  searchInputHandler = (event) =>{
    let searchFor = event.target.value;
    let searchedData = data.filter(d => {
      let result = JSON.stringify(d).match(new RegExp(searchFor))
      return !!result // bangBang!!
    })

    this.setState({[event.target.name]: event.target.value, postData: searchedData})
  }

  updatePost = (updatedPost) => {
    let postIndex = this.state.postData.findIndex(post => post.id === updatedPost.id);
    let updatedData = [...this.state.postData];
    updatedData[postIndex] = updatedPost;
    this.setState({postData: updatedData})

  }

  componentDidUpdate() {
    window.localStorage.setItem(storageKey, JSON.stringify(this.state.postData))
  }

  render() {

    return (
      <div className="App">
        <SearchBar inputHandler={this.searchInputHandler}/>

        <div className="postContainer">
          {this.state.postData.map(post => (
            <Post 
              key={post.id} 
              post={post}
              update={this.updatePost}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
