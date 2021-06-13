const { LIKE_POST } = require("./likeAndDislikeActionType");

const intialState = {
    like: false,
    userLike: [],
    dislike: false,
    userDislike: [],
};

const likeAndDislikeReducer = (state = intialState, action) => {
    switch (action.type) {
        case LIKE_POST:
            return {
                ...state,
                like: true,
                dislike: false,
                userLike: action.payload,
            };
        default:
            return state;
    }
};

export default likeAndDislikeReducer;
