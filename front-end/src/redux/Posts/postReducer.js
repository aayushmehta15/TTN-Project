import {
    FETCH_POST_FAILURE,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
} from "./postActionTypes";

const intialState = {
    loading: false,
    err: "",
    postData: [],
};

const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_POST_REQUEST:
            return {
                ...state,
                loading: true,
                err: "",
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                err: "",
                isAuth: true,
                postData: action.payload,
            };
        case FETCH_POST_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
