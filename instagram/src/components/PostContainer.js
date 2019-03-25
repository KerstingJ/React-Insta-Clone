import React from 'react'
import Styled from 'styled-components'

import CommentSection from './CommentSection.js'


function PostContainer(props) {
    const post = props.postData[0];
    console.log(post);
    return (

        <div className="postContainer">

            {props.postData.map(post => {
            return (<Post> 
                {/* Header */}
                <PostHead>
                    <Thumbnail alt="user thumbnail image" src={post.thumbnailUrl}/>
                    <h2>{post.username}</h2>
                </PostHead>
                {/* Image */}
                <img src={post.imageUrl} alt="PostedImage" />
                {/* Action w/ likes*/}
                <PostFoot>
                    <div className="icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    </div>
                    <div className="likes">{post.likes} Likes</div>
                    <CommentSection comments={post.comments} />
                    <div>{post.timestamp}</div>
                    <AddComment>
                        <PostInput 
                            placeholder="Add a comment..."
                        ></PostInput>
                        <i className="fas fa-ellipsis-h"></i>
                    </AddComment>
                </PostFoot>
            </Post>)})}

        </div>
    )
}

const Post = Styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3px;
    margin: 15px;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0,0,0, 0.4);

    max-width: 600px;
`

const PostHead = Styled.div`
    padding: 5px;
    min-height: 50px;
    display: flex;
    align-items: center;
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

const AddComment = Styled.div`
    padding: 10px 0;
    margin-top: 10px;
    border-top: 1px solid black;
`

const PostInput = Styled.input`
    width: 92%;
    border: none;
    text-align: left;
`


export default PostContainer;