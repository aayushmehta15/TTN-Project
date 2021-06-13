import axiosInstance from "../../axiosInstance";
import {
    CREATE_COMMENT,
    FETCH_COMMENT_FAILURE,
    FETCH_COMMENT_REQUEST,
    FETCH_COMMENT_SUCCESS,
} from "./commentActionTypes";

export const fetchCommentRequest = () => {
    return {
        type: FETCH_COMMENT_REQUEST,
    };
};
export const fetchCommentSuccess = commentData => {
    return {
        type: FETCH_COMMENT_SUCCESS,
        payload: commentData,
    };
};
export const fetchCommentFailure = err => {
    return {
        type: FETCH_COMMENT_FAILURE,
        payload: err,
    };
};

export const createCommentSuccess = () => {
    return {
        type: CREATE_COMMENT,
    };
};

export const createCommentData = data => {
    return function (dispatch) {
        axiosInstance.post("/createComment", data).then(response => {
            console.log(response);
            dispatch(createCommentSuccess());
        });
    };
};

// export const fetchPostsData = () => {
//     return function (dispatch) {
//         // dispatch(fetchUserRequest);
//         axiosInstance
//             .get("/getCommentData")
//             .then(response => {
//                 console.log(response);
//                 const commentData = response.data;
//                 dispatch(fetchCommentSuccess(commentData));
//             })
//             .catch(error => dispatch(fetchPostFailure(error.message)));
//     };
// };
