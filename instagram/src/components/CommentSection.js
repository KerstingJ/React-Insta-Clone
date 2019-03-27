import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'

function CommentSection(props){
    
    return (<>
        <div>
            {props.comments && props.comments.map(comment => {
                return <p key={comment.id}><strong>{comment.username}</strong> {comment.text}</p>
            })}
        </div>
        <AddComment onSubmit={props.submitComment}>
            <PostInput 
                name='commentInput'
                onChange={props.handleInput}
                placeholder="Add a comment..."
                value={props.inputValue}
            ></PostInput>
            <i className="fas fa-ellipsis-h"></i>
        </AddComment>
    </>)
}

const CommentShape = PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string
})

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(CommentShape),
}

const AddComment = Styled.form`
    padding: 10px 0;
    margin-top: 10px;
    border-top: 1px solid black;
`

const PostInput = Styled.input`
    width: 92%;
    border: none;
    text-align: left;
`


export default CommentSection;