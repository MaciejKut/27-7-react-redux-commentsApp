import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpContent, thumbDownContent, editComment, removeComment } from './actions';


const mapDispatchToProps = dispatch => {
    return {
        thumbUpContent: (id) => dispatch(thumbUpContent(id)),
        thumbDownContent: (id) => dispatch(thumbDownContent(id)),
        removeComment: (id) => dispatch(removeComment(id)),
        editComment: (id, text) => dispatch(editComment(id, text))
    }
};

export default connect(null, mapDispatchToProps)(Comment);
