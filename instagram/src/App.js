import React, { Component } from 'react';
import './App.css';

import data from './dummy-data.js'

import SearchBar from './components/SearchBar.js'
import Post from './components/Post.js'

const storageKey = 'notInstagramStorageKey'
const localData = JSON.parse(window.localStorage.getItem(storageKey));
console.log(localData);

class App extends Component {
  constructor(props){
    super(props)

    

    this.state = {
      searchInput: '',
      postData: [],
    }
  }

  componentDidMount(){
    let mountLocalData = window.localStorage.getItem(storageKey);
    this.setState({postData: mountLocalData && JSON.parse(mountLocalData).length >= 1 ? JSON.parse(mountLocalData) : data});
  }

  inputHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  searchInputHandler = (event) =>{
    let searchFor = event.target.value;
    let searchedData = localData.filter(d => {
      let result = JSON.stringify(Object.values(d)).match(new RegExp(searchFor))
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
