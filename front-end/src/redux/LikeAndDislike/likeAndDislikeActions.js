import axiosInstance from "../../axiosInstance";
import { LIKE_POST } from "./likeAndDislikeActionType";

export const fetchPostLike = userLike => {
    return {
        type: LIKE_POST,
        payload: userLike,
    };
};

// export const fetchPostDisLike = userDislike => {
//     return {
//         type: DISLIKE_POST,
//         payload: userDislike,
//     };
// };

// export const fetchPostUnlike = userUnlike => {
//     return {
//         type: LIKE_POST,
//         payload: userUnlike,
//     };
// };

// export const fetchPostUndisLike = userUndislike => {
//     return {
//         type: DISLIKE_POST,
//         payload: userUndislike,
//     };
// };

export const fetchLike = (profileId, postId) => {
    // console.log(profileId);
    return function (dispatch) {
        axiosInstance
            .post("/postLike", { profileId: profileId, postId: postId })
            .then(response => dispatch(fetchPostLike(response.data)))
            .catch(err => console.log(err));
    };
};
