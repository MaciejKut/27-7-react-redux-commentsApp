import React from 'react';
import Comment from './Comment';


console.log(Comment);
const CommentsList = ({ comments }) => <ul>{comments.map(comment => <Comment key={comment.id} {...comment} />)}</ul>;

export default CommentsList;