import {
    FETCH_POST_FAILURE,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    CREATE_POST,
} from "./postActionTypes";

const intialState = {
    loading: false,
    err: "",
    postData: [],
    updatePost: false,
};

const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true,
                err: "",
                updatePost: false,
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                err: "",
                isAuth: true,
                postData: action.payload,
                updatePost: false,
            };
        case FETCH_POST_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload,
                updatePost: false,
            };
        case CREATE_POST:
            return {
                ...state,
                loading: false,
                err: "",
                updatePost: true,
            };
        default:
            return state;
    }
};

export default postReducer;
