import axiosInstance from "../../axiosInstance";
import {
    CREATE_POST,
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

export const createPostSuccess = () => {
    return {
        type: CREATE_POST,
    };
};

export const createPostData = data => {
    return function (dispatch) {
        axiosInstance
            .post("/createPost", data, {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            })
            .then(response => {
                // console.log(response);
                dispatch(createPostSuccess());
            });
    };
};

export const fetchPostsData = () => {
    return function (dispatch) {
        // dispatch(fetchUserRequest);
        axiosInstance
            .get("/getPostData")
            .then(response => {
                // console.log(response);
                const postData = response.data;
                dispatch(fetchPostSuccess(postData));
            })
            .catch(error => dispatch(fetchPostFailure(error.message)));
    };
};
