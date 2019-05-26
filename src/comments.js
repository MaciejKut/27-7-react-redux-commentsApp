import { ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT } from './actions';



function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state]

        case REMOVE_COMMENT:
            return [
                state.comments.filter(comment => comment.id !== action.id)
            ]
        case EDIT_COMMENT:
            return [
                state.comments.map(comment => {
                    if (comment.id !== action.id) {
                        return comments
                    }

                    return Object.assign({}, comment, {
                        text: action.text
                    })
                })
            ]
        case THUMB_DOWN_COMMENT:
            return [
                state.comments.map(comment => {
                    if (comment.id !== action.id) {
                        return comments
                    }

                    return Object.assign({}, comment, {
                        votes: state.votes - 1
                    })
                })
            ]
        case THUMB_UP_COMMENT:
            return [
                state.comments.map(comment => {
                    if (comment.id !== action.id) {
                        return comments
                    }

                    return Object.assign({}, comment, {
                        votes: state.votes + 1
                    })
                })
            ]
        default:
            return state;
    }
}


export default comments;