import React from 'react'
import Styled from 'styled-components'
// import PropTypes from 'prop-types'


import getAuthToken from './Authenticate.js'
import CommentSection from './CommentSection.js'


class PostContainer extends React.Component {
    constructor(props) {
        super(props)

        // I know they wanted this in comment Section but this made more sense to me
        this.state = {
            username: getAuthToken().username,
            commentInput: ""
        }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    submitComment = (event, updatePostInApp) => {
        event.preventDefault();

        let newComment = {
            id: Date.now(),
            username: this.state.username,
            text: this.state.commentInput
        }

        let updatedPost = this.props.post;
        updatedPost.comments = [...this.props.post.comments, newComment];
        updatePostInApp(updatedPost);

        this.setState({commentInput: ""});
    }

    addLike = (event, updatePostInApp) => {
        event.preventDefault();
        let updatedPost = this.props.post;
        updatedPost.likes++
        updatePostInApp(updatedPost)
    }
    
    render() {
        return (
            <Post> 
                {/* Header */}
                <PostHead>
                    <div className="left">
                        <Thumbnail alt="user thumbnail image" src={this.props.post.thumbnailUrl}/>
                        <h2>{this.props.post.username}</h2>
                    </div>
                    <div className="date">{this.props.post.timestamp.split(',')[0]}</div>
                </PostHead>
    
                {/* Image */}
                <img src={this.props.post.imageUrl} alt="PostedImage" />
    
                {/* Footer stuff below Image -- is this a commentSection? */}
                <PostFoot>

                    {/* heart and comments icons */}
                    <form onSubmit={event => this.addLike(event, this.props.update)} className="icons">
                        <LikeSubmit><i className="far fa-heart"></i></LikeSubmit>
                        <i className="far fa-comment"></i>
                    </form>

                    {/* Likes Display */}
                    <div className="likes">{this.props.post.likes} Likes</div>

                    {/* Comments Section */}
                    <CommentSection 
                        comments={this.props.post.comments}
                        submitComment={event => this.submitComment(event, this.props.update)}
                        handleInput={this.handleInput}
                        inputValue={this.state.commentInput}
                    />
    
                </PostFoot>
            </Post>
        )
    }
}

const Post = Styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 3px;
    margin: 15px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0,0,0, 0.4);

    max-width: 600px;
`

const PostHead = Styled.div`
    padding: 5px;
    min-height: 50px;
    display: flex;
    align-items: center;
    width: 98%;

    display: flex;
    justify-content: space-between;

    .left {
        display: flex;
        align-items: center;
    }
    
    .date {
        text-align: right;
    }
`

const Thumbnail = Styled.img`
    height: 25px;
    width: 25px;
    border-radius: 25px;
    
    margin: 10px;
`

const PostFoot = Styled.div`
    text-align: left;
    width: 100%;
    padding: 10px;

`

const LikeSubmit = Styled.button`
    border: none;
    width: auto;
    height: auto;
    background: none;

    :focus {
        outline: none;
    }
`

export default PostContainer;