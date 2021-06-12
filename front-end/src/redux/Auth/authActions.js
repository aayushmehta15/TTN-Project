import { REMOVE_USERS_TOKEN, SET_USERS_TOKEN } from "./authActionTypes";
import Cookies from "js-cookie";

export const setUserToken = () => {
    let checkToken;
    let checkAuth = false;

    // Checking of Token and and Auth
    checkToken = Cookies.get("auth_token");
    checkAuth = checkToken !== undefined ? true : false;

    return {
        type: SET_USERS_TOKEN,
        token: checkToken,
        isAuth: checkAuth,
    };
};

export const removeUserToken = () => {
    Cookies.remove("auth_token");
    return {
        type: REMOVE_USERS_TOKEN,
        isAuth: false,
    };
};
