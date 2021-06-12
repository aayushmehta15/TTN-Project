import { SET_USERS_TOKEN, REMOVE_USERS_TOKEN } from "./authActionTypes";

const intialState = {
    token: "",
    isAuth: false,
};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_USERS_TOKEN:
            return {
                ...state,
                token: action.token,
                isAuth: action.isAuth,
            };
        case REMOVE_USERS_TOKEN:
            return {
                ...state,
                token: "",
                isAuth: action.isAuth,
            };
        default:
            return state;
    }
};

export default authReducer;
