import React from 'react'
import PropTypes from 'prop-types'

function CommentSection(props){
    
    return (
        <div>
            {props.comments && props.comments.map(comment => {
                return <p key={comment.id}><strong>{comment.username}</strong> {comment.text}</p>
            })}
        </div>
    )
}

const CommentShape = PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string
})

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(CommentShape),
}


export default CommentSection;