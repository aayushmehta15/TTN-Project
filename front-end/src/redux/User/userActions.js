import axiosInstance from "../../axiosInstance";
import {
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
} from "./userActionTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    };
};
export const fetchUserSuccess = usersData => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: usersData,
    };
};
export const fetchUserFailure = err => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err,
    };
};

export const fetchUserData = () => {
    return function (dispatch) {
        // dispatch(fetchUserRequest);
        axiosInstance
            .get("/feedsData")
            .then(response => {
                // console.log(response.data);
                const userData = response.data;
                dispatch(fetchUserSuccess(userData));
            })
            .catch(error => dispatch(fetchUserFailure(error.message)));
    };
};
