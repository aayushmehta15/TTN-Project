import {
    FETCH_COMMENT_FAILURE,
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
    CREATE_COMMENT,
} from "./commentActionTypes";

const intialState = {
    loading: false,
    err: "",
    commentData: [],
    updateComment: false,
};

const commentReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_COMMENT_REQUEST:
            return {
                ...state,
                loading: true,
                err: "",
                updateComment: false,
            };
        case FETCH_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                err: "",
                isAuth: true,
                commentData: action.payload,
                updateComment: false,
            };
        case FETCH_COMMENT_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload,
                updateComment: false,
            };
        case CREATE_COMMENT:
            return {
                ...state,
                loading: false,
                err: "",
                updateComment: true,
            };
        default:
            return state;
    }
};

export default commentReducer;
