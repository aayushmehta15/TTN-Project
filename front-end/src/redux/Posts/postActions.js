import axiosInstance from "../../axiosInstance";
import {
    FETCH_POST_FAILURE,
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
} from "./postActionTypes";

export const fetchPostRequest = () => {
    return {
        type: FETCH_POST_REQUEST,
    };
};
export const fetchPostSuccess = postData => {
    return {
        type: FETCH_POST_SUCCESS,
        payload: postData,
    };
};
export const fetchPostFailure = err => {
    return {
        type: FETCH_POST_FAILURE,
        payload: err,
    };
};

export const fetchPostsData = () => {
    // return function (dispatch) {
    //     // dispatch(fetchUserRequest);
    //     let response = axiosInstance
    //         .get("/feedsData")
    //         .then(response => {
    //             // console.log(response.data);
    //             const userData = response.data;
    //             dispatch(fetchUserSuccess(userData));
    //         })
    //         .catch(error => dispatch(fetchUserFailure(error.message)));
    // };
};
