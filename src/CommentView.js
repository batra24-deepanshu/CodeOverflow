import React from 'react'
import './CommentView.css'
function CommentView({id,email,comment}) {
    return (
        <div className="each_user_comment">
            
            <h3>{email}</h3>
            <div className="comment_body">
                <pre >{comment}</pre>
            </div>
        </div>
    )
}

export default CommentView
