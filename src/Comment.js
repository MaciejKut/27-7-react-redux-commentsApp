import React from 'react';

const Comment = ({ text, votes, id, thumbUpComment }) =>
    <li>
        {text} <span>votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>Thumb Up </button>
    </li>;

export default Comment;