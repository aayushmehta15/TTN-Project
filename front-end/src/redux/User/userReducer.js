import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
} from "./userActionTypes";

const intialState = {
    loading: false,
    err: "",
    userData: [],
};

const userReducer = (state = intialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                err: "",
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                err: "",
                isAuth: true,
                userData:action.payload
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                err: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
