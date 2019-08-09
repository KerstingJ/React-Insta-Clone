import React, { Component } from "react";

import dataFromFile from "./dummy-data.js";

import SearchBar from "./components/SearchBar.js";
import PostContainer from "./components/PostContainer.js";
import LoginPage from "./components/LoginPage.js";

import getAuth from "./components/Authenticate.js";

const storageKey = "notInstagramStorageKey";
const localData = JSON.parse(window.localStorage.getItem(storageKey));

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      postData: [],
      isLoggedIn: false
    };
  }

  componentDidMount() {
    let dataFromStorage = window.localStorage.getItem(storageKey);
    let goodData = dataFromStorage && JSON.parse(dataFromStorage).length >= 1 ? JSON.parse(dataFromStorage) : dataFromFile;
    const authToken = getAuth();

    this.setState({ postData: goodData, isLoggedIn: authToken.isLoggedIn });

  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  searchInputHandler = event => {
    let searchFor = event.target.value;
    let searchedData = localData.filter(d => {
      let result = JSON.stringify(Object.values(d)).match(
        new RegExp(searchFor)
      );
      return !!result; // bangBang!!
    });

    this.setState({
      [event.target.name]: event.target.value,
      postData: searchedData
    });
  };

  updatePost = updatedPost => {
    
    let postIndex = this.state.postData.findIndex(
      post => post.id === updatedPost.id
    );

    let updatedData = [...this.state.postData];

    updatedData[postIndex] = updatedPost;

    this.setState({ postData: updatedData });
  };

  componentDidUpdate() {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify(this.state.postData)
    );
  }

  PostsPage = props => {
    return (
      <div className="App">
        <SearchBar 
          inputHandler={this.searchInputHandler}
          setAppState={this.setState.bind(this)}
        />

        <div className="postContainer">
          {this.state.postData.map(post => (
            <PostContainer key={post.id} post={post} update={this.updatePost} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    let View = this.state.isLoggedIn ? this.PostsPage : LoginPage;

    return (<View setAppState={this.setState.bind(this)} />);
  }
}

export default App;
