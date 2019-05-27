import React from 'react';
// import { editComment, removeComment } from './actions';

const Comment = ({ text, votes, id, thumbUpContent, thumbDownContent, removeComment }) =>
    <li key={id}>
        {text} <span>votes: {votes}</span>
        <button onClick={() => thumbUpContent(id)}>Thumb Up </button>
        <button onClick={() => thumbDownContent(id)}>Thumb Down </button>
        <button onClick={() => removeComment(id)}>Remove Comment</button>
    </li>;

export default Comment;