import React from 'react';

const Comment = ({ text, votes, id, thumbUpContent, thumbDownContent, removeComment, editComment }) =>
    <li key={id}>
        {text} <span>votes: {votes}</span>
        <button onClick={() => thumbUpContent(id)}>Thumb Up </button>
        <button onClick={() => thumbDownContent(id)}>Thumb Down </button>
        <button onClick={() => removeComment(id)}>Remove Comment</button>
        <button onClick={() => editComment(id, 'test')}>Edit Comment</button>
    </li>;

export default Comment;